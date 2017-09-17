import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChallengeService, DocumentService, ModalService } from '../../../services';
import { Challenge, ChallengeItem, ChallengeRecord, Selection } from '../../../models';
import { ChallengeSummaryComponent } from '../../modals';

@Component({
  selector: 'app-new-test',
  templateUrl: 'new-test.component.html',
  styleUrls: ['new-test.component.css']
})
export class NewTestComponent implements OnInit {

  public currentQuestion: ChallengeItem;
  public selectedOption: string = '';
  public options: any[] = [];
  public showQuestion: boolean = true;

  private challengeRecord: ChallengeRecord;
  private completion: number = 0;
  private lastQ: string = '';
  private currQ: string = '';
  private prompt: string = '';

  constructor(private challengeService: ChallengeService,
              private documentService: DocumentService,
              private modalService: ModalService,
              private router: Router) {
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
      this.currentQuestion = question;
      console.log(question);
      this.options = [];
      this.currentQuestion.options.forEach((optionText: string, id: string) => {
        this.options.push({'id': id, 'text': optionText});
      });
      this.prompt = question.prompt;
      this.updateSelectedOption();
      this.documentService.setDocumentFocus(Number(question.documentSubject));
    });
     this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord) => {
      this.completion = record.completion * 100;
    });
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((lastQuestion: Challenge) => {
      this.lastQ = (lastQuestion.challengeItems.length - 1).toString();
    });
    this.challengeService.getCurrentQuestionObservable()
    .subscribe((questionNum: ChallengeItem) => {
      this.currQ = questionNum.id;
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

   public submit(): void {
    if (this.selectedOption) {
      this.documentService.setDocumentFocus(-1);
      this.modalService.openModal({
      content: ChallengeSummaryComponent,
      options: {
        modalClass: 'modal-md',
        title: 'Facilitator Dashboard',
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
