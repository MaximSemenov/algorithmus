import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from './problem.service';
import 'rxjs/add/operator/map';

export type Links = {
  id: number,
  title: string
};

@Injectable()


export class NavigationService {

  constructor(private http: HttpClient) { }

  getAllLinks(): Observable<Links[]> {

    return this.http.get<Problem[]>('./assets/base64_problems.json')
      .map(problems => {

        return problems.map(problem => {
          return { id: problem.id, title: problem.title };
        });

      });
  }
}

