let time = prompt('Введите время от 0 до 59');
if (time >= 0 && time <= 14) {
	alert ('Первая четверть');
}
else if (time >= 15 && time <= 30) {
	alert ('Вторая четверть');
}
else if (time >= 31 && time <= 45) {
	alert ('Третья четверть');
}
else if (time >= 46 && time <= 59) {
	alert ('Четвёртая четверть');
}
else {}

let lang = prompt ('Выберете ru или by');
switch (lang) {
	case 'ru':
		week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
	break;
	case 'by':
		week = ['панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота', 'нядзеля'];
	break;
}
alert(week);