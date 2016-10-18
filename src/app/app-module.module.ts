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
    DocumentDisplayComponent,
    ExploreComponent,
    GeneratedModalComponent,
    ProgressDisplayComponent,
    ResourceMenuComponent,
    SideMenuComponent
  ],
  providers: [
    AudioService,
    ChallengeService,
    DocumentService,
    ModalService
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
