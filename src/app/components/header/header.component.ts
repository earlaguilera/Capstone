import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../models';

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  private title: string = '';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.documentUrl) {
        console.log(challenge);
        this.title = challenge.title;
      }
    });
  }

}
