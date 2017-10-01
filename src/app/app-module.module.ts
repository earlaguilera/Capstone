import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ng2-bootstrap';
import { ModalModule } from 'ngx-modal';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import {
  ChallengeAppComponent,
  ChallengeMenuComponent,
  CharacterChallengeComponent,
  DocumentDisplayComponent,
  ExploreComponent,
  GeneratedModalComponent,
  MultipleChoiceComponent,
  ProgressDisplayComponent,
  ResourceMenuComponent,
  SideMenuComponent,
  AdminMenuComponent
} from './components';
import {
  ChallengeSummaryComponent,
  HelpModalComponent
} from './components/modals';
import {
  AudioService,
  ChallengeService,
  DocumentService,
  ModalService,
  TitleService
} from './services';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule,
    SidebarModule.forRoot(),
    ProgressbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'challenge/:id', component: ChallengeAppComponent },
      { path: '**', component: ChallengeMenuComponent }
    ], {useHash: true})
  ],
  declarations: [
    AppComponent,
    ChallengeAppComponent,
    ChallengeMenuComponent,
    ChallengeSummaryComponent,
    CharacterChallengeComponent,
    DocumentDisplayComponent,
    ExploreComponent,
    GeneratedModalComponent,
    HelpModalComponent,
    ProgressDisplayComponent,
    MultipleChoiceComponent,
    ResourceMenuComponent,
    AdminMenuComponent
  ],
  providers: [
    AudioService,
    ChallengeService,
    DocumentService,
    ModalService,
    TitleService,
    DataService
  ],
  entryComponents: [
    ChallengeSummaryComponent,
    CharacterChallengeComponent,
    ExploreComponent,
    HelpModalComponent,
    MultipleChoiceComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
