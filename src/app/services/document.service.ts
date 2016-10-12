import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Document, SoundProperties } from '../models';

@Injectable()
export class DocumentService {
  private initializeSoundManager: Promise<void>;
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

  constructor() {
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

  public init() {
    this.initializeSoundManager = new Promise<void>((resolve: Function, reject: Function) => {
      let success = false;
      soundManager.setup({
        url: '/app/assets/sounds/',
        flashLoadTimeout: 1000,
        onready: () => {
          resolve();
          success = true;
        }
      });
      setTimeout(() => {
        if (!success) {
          reject();
        }
      }, 50000);
    }).catch(() => {
      console.error('Failed to start Sound Manager.');
    });
  }

  public playSound(sound: SoundProperties): Promise<void> {
    return this.initializeSoundManager.then(() => {
      return new Promise<void>((resolve: Function, reject: Function) => {
        let soundToPlay = soundManager.createSound(sound);
        soundToPlay.load({onload: () => {
          soundToPlay.play({onfinish: () => {
            resolve();
          }});
        }});
      });
    });
  }

  public getDocument(name: string): Observable<Document> {
      return this.currentDocumentSubject.asObservable();
  }
}
