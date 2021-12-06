let rez = 1;
let arr = [5, 6, 7 ,8];
for (i = 0; i < arr.length; i++) {
    rez *= arr[i];
}
alert (rez);

let obj = {
    'Минск' : 'Беларусь.',
    'Москва' : 'Россия.',
    'Киев' : 'Украина.',
};
for (key in obj) {
    alert (key + '- это ' + obj[key]);
}