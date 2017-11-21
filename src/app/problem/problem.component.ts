import { ProblemService } from './../services/problem.service';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

type ProblemTitleDescription = {
  'title': string,
  'description': string
};

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})



export class ProblemComponent implements OnInit {

  public problemTitleAndDescription: ProblemTitleDescription;

  constructor(private problemService: ProblemService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .pluck('id')
      .filter(Boolean)
      .switchMap(id => this.problemService.getProblem(+id))
      .subscribe(problem => this.problemTitleAndDescription = {
        title: problem.title,
        description: problem.description
      });

  }

}
