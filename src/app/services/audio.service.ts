import { Injectable } from '@angular/core';

import { SoundProperties } from '../models';

@Injectable()
export class AudioService {
  // dev config
  private debug: boolean = false;
  private initializeSoundManager: Promise<void>;

  constructor() { }

  public init() {
    this.initializeSoundManager = new Promise<void>((resolve: Function, reject: Function) => {
      let success = false;
      soundManager.setup({
        debugMode: this.debug,
        url: '/assets/sounds/',
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

  public cancelSounds(): void {
     soundManager.stopAll();
  }
}
