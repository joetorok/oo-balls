var ballpit = [];

var updateAndDisplay = function(ball) {
  ball.update();
  ball.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit: forEach(updateAndDisplay);
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);
  //iterateWithForLoop(ballpit);
  if (mouseIsPressed) ballpit.push(new Ball(mouseX, mouseY));
};

var iterateFunctionally = function (array) {
  array.forEach(updateAndDisplay);
};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
    ballpit[index].update();
    ballpit[index].display();
    //updateAndDisplay(array[index]);
    //updateAndDisplay is a shorter code for the two lines of code above it
    ++index;
  }
};

var iterateWithForLoop = function (array) {
  for (var i = 0; i < array.length; ++i) {
    ballpit[i].update();
    ballpit[i].display();
    //updateAndDisplay(array[i]);
    //see whileLoop note for above line of code
  }
};
