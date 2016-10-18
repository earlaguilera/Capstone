import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdToolbarModule } from '@angular2-material/toolbar';
import {  } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';
import { SidebarModule } from 'ng2-sidebar';
import { ProgressbarModule } from 'ng2-bootstrap/components/progressbar';


import { AppComponent }  from './app.component';
import {
  ChallengeDisplayComponent,
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
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdListModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdRadioModule.forRoot(),
    MdToolbarModule.forRoot(),
    ModalModule,
    SidebarModule,
    ProgressbarModule
  ],
  declarations: [
    AppComponent,
    ChallengeDisplayComponent,
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
  entryComponents: [
    ChallengeDisplayComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
