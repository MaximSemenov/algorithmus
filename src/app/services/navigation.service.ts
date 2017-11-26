import { Injectable } from '@angular/core';

export type Links = {
  id: number,
  title: string
};

@Injectable()


export class NavigationService {

  private links: Links[] = [

    { id: 0, title: 'Check for Palindromes' },
    { id: 1, title: 'Reverse a String' },
    { id: 2, title: 'Factorialize a Number' }
  ];

  constructor() { }

  getAllLinks() {

    return this.links;

  }
}

