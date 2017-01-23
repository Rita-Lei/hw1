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
function dot6(kp) {
  while (remainingDots !== 0 && getColor !== "red") {
  if (getColor() !== "red" && kp%2 == 0){
    down();
  } else if (getColor() !== "red" && kp%2 == 1) {
   up(); 
  } else {
   reRight(2);
   kp ++;
  }
}
}

dot6(0);
