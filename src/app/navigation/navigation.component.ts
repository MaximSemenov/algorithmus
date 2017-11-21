import { NavigationService, Links } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public links: Links[];
  public isDropDownOpen: Boolean = false;

  constructor(private navService: NavigationService) { }

  ngOnInit() {

    this.links = this.navService.getAllLinks();

  }



}

