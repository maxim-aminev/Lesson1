"use strict";

let answer = (arg, range, callback1, callback2, callback3) => {
    if (arg === range) {
        return callback1("Поздравляем! Вы угадали число " + range);
    }
    if (arg > range) {
        return callback2("Загаданное число меньше введённого");
    }

    else if (arg < range) {
        return callback3("Загаданное число больше введённого");
    }
}

function cb1 (str) {
    alert(str);

    return true;
};

function cb2 (str) {
    alert(str);

    return false;
};

function cb3 (str) {
    alert(str);

    return false;
};

let play = () => {
    let attempts = 5;//Задаётся количество попыток (в нашем случае 5)
    let range = Math.floor(Math.random() * (10 - 1) + 1);
    
    do {
        let attempt = prompt("Введите число от 1 до 10 (осталось попыток: " + attempts + "):", "");
        attempt = Number(attempt);

        let finish = answer(attempt, range, cb1, cb2, cb3);

        if (finish) {
            break;
        }
        else {
            attempts--;
        }

    } while (attempts !== 0);
}

play();