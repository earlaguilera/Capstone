import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../../services';
import { ChallengeRecord } from '../../models';

@Component({
  selector: 'app-progress-display',
  templateUrl: 'progress-display.component.html',
  styleUrls: ['progress-display.component.css']
})
export class ProgressDisplayComponent implements OnInit {
  private completion: number = 0;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord) => {
      this.completion = record.completion * 100;
    });
  }
}
