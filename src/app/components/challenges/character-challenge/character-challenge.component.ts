import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import {
  ChallengeItem,
  ChallengeRecord,
  Character
} from '../../../models';
import { ChallengeService, ModalService } from '../../../services';
import { ChallengeSummaryComponent } from '../../modals'; 

@Component({
  selector: 'app-character-challenge',
  templateUrl: './character-challenge.component.html',
  styleUrls: ['./character-challenge.component.css']
})
export class CharacterChallengeComponent implements OnDestroy, OnInit {
  private characters: Character[];
  private correct: string;
  private documentUrl: string;
  private prompt: string;
  private subscriptions: Subscription[];
  private showContinue: boolean = false;
  private finished: boolean = false;
  private selected: string;

  constructor(private challengeService: ChallengeService,
              private modalService: ModalService,
              private router: Router) { }

  public ngOnInit(): void {
    this.subscriptions = [];
    this.subscriptions.push(this.challengeService.getCurrentQuestionObservable()
    .subscribe((question: ChallengeItem): void => {
      this.characters = question.data.characters;
      this.correct = question.correct;
      this.documentUrl = question.documentSubject;
      this.prompt = question.prompt;
    }));
    this.subscriptions.push(this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord): void => {
      if (record.completion === 1) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    }));
  }

  public ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      if (!subscription.closed) {
        subscription.unsubscribe();
      }
    }
  }

  public select(characterName: string): void {
    this.selected = characterName;
    if (characterName === this.correct) {
      this.challengeService.selectOption(characterName);
      this.showContinue = true;
    } else {
      this.showContinue = false;
      this.finished = false;
    }
  }

  public continue(): void {
    if (!this.finished && this.selected === this.correct) {
      this.challengeService.nextQuestion();
      this.showContinue = false;
      this.selected = undefined;
    }
  }

  public borderFor(name: string): string {
    if (this.selected === name && this.selected === this.correct) {
      return '3px #4bf442 solid';
    } else if (this.selected === name && this.selected !== this.correct) {
      return '3px #ff0000 solid';
    } else {
      return '1px #888 solid';
    }
  }

  public endChallenge(): void {
    this.modalService.openModal({
      content: ChallengeSummaryComponent,
      options: {
        modalClass: 'modal-md',
        title: 'Character Challenge Summary',
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
