function reDown (count){
  for (var i = 0; i < count; i++){
    down(i);
  }
}
function reLeft (count){
  for (var i = 0; i < count; i++){
    left(i);
  }
}
function reRight (count){
  for (var i = 0; i < count; i++){
    right(i);
  }
}
function reUp (count){
  for (var i = 0; i < count; i++){
    up(i);
  }
}
function open () {
 var key = getColor();
  down();
  setColor(key);
  reRight(2);
}

function rnb() {
for ( var i = 0; i < 12; i++) {
 	var c = getColor();
  if (c == "blue") {
   down(); 
  } else if (c == "red") {
  up();
  } else {
   right(); 
  }
}
}

up();
right();
reUp(2);
right();
up();
