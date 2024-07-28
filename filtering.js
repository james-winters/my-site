
var image;
var canvas = document.getElementById("canvas");

function upload() {
  f = document.getElementById("fileUpload");
  image = new SimpleImage(f);
  image.drawTo(canvas);
}
function download(){
  var page = document.getElementById("canvas");
  var dataURL = page.toDataURL("image/jpg", 1.0);
  downloadImage(dataURL, 'my-canvas.jpg');
}
function downloadImage(data, filename = 'untitled.jpg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

function doGray() {
  //change all pixels of image to gray
  var imageGray = image;
  for (var pixel of imageGray.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  imageGray.drawTo(canvas);
}

function doClear() {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function doReset(){
  upload();
}

function doRed(){
  var imageRed = image;
  for (var pixel of imageRed.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
  }
  imageRed.drawTo(canvas);
}

function doOrange(){
  var imageOrange = image;
  for (var pixel of imageOrange.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
  }
  imageOrange.drawTo(canvas);
}

function doYellow(){
    var imageYellow = image;
  for (var pixel of imageYellow.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
  }
  imageYellow.drawTo(canvas);
}

function doGreen(){
    var imageGreen = image;
  for (var pixel of imageGreen.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
  }
  imageGreen.drawTo(canvas);
}

function doBlue(){
    var imageBlue = image;
  for (var pixel of imageBlue.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
  }
  imageBlue.drawTo(canvas);
}

function doIndigo(){
    var imageIndigo = image;
  for (var pixel of imageIndigo.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
  }
  imageIndigo.drawTo(canvas);
}

function doViolet(){
    var imageViolet = image;
  for (var pixel of imageViolet.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
  }
  imageViolet.drawTo(canvas);
}

function doRainbow(){
  var imageRainbow = image;
  var height = imageRainbow.getHeight();
  for (var pixel of imageRainbow.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var y = pixel.getY();
    if (y<=height/7){
      //red
      if (avg < 128){
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    else if (y>height/7 && y<=height*2/7){
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  imageRainbow.drawTo(canvas);
}

function doRainbowWave(){
  var imageRainbowWave = image;
  var height = imageRainbowWave.getHeight();
  var height1 = height/7;
  var height2 = height1*2;
  var height3 = height1*3;
  var height4 = height1*4;
  var height5 = height1*5;
  var height6 = height1*6;
  for (var pixel of imageRainbowWave.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var y = pixel.getY();
    var x = pixel.getX();
    var x2 = x.toString();
    var count = x2.length;
    var factor = 10**(count-3);
    //var IntY = Math.sin(x/factor*Math.PI/180);
    var IntY = Math.sin(x*Math.PI/180);
    if (y<=height1*IntY+height2/3){
      //red
      if (avg < 128){
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    else if (y>height1*IntY && y<=height1*IntY+height2){
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y>height2*IntY && y<=height1*IntY+height3) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y>height3*IntY && y<=height1*IntY+height4) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y>height4*IntY && y<=height1*IntY+height5) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y>height5*IntY && y<=height1*IntY+height6) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  var canvas = document.getElementById("canvas");
  imageRainbowWave.drawTo(canvas);
}
