import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { AppComponent }  from './app.component';
import {
  ChallengeDisplayComponent,
  DocumentDisplayComponent,
  ProgressDisplayComponent,
  ResourceMenuComponent,
  SideMenuComponent
   } from './components';
import { ChallengeService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdToolbarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ChallengeDisplayComponent,
    DocumentDisplayComponent,
    ProgressDisplayComponent,
    ResourceMenuComponent,
    SideMenuComponent
  ],
  providers: [ ChallengeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
