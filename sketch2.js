// var twang;

var img;
var pg;
// var lag;    

    function preload() {
      img = createImg("RoomScene.gif");
    }
    
    function setup(){
      createCanvas(902, 697);
      pg = createGraphics(902, 697);
    //   twang = loadSound("rubberTwang.mp3");
    }
    


    // function mousePressed(){
    //   pg.fill(255, 0, 0);
    //   pg.ellipse(mouseX, mouseY, 20, 20);
    // }
    
    function mousePressed(){
        pg.fill(0, 255, 0)
        pg.ellipse(365, 83, 103, 103)
    }

    function draw() {
      image(img, 0, 0);
      image(pg, 0, 0);
    }

    function lagClear(){
        pg.clear()
    }

    function mouseReleased(){
        setTimeout(lagClear, 800)
    }
    //     if (twang.isPlaying()) {
    //         // .isPlaying() returns a boolean
    //         twang.stop();
    //       } else {
    //         twang.play();
    // }
    
