function reDown(total){
  var count = 0;
  while(count < total){
    down();
    count = count + 1;
  }
}

reDown(4);
right();
var c = getColor();
down();
setColor(c);
right();
right();
up();
right();
var c = getColor();
down();
setColor(c);
right();
right();
