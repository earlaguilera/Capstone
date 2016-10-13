import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

import { ChallengeService, DocumentService } from './services';
import { Challenge } from './models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private title: string = '';
  private _open: boolean = false;

  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;

  @ViewChild('helpModal') public helpModal: any;

  constructor(private challengeService: ChallengeService,
              private documentService: DocumentService,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.title) {
        this.title = challenge.title;
      }
    });
    this.documentService.init();
    // this.helpModal.show();
  }

  private _toggleSidebar() {
    this._open = !this._open;
  }
}
