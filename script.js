//PAINT
var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 10;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;
var w = 200;
var h = 200;

function setwidth(){
  var canvas1 = document.getElementById("canvas1");
  var x = document.getElementById("width").value;
  if (isNumeric(parseInt(x))==true){
    canvas1.width=x;
    w =x;
    const ctx = canvas1.getContext("2d");
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  else{alert('Input needs to be an integer');}
}
function setheight(){
  var canvas1 = document.getElementById("canvas1");
  var x = document.getElementById("height").value;
  if (isNumeric(parseInt(x))==true){
    canvas1.height=x;
    h=x;
    const ctx = canvas1.getContext("2d");
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  else{alert('Input needs to be an integer');}
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}


// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

function startPaint(){
  isPainting=true;
}
function endPaint(){
  isPainting=false;
}
function doPaint(x,y){
  if (isPainting==true){
    paintCircle(x,y);
  }
}

function setColor(){
  var colorinput = document.getElementById("clr");
  var Newcolor = colorinput.value;
  color = Newcolor;
}

function brushsize(){
  var sizeinput = document.getElementById("sldr");
  var Newsize = sizeinput.value;
  radius=Newsize;
  document.getElementById("sizeOutput").innerHTML = Newsize;
}

function clearCanvas(){
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function downloadPaint(){
    var page = document.getElementById("canvas1");
    var dataURL = page.toDataURL("image/jpg", 1.0);
    downloadImage(dataURL, 'my-canvas.jpg');
}
// Save | Download image
function downloadImage(data, filename = 'untitled.jpg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}




