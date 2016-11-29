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

  private _open: boolean = false;
  private windowService = new WindowService();

  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;
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
      this.title = title || 'ImagineIf';
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
    this.windowService.showBackdrop();
  }

   public onSidebarClose(): void {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.windowService.hideBackdrop();
   }
}
