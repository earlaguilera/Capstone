import { Component, OnInit } from '@angular/core';

import { ChallengeService } from './services/challenge.service';
import { Challenge } from './models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  private title: string = '';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challengeService.getCurrentChallengeObservable()
    .subscribe((challenge: Challenge) => {
      if (challenge && challenge.title) {
        this.title = challenge.title;
      }
    });
  }

}
