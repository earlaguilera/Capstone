import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class TitleService {
  private titleSubject: BehaviorSubject<string>;

  constructor() {
    this.titleSubject = new BehaviorSubject<string>(undefined);
  }

  public setTitle(title: string): void {
    this.titleSubject.next(title);
  }

  public getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }
}
