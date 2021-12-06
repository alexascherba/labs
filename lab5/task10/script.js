let zp = prompt ('Введите сумму зарплаты', 1000);
let rez = Number(zp) + Number((zp/100)*15);
alert ('Зарплата с премией равна ' + rez);
rez -= Number((rez/100)*10);
alert ('Запрплата с вычетом налога равна ' + rez);
rez -= 90;
alert ('После магазина осталось ' + rez);
rez /= 2;
alert ('Вы отдали жене/мужу ' + rez + '. У вас осталось ' + rez);