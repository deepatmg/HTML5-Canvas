var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
 /*c for context*/
var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(300, 300, 100, 100);

//Lines
// c.beginPath();
// c.moveTo(50, 300); /*starting point*/
// c.lineTo(300,100); end point
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3"; 
// c.stroke(); 

//circle or arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


/*to generate random colors*/
function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color+= letters[Math.floor(Math.random()*16)];
	}
	return color;
}

/*for (var i = 0; i < 200; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = getRandomColor();
	c.stroke();
}*/


/*var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;*/

function Circle(x, y, dx, dy, radius, colorFill){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.draw = function (){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = colorFill;
		c.stroke();
		c.fillStyle = colorFill;
		c.fill();
	}

	this.update = function(){
		if(this.x + this.radius> innerWidth  || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if(this.y + this.radius> innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;  /*x velocity is 1*/
		this.y += this.dy;

		this.draw();
	}
}



var circleArray = [];
for (var i = 0; i < 100; i++) {
	var radius = 30;
	var x = Math.random() * (window.innerWidth - radius * 2) + radius;
	var y = Math.random() * (window.innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var colorFill = getRandomColor();
	circleArray.push(new Circle(x, y, dx, dy, radius, colorFill));
}



function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight); /*to refresh the canvas*/	

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();