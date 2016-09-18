import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Challenge } from '../models/challenge';
import { ChallengeItem } from '../models/challenge-item';

@Injectable()
export class ChallengeService {

  private mockChallenge: Challenge = {
    challengeId: '0',
    title: 'Mock Challenge',
    documentUrl: 'http://images.clipartpanda.com/document-clipart-9iRRbd7ET.png',
    challengeItems: [
      {
        correct: '0',
        prompt: 'What is the answer?',
        options: undefined
      },
      {
        correct: '0',
        prompt: 'What is the answer?',
        options: undefined
      },
      {
        correct: '0',
        prompt: 'What is the answer?',
        options: undefined
      }
    ]
  };

  private currentChallengeSubject = new BehaviorSubject<Challenge>(undefined);
  private currentQuestionSubject = new BehaviorSubject<ChallengeItem>(undefined);
  private completionStatusSubject = new BehaviorSubject<any>(undefined);
  private currentChallenge: Challenge;
  private currentQuestionId: number;

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
    });
   }

  /**
   * setChallenge
   * Set the current challenge
   * @param challengeId the ID of the challenge
   */
  public setChallenge(challengeId: string): void {
    this.currentQuestionId = 0;
    this.getChallengeById(challengeId).subscribe((challenge: any) => {
      this.currentChallengeSubject.next(challenge);
      this.currentQuestionSubject.next(
        this.currentChallenge.challengeItems[0]
      );
    });
  }

  /**
   * nextQuestion
   * Advance to the next question.
   */
  public nextQuestion(): void {
    if (this.currentQuestionId !== this.currentChallenge.challengeItems.length - 1) {
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
    if (this.currentQuestionId !== 0) {
      this.currentQuestionId--;
      this.currentQuestionSubject.next(
        this.currentChallenge.challengeItems[this.currentQuestionId]
      );
    }
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
  public getCompletionStatusObservable(): Observable<any> {
    return this.completionStatusSubject.asObservable();
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
