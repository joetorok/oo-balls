var ballpit = [];

ballpit.push(new Ball(100, 200));
ballpit.push(new Ball(150, 145));
ballpit.push(new Ball(200, 100));

ballpit[0].speed.x=2,
ballpit[0].speed.y=2,

//var myBall = new Ball(100, 100);
//myBall.speed.x = 2;
//myBall.speed.y = 2;

//var mySecondBall = new Ball(150, 145);

//var myThirdBall = new Ball (200, 100);

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit.forEach(function updateAndDisplay(ball) {
    ball.update();
    ball.display();

  });

  //myBall.update();
  //myBall.display();

  //mySecondBall.update();
  //mySecondBall.display();

  //myThirdBall.update();
  //myThirdBall.display();
};
