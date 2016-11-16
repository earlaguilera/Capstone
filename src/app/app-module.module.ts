import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';
import { SidebarModule } from 'ng2-sidebar';


import { AppComponent }  from './app.component';
import {
  ChallengeAppComponent,
  ChallengeMenuComponent,
  CharacterChallengeComponent,
  DocumentDisplayComponent,
  ExploreComponent,
  GeneratedModalComponent,
  ProgressDisplayComponent,
  ResourceMenuComponent,
  SideMenuComponent
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
    ResourceMenuComponent,
    SideMenuComponent,
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
    HelpModalComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
