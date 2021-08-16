//Код преобразует число в его бинарное представление
//и затем подсчитывает количество единиц и выводит их

var countBits = function(n) {
    let counter = 0;
    let bin = n.toString(2);
    for(let char of bin){
      if (Number(char) == 1){
        counter+=1;
      }
    }
    return counter;
  };