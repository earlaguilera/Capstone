import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { ModalModule  } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import {
  ChallengeDisplayComponent,
  DocumentDisplayComponent,
  ProgressDisplayComponent,
  ResourceMenuComponent,
  SideMenuComponent
   } from './components';
import { ChallengeService, DocumentService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdListModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdRadioModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdToolbarModule.forRoot(),
    ModalModule
  ],
  declarations: [
    AppComponent,
    ChallengeDisplayComponent,
    DocumentDisplayComponent,
    ProgressDisplayComponent,
    ResourceMenuComponent,
    SideMenuComponent
  ],
  providers: [ ChallengeService, DocumentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
