import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  constructor(private problemService: ProblemService, private route: ActivatedRoute) { }

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

  executeSolution() {

    this.isReportShown = !this.isReportShown;

    const startTime = + new Date();

    Array(1000).fill(1).forEach(_ => {
      eval(this.problemSolution);
    });

    const endTime = + new Date();

    console.log(startTime);
    console.log(endTime);
    console.log(endTime - startTime);

    // this.isReportShown = !this.isReportShown;

    return this.performanceTime = endTime - startTime;




  }



  ngOnDestroy() {

    this.problemSolutionSubscribtion.unsubscribe();


  }


}
