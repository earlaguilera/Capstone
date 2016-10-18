import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
<<<<<<< HEAD
import { MdToolbarModule } from '@angular2-material/toolbar';
import {  } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';
=======
import { ModalModule  } from 'ng2-bootstrap/ng2-bootstrap';
>>>>>>> 0cd266698a355a71239d1a096f41ea3d6afa73ad
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
<<<<<<< HEAD
    MdToolbarModule.forRoot(),
=======
>>>>>>> 0cd266698a355a71239d1a096f41ea3d6afa73ad
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
