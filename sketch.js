var ballPit = [];

var setup = function() {
  createCanvas (800, 800);
};

var draw = function() {
  background(50);
  ballPit.forEach(function updateAndDisplay (ball) {
    ball.update();
    ball.display();
  });
  if (moiseIsPressed) ballPit.push(new Ball(mouseX, mouse));
};


draw = function () {
  background(100);
  ballPit.forEach(function updateAndDisplay(ball) {
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
