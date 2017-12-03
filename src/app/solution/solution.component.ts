import { Observable } from 'rxjs/Rx';
import { ProblemService } from './../services/problem.service';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})

export class SolutionComponent implements OnInit, OnDestroy {

  public problemSolution: string;
  public problemSolution$: Observable<string>;
  public problemSolutionSubscribtion: Subscription;

  constructor(private problemService: ProblemService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.problemSolution$ = this.route.params
      .pluck('id')
      .filter(Boolean)
      .switchMap(id => this.problemService.getProblem(+id))
      .pluck('solution');

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


  ngOnDestroy() {

    this.problemSolutionSubscribtion.unsubscribe();

  }

}

