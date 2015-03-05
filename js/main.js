/*
     Name: Steven Miller
     Date: 03/04/2015
     Class & Section:  WIA-Sec-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.


********************************************/

//Draw Rectangle here

if(Modernizr.canvas){
	//canvas is supported
	
	var canvasOne = document.getElementById("Canvas1");
	var ctx = canvasOne.getContext("2d");
	
		ctx.strokeStyle = "black";
		ctx.fillStyle = "blue";
		ctx.lineWidth = 5;
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.strokeRect(0,0,50,100);
		ctx.fillRect(0,0,50,100);
		ctx.stroke();
	
	
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

if(Modernizr.canvas){
	//canvas is supported
	
	var canvasTwo = document.getElementById("Canvas2");
	var ctx = canvasTwo.getContext("2d");
	
		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgba(200, 14, 14, 0.5)";
		ctx.lineWidth = 5;
		
		var degrees = 360;
		var radians = (degrees/180)*Math.PI;
		
		ctx.beginPath();
		ctx.arc(50,50, 30, 0, radians, false);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(50,50, 20, 0, radians, false);
		ctx.fill();
	
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

if(Modernizr.canvas){
	//canvas is supported
	
	var canvasThree = document.getElementById("Canvas3");
	var ctx = canvasThree.getContext("2d");
	
		ctx.strokeStyle = "black";
		ctx.fillStyle = "blue";
		ctx.lineWidth = 5;
		//function to draw star useing the lineTo method with star(canvas, x of center, y of center, radius, number of points, fraction of radius for inset)
		
	function star(ctx, x, y, r, p, m)
		{
			ctx.save();
			ctx.beginPath();
			ctx.translate(x, y);
			ctx.moveTo(0,0-r);
			for (var i = 0; i < p; i++)
			{
				ctx.rotate(Math.PI / p);
				ctx.lineTo(0, 0 - (r*m));
				ctx.rotate(Math.PI / p);
				ctx.lineTo(0, 0 - r);
			}
			ctx.fill();
			ctx.restore();
		}	
	}else {
		//Canvas is not supported
		
		
		
		}
		
		
		star(ctx, 100, 100, 50, 5, 0.40)

	//console.log();
	
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
if(Modernizr.canvas){
	//canvas is supported
	
	var canvasFour = document.getElementById("Canvas4");
	var ctx = canvasFour.getContext("2d");
	
		ctx.strokeStyle = "black";
		ctx.fillStyle = "yellow";
		ctx.lineWidth = 5;
		
		ctx.beginPath();
		ctx.arc(100,100, 50, 0, 1*Math.PI, true);
		ctx.moveTo(49,100);
		ctx.bezierCurveTo(75,75,75,100,82,100);
		ctx.moveTo(81,100);
		ctx.bezierCurveTo(107,75,107,100,116,100);
		ctx.moveTo(115,100);
		ctx.bezierCurveTo(141,75,141,100,152,100);
		ctx.fill();
		ctx.moveTo(100,100);
		ctx.lineTo(100,150);
		ctx.arc(85,150, 15, 0, 1*Math.PI, false);
		ctx.stroke();
		
		
			
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
if(Modernizr.canvas){
	//canvas is supported
	
	var canvasFive = document.getElementById("Canvas5");
	var ctx = canvasFive.getContext("2d");
	var myString = "Game of the year!! - Informed Gamer";
	
		ctx.font = "15pt Georgia";
		ctx.fillStyle = "black";
		ctx.strokeStyle = "black";
		
		ctx.fillText(myString,50,50);
		ctx.strokeText(myString,50,50);	
	
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

if(Modernizr.canvas){
	//canvas is supported
	
	var canvasSix = document.getElementById("Canvas6");
	var ctx = canvasSix.getContext("2d");
	
		var logo1 = document.getElementById("logo");
		
		ctx.drawImage(logo1, 0,0);
		
		ctx.drawImage(logo1, 0,1080,1650,540);
		
		ctx.drawImage(logo1, 317,171,739,299,0,1620,739,299);
		
		
		
		
		
	
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

if(Modernizr.canvas){
	//canvas is supported
	
	var canvasSeven = document.getElementById("Canvas7");
	var ctx = canvasSeven.getContext("2d");
	var myString1 = "Interactions";
		ctx.strokeStyle = "black";
		ctx.fillStyle = "yellow";
		ctx.lineWidth = 5;
		
		ctx.beginPath();
		ctx.arc(200,200, 50, 0, 1*Math.PI, true);
		ctx.moveTo(149,200);
		ctx.bezierCurveTo(175,175,175,200,182,200);
		ctx.moveTo(181,200);
		ctx.bezierCurveTo(207,175,207,200,216,200);
		ctx.moveTo(215,200);
		ctx.bezierCurveTo(241,175,241,200,252,200);
		ctx.fill();
		ctx.moveTo(200,200);
		ctx.lineTo(200,250);
		ctx.arc(185,250, 15, 0, 1*Math.PI, false);
		ctx.stroke();
		
		star(ctx, 400, 100, 50, 10, 1)
		ctx.drawImage(logo1, 317,171,739,299,0,300,184,74);
		
		ctx.font = "35pt Georgia";
		ctx.fillStyle = "black";
		ctx.strokeStyle = "black";
		
		ctx.fillText(myString1,200,370);
		ctx.strokeText(myString1,200,370);	

		
		
			
	}else {
		//Canvas is not supported
		
		
		
		}
	//console.log();
