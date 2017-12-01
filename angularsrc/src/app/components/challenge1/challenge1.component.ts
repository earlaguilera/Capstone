import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit {

  constructor(private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  save(){
    this.flashMessage.show('Your submission has been saved', {
      cssClass:'alert-success',
      timeout:1500
    });
  }
}
