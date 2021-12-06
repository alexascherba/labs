let a = prompt ('Введите первое число');
let b = prompt ('Введите второе число');
function checkFunc(a, b) {
    return a == b;
     }
alert (checkFunc(a, b));

function checkSum(a, b) {
    return a + b > 10;
}
alert (checkSum(a, b));

let c = prompt ('Введите третье число');
function checkOtr(c) {
    return c < 0;
}
alert (checkOtr(c));