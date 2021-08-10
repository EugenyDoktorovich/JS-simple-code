'use strict';

//СОЗДАЕТСЯ И ДОБАВЛЯЕТСЯ НА СТРАНИЦУ СЧЕТЧИК
let counter = document.createElement('div');
counter.textContent = 0;
counter.style.fontSize = '50px';
document.body.append(counter);

//СОЗДАЕТСЯ И ДОБАВЛЯЕТСЯ НА СТРАНИЦУ ПОЛЕ
let input = document.createElement('input');
input.style.borderBottomColor = 'green';
document.body.append(input);

//СОЗДАЕТСЯ И ДОБАВЛЯЕТСЯ НА СТРАНИЦУ КНОПКА
const button = document.createElement('button');
button.textContent = 'START';
button.style.backgroundColor = 'yellow';
document.body.append(button);

//ЗАРЯНЕЕ ОБЬВЛЯЮ ПЕРЕМЕНУЮ ДЛЯ СТОПА
var id;

//ФУНКЦИЯ ОТПРАВКИ ЧИСЛА
function setTime(){
    let currentCount = parseInt(input.value,10);
    counter.textContent = currentCount;
    return currentCount;
};

//ФУНКЦИЯ "ДЕКРЕМЕНТ"
//РЕШИЛ ОБХОДНЫМ СПОСОБОМ КАК ОСТАНАВЛИВАТЬ ТАЙМЕР
//НА НУЛЕ

function lower(){
    if (counter.textContent==0){
        counter.textContent=0;
    }
    else{
        counter.textContent = counter.textContent - 1;
    };
}

//ФУНКЦИЯ ПОВТОРЯЕТ ДЕКРЕМЕНТ С ИНТЕРВАЛОМ 1с

function timerStart(){
    let idForStopTimer = setInterval(lower,1000);
    id = idForStopTimer;
}

//ФУНКЦИЯ ОСТАНАВЛИВАЕТ ИНТЕРВАЛ
function stop(){
    clearInterval(id);
}


//ОБРАБОТЧИК СОБЫТИЙ, ВАЖНО ДОБАВИТЬ БЫЛО ФУНКЦИЮ
//stop в самом начале ,чтобы таймер не ускорялся
//при повторной отправке числа

button.addEventListener('click',function (){
    stop();
    setTime();
    timerStart();
}
);

