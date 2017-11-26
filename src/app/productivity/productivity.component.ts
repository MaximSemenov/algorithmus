import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { ProblemService } from './../services/problem.service';

import { Observable } from 'rxjs/Rx';
import { NavigationService } from './../services/navigation.service';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';






@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent implements OnInit, OnDestroy {

  public problemSolutionSubscribtion: Subscription;
  public problemSolution: string;
  public performanceTime: number;
  public isReportShown: Boolean = false;
  public testResults = [];



  constructor(private problemService: ProblemService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isReportShown = false;
      }
    });
  }

  ngOnInit() {

    this.problemSolutionSubscribtion = this.route.params
      .pluck('id')
      .filter(Boolean)
      .switchMap(id => this.problemService.getProblem(+id))

      .map(base64Problem => {
        base64Problem.solution = atob(base64Problem.solution);

        return base64Problem;

      })
      .subscribe(problem => this.problemSolution = problem.solution);



  }

  openPerformanceCard(testPerformanceButton) {

    if (!this.isReportShown) {
      this.executeSolution();
      this.isReportShown = !this.isReportShown;
      testPerformanceButton.textContent = 'Close it';
      return;
    }
    testPerformanceButton.textContent = 'Test Performance';
    this.isReportShown = false;
  }


  executeSolution() {

    const startTime = + new Date();

    Array(1000).fill(1).forEach(() => {
      eval(this.problemSolution);
    });

    const endTime = + new Date();
    this.test();
    return this.performanceTime = endTime - startTime;
  }

  test() {
    const testedFunction = eval(this.problemSolution);
    const test = [
      { testUnit: 'eye', rightResult: true },
      { testUnit: '_eye', rightResult: true },
      { testUnit: 'Hello', rightResult: true },
      { testUnit: 'race car', rightResult: true },
      { testUnit: 'not a palindrome', rightResult: false },
      { testUnit: 'A man, a plan, a canal. Panama', rightResult: true },
      { testUnit: 'never odd or even', rightResult: true },
      { testUnit: 'nope', rightResult: false },
      { testUnit: 'almostomla', rightResult: false },
      { testUnit: 'My age is 0, 0 si ega ym.', rightResult: true }
    ];

    test.forEach(item => {
      const functionExecution = testedFunction(item.testUnit);
      this.testResults.push({
        testUnit: item.testUnit,
        testResult: {
          result: functionExecution,
          expectedResult: item.rightResult,
          passed: functionExecution === item.rightResult
        }
      });
    });
  }

  ngOnDestroy() {
    this.problemSolutionSubscribtion.unsubscribe();
  }
}
