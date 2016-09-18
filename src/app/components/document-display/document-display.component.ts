import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../models';

@Component({
  moduleId: module.id,
  selector: 'document-display-component',
  templateUrl: 'document-display.component.html',
  styleUrls: ['document-display.component.css']
})
export class DocumentDisplayComponent implements OnInit {

  private documentUrl: string = '';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.documentUrl) {
        console.log(challenge);
        this.documentUrl = challenge.documentUrl;
      }
    });
  }

}
