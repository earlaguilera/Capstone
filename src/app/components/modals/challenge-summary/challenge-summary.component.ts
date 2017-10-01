import {
  AfterContentInit,
  Component,
  OnInit
} from '@angular/core';

import { ChallengeRecord, ChallengeType, Selection } from '../../../models';
import { AudioService, ChallengeService } from '../../../services';

@Component({
  selector: 'app-challenge-summary',
  templateUrl: './challenge-summary.component.html',
  styleUrls: ['./challenge-summary.component.css']
})
export class ChallengeSummaryComponent implements AfterContentInit, OnInit {
  private record: ChallengeRecord;
  public correct: number;
  public incorrect: number;
  public score: string;
  public scoreType: ChallengeType = ChallengeType.MULTIPLE_CHOICE;

  constructor(private audioService: AudioService,
              private challengeService: ChallengeService) { }

  public ngAfterContentInit() {
    this.audioService.playSound({
      url: '/assets/sounds/youdidit.wav',
      autoplay: false,
      id: 'success',
      type: 'audio/wav'
    });
  }

  public ngOnInit() {
    this.challengeService.getChallengeRecordObservable()
      .subscribe((record: ChallengeRecord): void => {
        this.record = record;
        this.correct = 0;
        this.incorrect = 0;
        record.responses.forEach((response: Selection, id: string, map: Map<string, Selection>): void => {
          if (response.selected === response.correct) {
            this.correct++;
          } else {
            this.incorrect++;
          }
        });
        this.score = (this.correct * 100 / (this.correct + this.incorrect)).toFixed(2);
      });
  }
}
