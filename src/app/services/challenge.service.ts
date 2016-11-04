import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import {
  MockCharacterChallenge,
  MockExploreChallenge,
  MockMultipleChoiceChallenge
} from '../../resources/mock-data';
import { Challenge, ChallengeItem, ChallengeRecord, Selection } from '../models';

@Injectable()
export class ChallengeService {
  // dev config
  private mockMultipleChoiceChallenge: Challenge = MockMultipleChoiceChallenge;
  private mockExploreChallenge: Challenge = MockExploreChallenge;
  private mockCharacterChallenge: Challenge = MockCharacterChallenge;

  private currentChallengeSubject = new BehaviorSubject<Challenge>(undefined);
  private currentQuestionSubject = new BehaviorSubject<ChallengeItem>(undefined);
  private challengeRecordSubject = new BehaviorSubject<ChallengeRecord>(undefined);
  private currentChallenge: Challenge;
  private currentQuestionId: number;
  private challengeRecord: ChallengeRecord;

  constructor() {
    // Configure service
    this.currentChallengeSubject.subscribe((challenge: Challenge) => {
      this.currentChallenge = challenge;
      if (this.currentChallenge) {
        this.currentQuestionSubject.next(
          this.currentChallenge.challengeItems[0]
        );
      }
      this.currentQuestionId = 0;
    });
   }

  /**
   * setChallenge
   * Set the current challenge
   * @param challengeId the ID of the challenge
   */
  public setChallenge(challengeId: string): Observable<Challenge> {
    this.getChallengeById(challengeId).subscribe((challenge: Challenge) => {
      this.currentChallengeSubject.next(challenge);
       this.challengeRecord = {
        challengeId: challenge.challengeId,
        completion: 0,
        itemCount: challenge.challengeItems.length,
        userId: 'Bob',
        responses: new Map<string, Selection>()
      };
      this.challengeRecordSubject.next(this.challengeRecord);
    });
    return this.getCurrentChallengeObservable();
  }

  /**
   * nextQuestion
   * Advance to the next question.
   */
  public nextQuestion(): void {
    if (this.currentChallenge && this.currentChallenge.challengeItems
        && this.currentQuestionId !== this.currentChallenge.challengeItems.length - 1
      ) {
      this.currentQuestionId++;
      this.currentQuestionSubject.next(
        this.currentChallenge.challengeItems[this.currentQuestionId]
      );
    }
  }

  /**
   * previousQuestion
   * Return to the previous question.
   */
  public previousQuestion(): void {
    if (this.currentChallenge && this.currentChallenge.challengeItems
        && this.currentQuestionId !== 0
      ) {
      this.currentQuestionId--;
      this.currentQuestionSubject.next(
        this.currentChallenge.challengeItems[this.currentQuestionId]
      );
    }
  }

  /**
   * selectOption
   * Set the chosen option.
   */
  public selectOption(optionId: string): void {
    const key: string = this.currentChallenge.type === 'explore' ? optionId : '' + this.currentQuestionId;
    this.challengeRecord.responses.set(
      key,
      {
        correct: this.currentChallenge.challengeItems[this.currentQuestionId].correct,
        selected: optionId
      }
    );
    this.challengeRecord.completion = this.challengeRecord.responses.size / this.currentChallenge.challengeItems.length;
    this.challengeRecordSubject.next(this.challengeRecord);
  }

  /**
   * getCurrentChallengeObservable
   * Getter for the current challenge observavble
   */
  // TODO: add type for observable
  public getCurrentChallengeObservable(): Observable<Challenge> {
    return this.currentChallengeSubject.asObservable().filter((challenge: Challenge): boolean => {
      return challenge !== undefined;
    }).first();
  }

  /**
   * getCurrentQuestionObservable
   * Getter for the current question observavble
   */
  // TODO: add type for observable
  public getCurrentQuestionObservable(): Observable<ChallengeItem> {
    return this.currentQuestionSubject.asObservable();
  }

  /**
   * getCompletionStatusObservable
   * Getter for the completion status observavble
   */
  // TODO: add type for observable
  public getChallengeRecordObservable(): Observable<any> {
    return this.challengeRecordSubject.asObservable();
  }

  /**
   * getChallengeById
   * Get the challenge of ID from the server.
   * @param challengeId tje ID of the challenge
   * @return the requested challenge
   */
  // TODO: return type Challenge
  private getChallengeById(challengeId: string): Observable<Challenge> {
    // TODO make http call to server
    if (challengeId === 'multiple-choice') {
      return Observable.from([this.mockMultipleChoiceChallenge]);
    } else if (challengeId === 'explore') {
      return Observable.from([this.mockExploreChallenge]);
    } else if (challengeId === 'character') {
      return Observable.from([this.mockCharacterChallenge]);
    } else {
      return Observable.throw('CHALLENGE_NOT_FOUND');
    }
  }
}
