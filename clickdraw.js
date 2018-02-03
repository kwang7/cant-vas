var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D obj
var ctx = c.getContext("2d");

ctx.fillStyle = "#fff8dc"
ctx.fillRect(0,0,600,600);


var draw = function(e){
    if (mode){
	drawCircle(e);
    }
    else{
	drawSquare(e);
    }
}

//draw a happy face!
var drawCircle = function(e){
    //the head
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(e.offsetX, e.offsetY, 60, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
    //the mouth
    ctx.fillStyle = "#ff7777";
    ctx.beginPath()
    ctx.arc(e.offsetX, e.offsetY, 30, 0, Math.PI)
    ctx.fill()
    ctx.closePath()
    //the right eye
    ctx.beginPath()
    ctx.arc(e.offsetX + 15, e.offsetY-25, 8, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
    //the left eye
    ctx.beginPath()
    ctx.arc(e.offsetX - 15, e.offsetY-25, 8, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
    }

//a square head
var drawSquare = function(e){
    ctx.fillStyle = "#ff9999";
    //the head
    ctx.beginPath()
    ctx.fillRect(e.offsetX-40, e.offsetY-40, 80, 80)
    ctx.fill()
    ctx.closePath()
    //the left eye
    ctx.fillStyle = "#ffffff";
    ctx.beginPath()
    ctx.fillRect(e.offsetX-17, e.offsetY-15, 10, 10)
    ctx.fill()
    ctx.closePath()
    //the right eye
    ctx.beginPath()
    ctx.fillRect(e.offsetX+17, e.offsetY-15, 10, 10)
    ctx.fill()
    ctx.closePath()
    //the mouth
    ctx.beginPath()
    ctx.fillRect(e.offsetX-10, e.offsetY+12, 40, 10)
    ctx.fill()
    ctx.closePath()
}

var mode = true;
//toggle: draw circles or rectangles
var toggle = function(e){
    mode = !mode;
    console.log(mode);
}

var togl = document.getElementById("tog");
togl.addEventListener('click', toggle);

//clear rect
var clear = function(e){
    console.log("cleared");
    ctx.fillStyle = "#fff8dc"
    ctx.fillRect(0,0,600,600);
}

var cler = document.getElementById("clr")
clr.addEventListener('click', clear);


c.addEventListener('click', draw);

