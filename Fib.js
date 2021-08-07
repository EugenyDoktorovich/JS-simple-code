'use strict';
//Функция принимает число и возвращает массив чисел Фибонначи
let fibMas = function(n){
    let masOfFib = [0,1];
    for(let i = masOfFib[1] ; i <=n-2 ; i++){
        masOfFib.push(masOfFib[i] + masOfFib[i-1]);
    }
    return masOfFib;

}

alert(fibMas(10));