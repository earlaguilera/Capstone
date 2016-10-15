import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { ModalDescription } from '../models';

@Injectable()
export class ModalService {
  private modalSubject: BehaviorSubject<ModalDescription>;
  private signalThatViewIsReady: Function;
  private waitForViewToBeReady: Promise<void>;

  constructor() {
    this.modalSubject = new BehaviorSubject<ModalDescription>(undefined);
    this.waitForViewToBeReady = new Promise<void>((resolve: Function) => {
      this.signalThatViewIsReady = resolve;
    });
  }

  public openModal(modalDescription: ModalDescription): void {
    this.waitForViewToBeReady.then(() => {
      this.modalSubject.next(modalDescription);
    });
  }

  public closeModal(): void {
    this.waitForViewToBeReady.then(() => {
      this.modalSubject.next(undefined);
    });
  }

  public initModalComponent(): Observable<ModalDescription> {
    this.signalThatViewIsReady();
    return this.modalSubject.asObservable();
  }
}
