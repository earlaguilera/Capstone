import { animate, Component, OnInit, trigger, state, style, transition } from '@angular/core';

import { ChallengeService } from '../../services/challenge.service';
import { DocumentService } from '../../services/document.service';
import { Challenge, Document } from '../../models';

@Component({
  animations: [
    trigger('rowState', [
      state('inactive', style({
        transform: 'scale(1)',
        zIndex: '1'
      })),
      state('active',   style({
        transform: 'scale(1.5)',
        zIndex: '10'
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
  private imageUrl: string = 'app/assets/images/';

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
    if (this.currentDocument.rows[index].hasSound) {
      let state = this.currentDocument.rows[index].state;
      state = state === 'active' ? 'inactive' : 'active';
      this.currentDocument.rows[index].state = state;
      this.documentService.playSound(this.currentDocument.rows[index].sound).then(() => {
        state = state === 'active' ? 'inactive' : 'active';
        this.currentDocument.rows[index].state = state;
      });
    }
  }

  public getImageUrl(index: number): string {
    return this.imageUrl + this.documentId + index + '.png';
  }
}
