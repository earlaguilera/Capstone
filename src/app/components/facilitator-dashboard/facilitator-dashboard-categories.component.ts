import {
AfterViewInit,
Component,
OnInit
} from '@angular/core';

import { DataService } from './../../data.service';

var loader, canvasCenterWidth, canvasCenterHeight, radius, beginningAngle, endingAngle, myCanvas, context, image;

@Component({
  selector: 'app-facilitator-dashboard-categories',
  templateUrl: './facilitator-dashboard-categories.component.html',
  styleUrls: ['./facilitator-dashboard.component.css']
})
export class FacilitatorDashboardComponentCategories implements AfterViewInit, OnInit {

  categories: Array<any>;

  constructor(private _dataService: DataService) {}

  ngOnInit() {

//get categories
    this._dataService.getCategories()
    .subscribe(res => this.categories = res);

          //draw circle in center of canvas
        myCanvas = document.getElementById('profileCanvas');
        context = myCanvas.getContext('2d');
        canvasCenterWidth = myCanvas.width/2;
        canvasCenterHeight = myCanvas.height/2;
        radius = 90;
        beginningAngle = 0;
        endingAngle = 2*Math.PI;
        context.beginPath();

        context.arc(canvasCenterWidth, canvasCenterHeight, radius, beginningAngle, endingAngle);

        context.closePath();

        context.fillStyle = '#FFFFFF';
        context.fill();
        context.lineWidth = 10;
        context.strokeStyle = '#dbdbdb';
        context.stroke();
		image = new Image();
		image.onload = (() => setAPicture(this));
  }

  ngAfterViewInit(): void {
  }

}

//typescript version of image.onload
function setAPicture(dashboard)
{
	context.clip();

	//for testing. This image will be the user's profile image, or a default image
	image.src = 'defaultProfilePicture.gif';
    context.drawImage(image,0,0, image.width, image.height, 0,0, myCanvas.width, myCanvas.height);
}