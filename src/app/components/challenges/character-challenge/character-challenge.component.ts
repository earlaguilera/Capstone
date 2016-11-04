import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import {
  ChallengeItem,
  ChallengeRecord,
  Character
} from '../../../models';
import { ChallengeService } from '../../../services';

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

  constructor(private challengeService: ChallengeService) { }

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
        this.endChallenge();
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

  public nextQuestion(): void {
    this.challengeService.selectOption('any');
    this.challengeService.nextQuestion();
  }

  private endChallenge(): void {

  }
}
