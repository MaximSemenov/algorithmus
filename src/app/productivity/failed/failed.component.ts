import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent implements OnInit {

  @Input()testResult;


  constructor() { }

  ngOnInit() {
  }

}
