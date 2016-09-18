import { Component } from '@angular/core';

import { ChallengeDisplayComponent } from './components/challenge-display';
import { DocumentDisplayComponent } from './components/document-display';
import { HeaderComponent } from './components/header';
import { ProgressDisplayComponent } from './components/progress-display';
import { ResourceMenuComponent } from './components/resource-menu';
import { SideMenuComponent } from './components/side-menu';
import { ChallengeService } from './services/challenge.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ChallengeDisplayComponent,
    DocumentDisplayComponent,
    HeaderComponent,
    ProgressDisplayComponent,
    ResourceMenuComponent,
    SideMenuComponent
  ],
  providers: [
    ChallengeService
  ]
})
export class AppComponent {

}
