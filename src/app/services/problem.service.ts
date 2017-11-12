import { Problem } from './problem.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'Rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


export type Problem = {
  'id': number,
  'title': string,
  'decription': string
};

@Injectable()
export class ProblemService {


  private problemsCache: Observable<Problem[]>;

  constructor(private http: HttpClient) { }


  getProblem(id: number): Observable<Problem> {


    if (!this.problemsCache) {
      this.problemsCache = Observable.create((observer: Observer<Problem[]>) => {
        this.http.get<Problem[]>('./assets/problems.json').subscribe(problems => {
          observer.next(problems);
          observer.complete();
        });
      });
    }
    debugger;
    return this.problemsCache

      .map((problems: Problem[]) => {

        return problems.filter((problem: Problem) => problem.id === id)[0];


      });
  }
}
