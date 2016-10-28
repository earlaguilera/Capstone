import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';
import { SidebarModule } from 'ng2-sidebar';
import { ProgressbarModule } from 'ng2-bootstrap/components/progressbar';


import { AppComponent }  from './app.component';
import {
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
import {  } from './directives';
import {
  AudioService,
  ChallengeService,
  DocumentService,
  ModalService
} from './services';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule,
    SidebarModule,
    ProgressbarModule
  ],
  declarations: [
    AppComponent,
    ChallengeSummaryComponent,
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
    ModalService
  ],
  entryComponents: [
    ChallengeSummaryComponent,
    ExploreComponent,
    HelpModalComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
