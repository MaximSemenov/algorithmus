import { Injectable } from '@angular/core';

export type Links = {
  id: number,
  title: string
};

@Injectable()


export class NavigationService {

  private links: Links[] = [

    { id: 1, title: 'Problem 1' },
    { id: 2, title: 'Problem 2' },
    { id: 3, title: 'Problem 3' }
  ];

  constructor() { }

  getAllLinks() {

    return this.links;

  }
}

