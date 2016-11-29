import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { createMockDocument } from '../../resources/mock-data';
import { Document, Row } from '../models';
import { AudioService } from './audio.service';

@Injectable()
export class DocumentService {
  private currentDocumentSubject: BehaviorSubject<Document>;
  private documentClick: BehaviorSubject<string>;
  private documentFocus: BehaviorSubject<number>;
  private mockDocument: Document;

  constructor(private audioService: AudioService) {
    this.mockDocument = createMockDocument();
    this.currentDocumentSubject = new BehaviorSubject<Document>(this.mockDocument);
    this.documentClick = new BehaviorSubject<string>(undefined);
    this.documentFocus = new BehaviorSubject<number>(-1);
  }

  public clickRow(row: Row): Promise<void> {
    return this.audioService.playSound(row.sound).then((): void => {
      this.documentClick.next(row.id);
    });
  }

  public getDocument(name: string): Observable<Document> {
      return this.currentDocumentSubject.asObservable();
  }

  public getDocumentClickStream(): Observable<string> {
    return Observable.from(this.documentClick.filter((id: string) => id !== undefined));
  }

  public getDocumentFocusStream(): Observable<number> {
    return Observable.from(this.documentFocus.filter((id: number) => id !== undefined));
  }

  public setDocumentFocus(rowId: number): void {
    this.documentFocus.next(rowId);
  }

  public reset(): void {
    this.audioService.cancelSounds();
  }
}
