import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';

import {
  AudioService,
  ModalService,
  TitleService,
  WindowService
} from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  // config for dev
  private skipHelp: boolean = true;

  private _opened: boolean = false;
  private windowService = new WindowService();

  public closeOnClickOutside: boolean = true;
  public showBackdrop: boolean = true;
  public closeButton: boolean = false;
  public closeEsc: boolean = false;
  public closeClick: boolean = false;
  public overlayShown: boolean = false;
  public title: string = '';

  constructor(private audioService: AudioService,
              private modalService: ModalService,
              private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.getTitle().subscribe((title: string): void => {
      this.title = title || 'ImagineIf-TEST';
    });
  }

  ngAfterViewInit(): void {
    this.audioService.init();
    if (!this.skipHelp) {
      this.modalService.openModal({
        content: undefined, // TODO: Help modal
        options: {
          modalClass: 'modal-md instructions',
          title: 'Instructions',
          submitButtonLabel: 'Begin',
          hideCloseButton: true,
          closeOnEscape: false,
          closeOnOutsideClick: false,
          onClose: () => { this.showBackdrop = false; }
        }
      });
      this.showBackdrop = true;
    }
  }

  public toggleSidebar(): void {
    this._opened = !this._opened;
  }

  public onSidebarOpen(): void {
    /*
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('mySidenav').style.height = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    this.windowService.showBackdrop();
    */
  }

   public onSidebarClose(): void {
    /*
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('mySidenav').style.height = '0';    
    document.getElementById('main').style.marginLeft = '0';
    this.windowService.hideBackdrop();
    */
   }
}
