import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  // config for dev
  private skipHelp: boolean = true;

  private _opened: boolean = false;
  public closeOnClickOutside: boolean = true;
  public showBackdrop: boolean = true;
  public closeButton: boolean = false;
  public closeEsc: boolean = false;
  public closeClick: boolean = false;
  public overlayShown: boolean = false;
  public title: string = '';
  users: Array<any>;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.title = 'Never Too Late';

    this._dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  ngAfterViewInit(): void {
  }

  public toggleSidebar(): void {
    this._opened = !this._opened;
  }
}
