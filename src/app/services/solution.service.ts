import { Injectable } from '@angular/core';

import { Problem } from './problem.service';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'Rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';



export type Problem = {
  'id': number,
  'title': string,
  'description': string,
  'solution': string,
  'filename': string
};

@Injectable()
export class ProblemService {


  private problemsCache: Observable<Problem[]>;

  constructor(private http: HttpClient) { }


  getProblem(id: number): Observable<Problem> {

    if (!this.problemsCache) {
      this.problemsCache = this.http.get<Problem[]>('./assets/base64_problems.json')
        .first();
    }
    return this.problemsCache
      .map((problems: Problem[]) => {

        return problems.filter((problem: Problem) => problem.id === id)[0];

      });
  }
}
