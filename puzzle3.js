function reDown(total){
  var count = 0;
  while (count < total){
    down();
  count = count + 1;
  }
}

function reRight(total){
  var count = 0;
  while(count < total){
    right();
    count = count + 1;
  }
}

reDown(2);
var c = getColor();
reDown(3);
reRight(2);
setColor(c);
reRight(2);
up();
    
