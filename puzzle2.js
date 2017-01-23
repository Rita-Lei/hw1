function reDown(total){
  var count = 0;
  while (count < total){
  down();
  count = count + 1;
  }
}

function reRight(total){
    var count = 0;
    while (count < total){
      right();
      count = count + 1;
    }
  }

function reUp(total){
  var count = 0;
  while (count < total){
    up();
    count = count + 1;
  }
}

reDown(6);
reRight(3);
reUp(2);
reRight(2);
down(1);
reDown(2);
