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
function dot8(kp) {
  while (remainingDots() !== 0) {
    if(kp % 2 == 0) {
  	reDown(8);      
    } else {
     reUp(7);
    }
      reRight(2);
      kp++;
}
}

dot8(0);
