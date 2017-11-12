import { HttpClientModule } from '@angular/common/http';

import { ProblemService } from './services/problem.service';
import { NavigationService } from './services/navigation.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProblemComponent } from './problem/problem.component';
import { SolutionComponent } from './solution/solution.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'problem/:id', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProblemComponent,
    SolutionComponent,
    ProductivityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule

  ],
  providers: [NavigationService, ProblemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
