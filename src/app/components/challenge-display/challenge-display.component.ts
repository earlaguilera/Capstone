import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../../services';
import { ChallengeItem, ChallengeRecord } from '../../models';

@Component({
  selector: 'app-challenge-display',
  templateUrl: 'challenge-display.component.html',
  styleUrls: ['challenge-display.component.css']
})
export class ChallengeDisplayComponent implements OnInit {

  public currentQuestion: ChallengeItem;
  public selectedOption: string = '';
  public options: any[] = [];

  private challengeRecord: ChallengeRecord;

  constructor(private challengeService: ChallengeService) {
    this.currentQuestion = this.createBlankQuestion();
   }

  ngOnInit() {
    this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord) => {
      this.challengeRecord = record;
    });
    this.challengeService.getCurrentQuestionObservable()
    .subscribe((question: ChallengeItem) => {
      let selection = this.challengeRecord.responses.get(question.id);
      if (selection) {
        this.selectedOption = selection.selected;
      } else {
        this.selectedOption = '';
      }
      console.log(this.selectedOption);
      if (question) {
        this.currentQuestion = question;
        console.log(this.currentQuestion);
        this.options = [];
        this.currentQuestion.options.forEach((optionText: string, id: string) => {
          this.options.push({'id': id, 'text': optionText});
        });
      }
    });
  }

  public previous(): void {
    this.challengeService.previousQuestion();
  }

  public next(): void {
    this.challengeService.nextQuestion();
  }

  public select(): void {
    this.challengeService.selectOption(this.selectedOption);
  }

  private createBlankQuestion(): ChallengeItem {
    return {
      id: '',
      correct: '',
       options: new Map<string, string>(),
       prompt: ''
    };
  }
}
