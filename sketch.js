// let wood; //wood noise for door, table, 

// let switch; //light switch noise

// let metal; //wastebasket.mp3, but also might use for doorknob

// let windows; //not the OS

// let clock; //figure out iterations, expecting to play 3 different sounds

// let rubberPull;//nrrrrrk
// let rubberRelease;//thuup


// var gif_createImg;

// let escapeRoom = createA('Room2.html', 'this is a link');

let extraCanvas;

let handBand;

let twang;

  // function preload() {
  //   handBand = loadImage();
  // }

var cnv;

function centerCanvas() {
  var xc = (windowWidth - width) / 2;
  var yc = (windowHeight - height) / 2;
  cnv.position(xc, yc);
}

function setup() {
  cnv = createCanvas(902, 697);
  centerCanvas();
  createImg = createImg("RoomScene.gif");
 twang = loadSound("rubberTwang.mp3");
  background(0);
  position(xc,yc);

}



function windowResized() {
  centerCanvas();
}

function draw(_door) {
    beginShape(TESS);
    vertex(0,0);
    vertex(159,0);
    vertex(195,518);
    vertex(36,663);
    vertex(0,568);
    endShape(CLOSE);
}



//simpler canvas setup
// function setup() {
//   createCanvas(902, 697);
//   background(0);
// }

// function preload() {
//     gif_createImg = createImg("RoomScene.gif");
//     position(xc,yc)
//   }
  
  

//   wood = loadSound();
// function mousePressed() {
//   if (wood.isPlaying())
//     wood.stop();
//     //might need to check if it messes up
// }

function mouseReleased() {
  if (twang.isPlaying()) {
    // .isPlaying() returns a boolean
    twang.stop();
  } else {
    twang.play();
  }
}

// function draw() {
//   background(220);



//   if (mouseIsReleased) {
//     twang.play("rubberTwang.mp3");
//   }
// }


//troubleshooter
function draw() {
    // clear()
    // background(0)
    cnv.ellipse(mouseX, mouseY, 5)
    cnv.fill(200, 0, 200)
}

// function draw() {
//   textSize(28)
//   text(shoot the clock, xc, yc+100)
//   fill (100)
// }

let escapeRoom = createA('Room2.html', 'this is a link');

