let a = Number(prompt ('Введите число'));
function calcSq(a) {
    return a*a;
}
alert ('Квадрат числа a равен ' + calcSq(a));

let b = Number (prompt ('Введите второе число'));
function calcSum(a,b) {
    return a + b;
}
alert ('Сумма a и b равна ' + calcSum(a,b));

let c = Number(prompt ('Введите третье число'));
function t(a, b, c) {
    return (a - b)/c;
}
alert ('(a - b)/c = ' + t(a, b, c));

let day = Number(prompt ('Введите число от 1 до 7'));
alert (week(day));
function week(day) {
    switch (day) {
        case 1: alert ('Вы выбрали 1, день недели - понедельник');
            break;
        case 2: alert ('Вы выбрали 2, день недели - вторник');
            break;
        case 3: alert ('Вы выбрали 3, день недели - среда');
            break;
        case 4: alert ('Вы выбрали 4, день недели - четверг');
            break;
        case 5: alert ('Вы выбрали 5, день недели - пятница');
            break;
        case 6: alert ('Вы выбрали 6, день недели - суббота');
            break;
        case 7: alert ('Вы выбрали 7, день недели - воскресенье');
            break;
    default: alert ('Неверное значение');
    }
    return day;
}