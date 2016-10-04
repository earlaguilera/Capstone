import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Document } from '../models';

@Injectable()
export class DocumentService {

  private mockDocument: Document = {}; // Janetth fill this out, give it the correct type 

  constructor() {}

  public playSound(id: number): Promise<void> {
      return new Promise<void>((resolve: Function) => {
        // TODO play sound of associated row
        resolve();
      });
  }

  public getDocument(name: string): Observable<Document> {
      return Observable.from([this.mockDocument]);
  }
}
