
import { HttpClientModule } from '@angular/common/http';

import { ProblemService } from './services/problem.service';
import { NavigationService } from './services/navigation.service';
import { AcceptanceTestService } from './productivity/acceptance-test.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProblemComponent } from './problem/problem.component';
import { SolutionComponent } from './solution/solution.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { HomeComponent } from './home/home.component';
import { AtobPipe } from './atob.pipe';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FailedComponent } from './productivity/failed/failed.component';
import { SuccessComponent } from './productivity/success/success.component';
import { AlgorithmOverviewComponent } from './algorithm-overview/algorithm-overview.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'problem/:id', component: AlgorithmOverviewComponent }
];


export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProblemComponent,
    SolutionComponent,
    ProductivityComponent,
    HomeComponent,
    AtobPipe,
    WelcomeComponent,
    FailedComponent,
    SuccessComponent,
    AlgorithmOverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })

  ],
  providers: [NavigationService, ProblemService, AcceptanceTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
