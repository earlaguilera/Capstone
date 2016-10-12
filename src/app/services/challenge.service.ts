import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Challenge, ChallengeItem, ChallengeRecord, Selection } from '../models';

@Injectable()
export class ChallengeService {

  private mockChallenge: Challenge = {
    challengeId: '0',
    title: 'Mock Challenge',
    documentId: 'job',
    challengeItems: [
      {
        id: '0',
        correct: '0',
        prompt: 'What is the answer to question 1?',
        options: undefined
      },
      {
        id: '1',
        correct: '0',
        prompt: 'What is the answer to question 2?',
        options: undefined
      },
      {
        id: '2',
        correct: '0',
        prompt: 'What is the answer to question 3?',
        options: undefined
      },
      {
        id: '3',
        correct: '0',
        prompt: 'What is the answer to question 4?',
        options: undefined
      },
      {
        id: '4',
        correct: '0',
        prompt: 'What is the answer to question 5?',
        options: undefined
      }
    ]
  };

  private currentChallengeSubject = new BehaviorSubject<Challenge>(undefined);
  private currentQuestionSubject = new BehaviorSubject<ChallengeItem>(undefined);
  private challengeRecordSubject = new BehaviorSubject<ChallengeRecord>(undefined);
  private currentChallenge: Challenge;
  private currentQuestionId: number;
  private challengeRecord: ChallengeRecord;

  constructor() {
    // Set up mock data
    let options = new Map<string, string>();
    options.set('0', 'option one');
    options.set('1', 'option two');
    options.set('2', 'option three');
    options.set('3', 'option four');
    for (let item of this.mockChallenge.challengeItems) {
        item.options = options;
    }
    this.setChallenge('blah');

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
  public setChallenge(challengeId: string): void {
    this.getChallengeById(challengeId).subscribe((challenge: Challenge) => {
      this.currentChallengeSubject.next(challenge);
       this.challengeRecord = {
        challengeId: challenge.challengeId,
        completion: 0,
        responses: new Map<string, Selection>(),
        userId: 'Bob'
      };
      this.challengeRecordSubject.next(this.challengeRecord);
    });
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
  public submitQuestions(): void {
      if (this.currentQuestionId === this.currentChallenge.challengeItems.length) {
        
      }
    }
  /**
   * selectOption
   * Set the chosen option.
   */
  public selectOption(optionId: string): void {
    this.challengeRecord.responses.set(
      '' + this.currentQuestionId,
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
    return this.currentChallengeSubject.asObservable();
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
    return Observable.from([this.mockChallenge]);
  }
}
