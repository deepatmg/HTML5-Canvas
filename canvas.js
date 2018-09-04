var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
 /*c for context*/
var c = canvas.getContext('2d');

c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,0,255,0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(300, 300, 100, 100);

//Lines
c.beginPath();
c.moveTo(50, 300); /*starting point*/
c.lineTo(300,100); /*end point*/
c.lineTo(400,300);
c.strokeStyle = "#fa34a3"; 
c.stroke(); 

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

for (var i = 0; i < 200; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = getRandomColor();
	c.stroke();
}