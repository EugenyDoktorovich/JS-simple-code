//функция принимсет два значение и выводит сумму чисел между ними
//включаяя сами числа
'use strict'
function masSum(start,end){
    let newMas = [];
    for(let i = start;i<=end;i++){
        newMas.push(i);
    };
    let answer='';
    let sumAll=0;
    for(let key of newMas){
        sumAll+=key;
        answer+='+'+String(key);
    };
    return answer + '='+String(sumAll)

};
