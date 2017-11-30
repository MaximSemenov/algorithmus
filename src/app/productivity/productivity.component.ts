import { AcceptanceTestService } from './acceptance-test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { ProblemService } from './../services/problem.service';
import { testResults } from './acceptance-test.service';


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
  public isReportPerformanceShown: Boolean = false;
  public isReportAcceptanceShown: Boolean = false;
  public testResults: testResults[];



  constructor(
    private problemService: ProblemService,
    private acceptanceTest: AcceptanceTestService,
    private route: ActivatedRoute,
    private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isReportPerformanceShown = false;
        this.isReportAcceptanceShown = false;
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

  runPerformanceTest(): number {

    const startTime = + new Date();

    Array(1000).fill(1).forEach(() => {
      eval(this.problemSolution);
    });

    const endTime = + new Date();
    return this.performanceTime = endTime - startTime;

  }

  runAcceptanceTest(): Subscription {

    return this.route.params
      .pluck('id')
      .filter(Boolean)
      .switchMap(id => this.acceptanceTest.startTesting(+id))
      .subscribe(testResults => this.testResults = testResults);

  }

  ngOnDestroy(): void {
    this.problemSolutionSubscribtion.unsubscribe();
  }
}
