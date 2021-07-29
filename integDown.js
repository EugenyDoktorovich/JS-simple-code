//Функция получает на вход число, и меняет в нем порядок так,
//что цифры становятся в порядке убывания и возвращает число.
//Реализован метод сортировки пузырьком ,а так же swap через
//третью временную переменную.
function descendingOrder(n){
    let value =String(n);
    let mas = [];
    for(let i = 0;i < value.length ;i++){
      mas.push(+value[i]);
    };
    for(let i = 0;i < mas.length-1 ;i++){
      for(let j = 0;j <(mas.length-1)-i;j++){
        if(mas[j]>mas[j+1]){
          var swap = mas[j];
          mas[j]=mas[j+1];
          mas[j+1]=swap;
        }
      }
    }
    function compareNumeric(a, b) {
      if (a > b) return -1;
      if (a == b) return 0;
      if (a < b) return 1;
    }
    
    
    mas.sort(compareNumeric);
    let newMas=mas.join('');
    return +newMas;
    
  }

  //ПРоверка для git