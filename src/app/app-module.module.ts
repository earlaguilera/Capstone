import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ng2-bootstrap';
import { ModalModule } from 'ngx-modal';
import { SidebarModule } from 'ng2-sidebar';
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

@NgModule({
  imports: [
    BrowserModule,
    ModalModule,
    SidebarModule,
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
    SideMenuComponent,
    AdminMenuComponent,
  ],
  providers: [
    AudioService,
    ChallengeService,
    DocumentService,
    ModalService,
    TitleService
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
