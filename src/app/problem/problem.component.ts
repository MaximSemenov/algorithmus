import { ProblemService } from './../services/problem.service';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  public problemSolution: string;

  constructor(private problemService: ProblemService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .pluck('id')
      .filter(Boolean)
      .switchMap(id => this.problemService.getProblem(+id))
      .map(base64Problem => {

        console.log (atob(base64Problem.solution));
        base64Problem.solution = atob(base64Problem.solution);

       return base64Problem;

      })
      .subscribe(problem => this.problemSolution = problem.solution);

  }

}
