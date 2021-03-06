import { environment } from './../../environments/environment';
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

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  startTesting(id): Observable<testResults[]> {

    return this.http.get<testResults[]>(this.baseUrl, { params: { problemId: id } });

    // heroku
    // return this.http.get<testResults[]>('https://stark-tundra-14847.herokuapp.com/', { params: { problemId: id } });
    // local
    // return this.http.get<testResults[]>('http://localhost:5000/', { params: { problemId: id } });
    // linode
    // return this.http.get<testResults[]>('http://173.255.247.60:5000/', { params: { problemId: id } });


  }
}
