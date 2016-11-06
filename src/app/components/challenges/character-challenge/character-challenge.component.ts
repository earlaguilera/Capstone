import { Component, OnDestroy, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Subscription } from 'rxjs/Rx';

import {
  ChallengeItem,
  ChallengeRecord,
  Character
} from '../../../models';
import { ChallengeService } from '../../../services';

@Component({
  selector: 'app-character-challenge',
  templateUrl: './character-challenge.component.html',
  styleUrls: ['./character-challenge.component.css']
})
export class CharacterChallengeComponent implements OnDestroy, OnInit {
  private characters: Character[];
  private correct: string;
  private documentUrl: string;
  private prompt: string;
  private subscriptions: Subscription[];

  constructor(private challengeService: ChallengeService,
              private dragulaService: DragulaService) { }

  public ngOnInit(): void {
    this.subscriptions = [];
    this.subscriptions.push(this.challengeService.getCurrentQuestionObservable()
    .subscribe((question: ChallengeItem): void => {
      this.characters = question.data.characters;
      this.correct = question.correct;
      this.documentUrl = question.documentSubject;
      this.prompt = question.prompt;
    }));
    this.subscriptions.push(this.challengeService.getChallengeRecordObservable()
    .subscribe((record: ChallengeRecord): void => {
      if (record.completion === 1) {
        this.endChallenge();
      }
    }));

    // Dragula
    this.initDragula();
  }

  public ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      if (!subscription.closed) {
        subscription.unsubscribe();
      }
    }
  }

  public nextQuestion(): void {
    this.challengeService.selectOption('any');
    this.challengeService.nextQuestion();
  }

  private endChallenge(): void {

  }

  private initDragula(): void {
    this.dragulaService.drag.subscribe((value) => {
      console.log('drag value ', value);
      this.onDrag(value);
    });
    this.dragulaService.drop.subscribe((value) => {
      console.log('drop value ', value);
      this.onDrop(value);
    });
    this.dragulaService.over.subscribe((value) => {
      console.log('over value ', value);
      this.onOver(value);
    });
    this.dragulaService.out.subscribe((value) => {
      console.log('out value ', value);
      this.onOut(value);
    });
    this.dragulaService.setOptions('doc-images', {
      revertOnSpill: true
    });
  }

  private onDrag(args) {
    let [e, el] = args;
    this.addClass(el, 'dragging');
  }

  private onDrop(args) {
    let [e, el] = args;
    console.log('e', e);
    console.log('el', el);
  }

  private onOver(args) {
    let [e, el, container] = args;
    if (container.id.includes('character')) {
      this.addClass(container, 'over');
    } else {
      console.log('id ', container.id);
    }
  }

  private onOut(args) {
    let [e, el, container, source] = args;
    console.log('onOut container', container);
    console.log('onOut el', el);
    this.removeClass(source.firstElementChild, 'dragging');
  }

  // These belong in a service
  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }
}
