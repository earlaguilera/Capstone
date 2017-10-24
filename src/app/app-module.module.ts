import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ng2-bootstrap';
import { ModalModule } from 'ngx-modal';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import {
  SideMenuComponent,
  AdminMenuComponent
} from './components';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ChallengesOverviewComponent } from './components/challenges-overview/challenges-overview.component';
import { FacilitatorDashboardComponent } from './components/facilitator-dashboard/facilitator-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule,
    SidebarModule.forRoot(),
    ProgressbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'challenge/:id', component: ChallengeComponent },
      { path: 'facilitator-dashboard/:id', component: FacilitatorDashboardComponent },
      { path: 'user-dashboard/:id', component: UserDashboardComponent },
      { path: '**', component: ChallengesOverviewComponent }
    ], {useHash: true})
  ],
  declarations: [
    AppComponent,
    AdminMenuComponent,
    ChallengeComponent,
    ChallengesOverviewComponent,
    FacilitatorDashboardComponent,
    UserDashboardComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
