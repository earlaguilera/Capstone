import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { CategoriesService } from './services/categories.service';
import { AllusersService } from './services/allusers.service';
import { FacilitatorDashboardComponent } from './components/facilitator-dashboard/facilitator-dashboard.component';
import { ChallengesOverviewComponent } from './components/challenges-overview/challenges-overview.component';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { Challenge3Component } from './components/challenge3/challenge3.component';
import { FacilitatorDashboardStudentsComponent } from './components/facilitator-dashboard-students/facilitator-dashboard-students.component';
import { FacilitatorDashboardCategoriesComponent } from './components/facilitator-dashboard-categories/facilitator-dashboard-categories.component';
import { FacilitatorDashboardTasksComponent } from './components/facilitator-dashboard-tasks/facilitator-dashboard-tasks.component';
import { TaskcreatorComponent } from './components/taskcreator/taskcreator.component';

const appRoutes:Routes=[
{path:'', component:HomeComponent},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
{path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},
{path:'facilitator-dashboard', component:FacilitatorDashboardComponent, canActivate:[AuthGuard]},
{path:'challenges-overview', component:ChallengesOverviewComponent, canActivate:[AuthGuard]},
{path:'challenge1', component:Challenge1Component, canActivate:[AuthGuard]},
{path:'challenge2', component:Challenge2Component, canActivate:[AuthGuard]},
{path:'challenge3', component:Challenge3Component, canActivate:[AuthGuard]},
{path:'fac-dash-students', component:FacilitatorDashboardStudentsComponent, canActivate:[AuthGuard]},
{path:'fac-dash-categories', component:FacilitatorDashboardCategoriesComponent, canActivate:[AuthGuard]},
{path:'fac-dash-tasks', component:FacilitatorDashboardTasksComponent, canActivate:[AuthGuard]},
{path:'task-creator', component:TaskcreatorComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FacilitatorDashboardComponent,
    ChallengesOverviewComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    FacilitatorDashboardStudentsComponent,
    FacilitatorDashboardCategoriesComponent,
    FacilitatorDashboardTasksComponent,
    TaskcreatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, CategoriesService,  AllusersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }