import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  public closeOnClickOutside: boolean = true;
  public showOverlay: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
