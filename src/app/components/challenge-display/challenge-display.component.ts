import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../../services';
import { ChallengeItem, ChallengeRecord, Selection } from '../../models';

@Component({
  selector: 'app-challenge-display',
  templateUrl: 'challenge-display.component.html',
  styleUrls: ['challenge-display.component.css']
})
export class ChallengeDisplayComponent implements OnInit {

  public currentQuestion: ChallengeItem;
  public selectedOption: string = '';
  public options: any[] = [];
  public showQuestion: boolean = true;

  private challengeRecord: ChallengeRecord;

  constructor(private challengeService: ChallengeService) {
    this.currentQuestion = this.createBlankQuestion();
   }

  ngOnInit() {
    this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord) => {
      this.challengeRecord = record;
      this.updateSelectedOption();
    });
    this.challengeService.getCurrentQuestionObservable()
    .subscribe((question: ChallengeItem) => {
      if (question) {
        this.currentQuestion = question;
        this.options = [];
        this.currentQuestion.options.forEach((optionText: string, id: string) => {
          this.options.push({'id': id, 'text': optionText});
        });
      }
      this.updateSelectedOption();
    });
  }

  public previous(): void {
    this.challengeService.previousQuestion();
  }

  public next(): void {
    if (this.selectedOption) {
      this.challengeService.nextQuestion();
    }
  }

  public setSelectedOption(option: string) {
    this.challengeService.selectOption(option);
  }

  public isSelected(option: string) {
    return option === this.selectedOption;
  }

  private createBlankQuestion(): ChallengeItem {
    return {
      id: '',
      correct: '',
       options: new Map<string, string>(),
       prompt: ''
    };
  }

  private updateSelectedOption() {
    this.showQuestion = false;
    let selection: Selection = this.challengeRecord.responses.get('' + this.currentQuestion.id);
    if (selection) {
      this.selectedOption = selection.selected;
    } else {
      this.selectedOption = undefined;
    }
    this.showQuestion = true;
  }
}
