import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';

import { ChallengeDisplayComponent } from './components';
import { Challenge } from './models';
import { AudioService, ChallengeService, ModalService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  private title: string = '';
  private _open: boolean = false;

  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;
  public closeButton: boolean = false;
  public closeEsc: boolean = false;
  public closeClick: boolean = false;

  constructor( private audioService: AudioService,
               private challengeService: ChallengeService,
               private modalService: ModalService) {}

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.title) {
        this.title = challenge.title;
      }
    });
  }

  ngAfterViewInit(): void {
    this.audioService.init();
    this.modalService.openModal({
      options: {
        modalClass: 'modal-md instructions',
        title: 'Instructions',
        submitButtonLabel: 'Begin',
        hideCloseButton: true,
        closeOnEscape: false,
        closeOnOutsideClick: false
      }
    });
  }

  private _toggleSidebar() {
    this._open = !this._open;
  }
}
