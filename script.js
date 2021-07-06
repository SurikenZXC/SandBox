var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let dot = [];
let myColor = "blue";
var radius = 10;

/////////////////////////////////////////////////////////
// ТРИГГЕРЫ
let clck = 0;

let sP = false;

let sG = true;

let hereWeGoAgain = true;

// включатель хитбоксов
let hit = true;

// для переключения формы
let form = true;

// лимит объектов
let limit = true;
/////////////////////////////////////////////////////////

dot[0] = {
	x : canvas.width/2,
	y : canvas.height-radius*2,
	speedY : Math.random() * (3 - 1) + 1,
	speedX : (Math.random() - .5) * 4,
	r : getRandomInt(255),
	g : getRandomInt(255),
	b : getRandomInt(255),
	hS : true,
	vS : true,
	skipLine : false,
}

// функция для рандомайза цветов
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

canvas.addEventListener("mousedown", function (e) {
	
	if(!sP){
	setInterval(()=>{draw()},1);
	sP=!sP;
}
	// режими клика 
	if(clck == 0){
		let prikol = 40;
		dot.push({
		x : e.clientX,
		y : e.clientY,
		speedY : (Math.random() - .5) * prikol,
		speedX : (Math.random() - .5) * prikol,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
	}else if (clck == 1){
		for(let i = 0; i < 100; i++){
	dot.push({
		x : e.clientX,
		y : e.clientY,
		speedY : (Math.random() - .5) * 4,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
}
		
	}else if(clck == 2){
		for(let i = 0; i < 10; i++){
	dot.push({
		x : e.clientX,
		y : e.clientY,
		speedY : (Math.random() - .5) * 4,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
}
	}else{
		for(let i = 0; i < 10; i++){
	dot.push({
		x : e.clientX +(Math.random() - .5) * 200,
		y : e.clientY +(Math.random() - .5) * 200,
		speedY : (Math.random() - .5) * 4,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
}
	}
});

document.addEventListener("keydown",(e)=>{
	console.log(e.keyCode);
switch(e.keyCode){
case 49:
	console.log(dot.length);
break;
case 50:
	for(let k = 0; k < 100; k++){
	dot.push({
		x : Math.random() * (canvas.width-radius - 10) + 10,
		y : Math.random() * (canvas.height-radius - 10) + 10,
		// ну это формула короче полезная для плюсов там минусов
		speedY : (Math.random() - .5) * 4,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
}
break;
case 51:
	for(let k = 0; k < 1000; k++){
	dot.push({
		x : Math.random() * (canvas.width-radius*2 - 10) + 10,
		y : Math.random() * (canvas.height-radius*2 - 10) + 10,
		speedY : (Math.random() - .5) * 4,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : true,
		});
}
break;
case 52:
	if(clck < 3){
		clck++;
	}else{
		clck = 0;
	}
break;
case 81:
if(!sP){
	setInterval(()=>{draw()},1);
	sP=!sP;
}
break;
case 82:
	dot.length = 0;
	ctx.fillStyle = `black`;
	ctx.fillRect(0,0, canvas.width,canvas.height);
	ctx.fill();
	ctx.fillStyle = `white`;
	ctx.font = "25px courier";
	ctx.fillText(`Объектов: ${dot.length}`,canvas.width - 250, canvas.height - 10);
	ctx.fillStyle = `black`;
break;
case 83:
	sG=!sG;
break;
case 90:
	myColor = "green";
break;
case 88:
	myColor = "red";
break;
case 67:
	myColor = "blue";
break;
case 86:
	myColor = "purple";
break;
case 66:
	myColor = "white";
break;
case 78:
	myColor = "pink";
break;
case 77:
	hereWeGoAgain=!hereWeGoAgain;
break;
case 20:
	hit=!hit;
break;
case 53:
	if(radius < 30){
		radius+=10;
	}else{
		radius=1;
	}
break;
case 87:
	form=!form;
break;
case 76:
	limit=!limit;
break;
}
});

ctx.fillStyle = `black`;
ctx.fillRect(0,0, canvas.width,canvas.height);
ctx.fill();
ctx.fillStyle = `white`;
ctx.font = "25px courier";
ctx.fillText(`Объектов: ${dot.length}`,canvas.width - 250, canvas.height - 10);
ctx.fillStyle = `white`;

function draw() {
	if(sG){
	ctx.fillStyle = `black`;
	ctx.fillRect(0,0, canvas.width,canvas.height);
	ctx.fill();
	ctx.fillStyle = `white`;
	ctx.font = "25px courier";
	ctx.fillText(`Объектов: ${dot.length}`,canvas.width - 250, canvas.height - 10);
	ctx.fillStyle = `black`;
	}
	

	// цикл работающий над каждым объектом
	for(let i = 0; i < dot.length; i++){
	
	// выбор цвета
	if(!hereWeGoAgain){
		ctx.fillStyle = myColor;
	}else{
		ctx.fillStyle = `rgb(${dot[i].r},${dot[i].g},${dot[i].b})`;
	}
	
	if(form){
	ctx.beginPath();
	ctx.arc(dot[i].x,dot[i].y,radius,0,Math.PI*2);
	ctx.fill();
}else{
	ctx.beginPath();
	ctx.fillRect(dot[i].x-radius,dot[i].y-radius, radius*2,radius*2);
	ctx.fill();
}

	// сравнение для спавна новых объектов
	if(dot[i].y < canvas.height-radius*4){

		if(limit){
			if(dot.length >800){
			dot.shift();
		}}
		
		if(!dot[i].skipLine){

		// проверка на прохождения линии
		dot[i].skipLine = true;

		dot.push({
		x : Math.random() * (canvas.width-radius - 10) + 10,
		y : canvas.height-radius*2,
		speedY : Math.random() * (3 - 1) + 1,
		speedX : (Math.random() - .5) * 4,
		r : getRandomInt(255),
		g : getRandomInt(255),
		b : getRandomInt(255),
		hS : true,
		vS : true,
		skipLine : false,
		}); 
		}
	}

	// хитбоксы
	if(hit){
	// переключение если y=0 и возможно не только 
	// это которое ↑  ↓
	if(dot[i].y < 0+radius*1.3 || dot[i].y > canvas.height-radius*1.3){
		dot[i].vS=!dot[i].vS;
	}

	// переключение если х=0 и возможно не только
	// это которое  ←  →
	if(dot[i].x > canvas.width-radius*1.3 || dot[i].x < 0+radius*1.3){
		dot[i].hS=!dot[i].hS;
	}
	}

	// короче движение
	if(!dot[i].hS){
		dot[i].speedX=-dot[i].speedX;
	}

	// короче движение тоже
	if(dot[i].vS){
		dot[i].y-=dot[i].speedY;
		dot[i].x+=dot[i].speedX;
	}else{
		dot[i].y+=dot[i].speedY;
		dot[i].x+=dot[i].speedX;
	}
}
}