import { animate, Component, OnInit, trigger, state, style, transition } from '@angular/core';

import { ChallengeService, DocumentService, WindowService } from '../../services';
import { Challenge, Document } from '../../models';

@Component({
  animations: [
    trigger('rowState', [
      state('inactive', style({
        transform: 'scale(1)',
        zIndex: '1',
      })),
      state('active',   style({
        transform: 'scale(1.5)',
        zIndex: '10000'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ],
  selector: 'app-document-display',
  templateUrl: 'document-display.component.html',
  styleUrls: ['document-display.component.css']
})
export class DocumentDisplayComponent implements OnInit {
  private documentId: string;
  private currentDocument: Document;
  private imageUrl: string = 'assets/images/';
  private playingSound: boolean = false;
  private windowService = new WindowService();

  constructor(private challengeService: ChallengeService,
  private documentService: DocumentService) { }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.documentId) {
        this.documentId = challenge.documentId;
        this.documentService.getDocument(this.documentId).subscribe((document: Document) => {
          this.currentDocument = document;
        });
      }
    });
  }

  clickRow(index: number): void {
    if (this.playingSound || !this.currentDocument.rows[index].hasSound) {
      return;
    }
    this.playingSound = true;
    this.currentDocument.rows[index].state = 'active';
    this.windowService.showBackdrop();
    this.documentService.clickRow(this.currentDocument.rows[index]).then(() => {
      this.windowService.hideBackdrop();
      this.currentDocument.rows[index].state = 'inactive';
      this.playingSound = false;
    });
  }

  public getImageUrl(index: number): string {
    return this.imageUrl + this.documentId + index + '.png';
  }
}
