import { Component, OnInit } from '@angular/core';

import { TitleService } from '../../services';

@Component({
  selector: 'app-challenge-menu',
  templateUrl: './challenge-menu.component.html',
  styleUrls: ['./challenge-menu.component.css']
})
export class ChallengeMenuComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('My Challenges');
  }

}
