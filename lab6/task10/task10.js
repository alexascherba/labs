let sail_1 = document.getElementById('sail_1');
let sail_2 = document.getElementById('sail_2');
let stick = document.getElementById('stick');
let button = document.getElementById('button');

button.onclick = function (){
	button.innerHTML = 'Поплыли!';
	button.style.animation = 'ship_change 1s forwards';
	stick.style.visibility = 'visible';
	stick.style.animation = 'stick_change 1s forwards';
	sail_1.style.visibility = 'visible';
	sail_2.style.visibility = 'visible';
	sail_1.style.animation = 'sail_1_change 1s forwards';
	sail_2.style.animation = 'sail_2_change 1s forwards';
	setTimeout(moveShip, 2000);
}

function moveShip(){
	stick.style.transform = 'rotate(0deg)';
	sail_1.style.transform = 'scale(1, 10)';
	sail_2.style.transform = 'scale(1, 10)';
	button.style.borderBottomRightRadius = '60%';
	button.style.borderBottomLeftRadius = '60%';
	button.style.animation = 'ship_move 3s forwards';
	stick.style.animation = 'stick_move 3s forwards';
	sail_1.style.animation = 'sail_1_move 3s forwards';
	sail_2.style.animation = 'sail_2_move 3s forwards';
}