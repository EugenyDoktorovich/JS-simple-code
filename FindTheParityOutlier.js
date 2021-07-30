//Не работает ,нужно чтобы из масссива если
//четных больше,вывести нечетное и наоборот
function findOutlier(integers){
    let chet = 0;
    let nechet = 0;
    let answer;
    for(let i = 0;i < 3;i++){
      if (i%2==0){
        chet++;
      }
      else if (i%2!=0) {
        nechet++;
      }
    };
    if (chet>nechet){
      for(let i = 0;i<integers.length;i++){
        if(i%2!==0){
          return i;
        }
      }
    }
    else{
      for(let i = 0;i<integers.length;i++){
        if(i%2==0){
          return i;
        }
      }
    }
  }