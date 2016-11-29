import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChallengeSummaryComponent } from '../../modals';
import { Challenge, ChallengeItem, ChallengeRecord } from '../../../models';
import { ChallengeService, DocumentService, ModalService } from '../../../services';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  private items: ChallengeItem[];
  private prompt: string = '';
  private record: ChallengeRecord;
  private listActive: boolean = true;

  constructor(private challengeService: ChallengeService,
              private documentService: DocumentService,
              private modalService: ModalService,
              private router: Router) {}

  ngOnInit() {
    this.record = undefined;
    this.challengeService.getCurrentChallengeObservable().subscribe((challenge: Challenge): void => {
      this.items = challenge.challengeItems;
      this.prompt = challenge.prompt || '';
    });
    this.documentService.getDocumentTabClickStream().subscribe((id: string): void => {
      for (let item of this.items) {
        if (item.documentSubject === id) {
          this.challengeService.selectOption(id);
        }
      }
    });
    this.challengeService.getChallengeRecordObservable().subscribe((record: ChallengeRecord): void => {
      if (record.completion === 1) {
        this.onComplete();
      }
      this.listActive = false;
      this.record = record;
      this.listActive = true;
    });
  }

  private onComplete(): void {
    this.modalService.openModal({
      content: ChallengeSummaryComponent,
      options: {
        modalClass: 'modal-md',
        title: 'Exploration Summary',
        submitButtonLabel: 'Continue',
        hideCloseButton: true,
        closeOnEscape: false,
        closeOnOutsideClick: false,
        onSubmit: (): void => {
          this.modalService.closeModal();
          this.router.navigateByUrl('/');
        }
      }
    });
  }
}
