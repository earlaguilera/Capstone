// JavaScript Document

var loader, canvasCenterWidth, canvasCenterHeight, radius, beginningAngle, endingAngle, myCanvas, context;

window.onload = function()
{
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
	
	setAPicture();
}

function setAPicture()
{
	context.clip();
	
	var image = new Image();
	
	<!--for testing. This image will be the user's profile image, or a default image-->
	image.src = 'defaultProfilePicture.gif';
	image.onload=function()
	{
		context.drawImage(image,0,0, image.width, image.height, 0,0, myCanvas.width, myCanvas.height);
	}
}