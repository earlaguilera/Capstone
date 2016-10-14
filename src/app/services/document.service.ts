import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Document, SoundProperties } from '../models';
import { AudioService } from './audio.service';

@Injectable()
export class DocumentService {
  private currentDocumentSubject: BehaviorSubject<Document>;
  private mockDocument: Document = {
    id: 'job',
    rows: [
      { id: '0', hasSound: false, state: 'inactive' },
      { id: '1', hasSound: true, state: 'inactive' },
      { id: '2', hasSound: true, state: 'inactive' },
      { id: '3', hasSound: true, state: 'inactive' },
      { id: '4', hasSound: true, state: 'inactive' },
      { id: '5', hasSound: true, state: 'inactive' },
      { id: '6', hasSound: true, state: 'inactive' },
      { id: '7', hasSound: true, state: 'inactive' },
      { id: '8', hasSound: true, state: 'inactive' }
    ]
  };

  constructor(private audioService: AudioService) {
    // Mock data setup
    for (let row of this.mockDocument.rows) {
      if (row.hasSound) {
        row.sound = {
          url: '/app/assets/sounds/' + this.mockDocument.id + row.id + '.wav',
          autoplay: false,
          id: this.mockDocument.id + row.id,
          type: 'audio/wav'
        };
      }
    }
    this.currentDocumentSubject = new BehaviorSubject<Document>(this.mockDocument);
  }

  public playSound(sound: SoundProperties): Promise<void> {
    return this.audioService.playSound(sound);
  }

  public getDocument(name: string): Observable<Document> {
      return this.currentDocumentSubject.asObservable();
  }
}
