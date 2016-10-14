import {
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild
} from '@angular/core';

import { ChallengeService, DocumentService } from './services';
import { Challenge } from './models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  private title: string = '';
  private _open: boolean = false;
  private viewContainerRef: ViewContainerRef;

  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;

  @ViewChild('helpModal') public helpModal: any;

  constructor(private challengeService: ChallengeService,
              private documentService: DocumentService,
              viewContainerRef: ViewContainerRef) {
                this.viewContainerRef = viewContainerRef;
              }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.title) {
        this.title = challenge.title;
      }
    });
    this.documentService.init();
  }

  ngAfterViewInit(): void {
    // this.helpModal.show();
  }

  private _toggleSidebar() {
    this._open = !this._open;
  }
}
