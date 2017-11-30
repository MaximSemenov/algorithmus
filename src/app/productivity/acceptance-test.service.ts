import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


export type testResults = {
  testUnit: number | string,
  testReport: testReport
};

export type testReport = {
  result: number | string | boolean,
  expectedResult: number | string | boolean,
  passed: boolean
};


@Injectable()
export class AcceptanceTestService {

  constructor(private http: HttpClient) { }

  startTesting(id): Observable<testResults[]> {

    return this.http.get<testResults[]>('http://localhost:4000/', { params: { problemId: id } });
  }
}