import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { getComponetClass } from './components/challenges';
import { Challenge } from './models';
import { AudioService, ChallengeService, ModalService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  // config for dev
  private skipHelp: boolean = true;
  private challengeType: string = 'explore';

  @ViewChild('challengeDisplay', {read: ViewContainerRef})
  private challengeContainer: ViewContainerRef;

  private title: string = '';
  private _open: boolean = false;
  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;
  public closeButton: boolean = false;
  public closeEsc: boolean = false;
  public closeClick: boolean = false;
  public overlayShown: boolean = false;

  constructor( private audioService: AudioService,
               private componentFactoryResolver: ComponentFactoryResolver,
               private challengeService: ChallengeService,
               private modalService: ModalService) {}

/*
 * OnInit: Get the current challenge by ID, then inject the correct
 *          component type into the container.
 */
  ngOnInit() {
    this.challengeService.setChallenge(this.challengeType)
    .subscribe((challenge: Challenge) => {
      const component = getComponetClass(challenge.type);
      if (component) {
        this.title = challenge.title;
        this.challengeContainer.createComponent(
          this.componentFactoryResolver.resolveComponentFactory(component)
        );
      } else {
        // TODO: Handle component class not found
        console.error('Challenge Component class not found: ', challenge.type);
      }
    }, (error: string) => {
      // TODO: handle challenge not found
      console.error('Challenge not found: ', this.challengeType);
    });
  }

  ngAfterViewInit(): void {
    this.audioService.init();
    if (!this.skipHelp) {
      this.modalService.openModal({
        options: {
          modalClass: 'modal-md instructions',
          title: 'Instructions',
          submitButtonLabel: 'Begin',
          hideCloseButton: true,
          closeOnEscape: false,
          closeOnOutsideClick: false,
          onClose: () => { this.showOverlay = false; }
        }
      });
      this.showOverlay = true;
    }
  }

  public toggleSidebar(): void {
    this._open = !this._open;
  }

  public onSidebarOpen(): void {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

   public onSidebarClose(): void {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
   }
}
