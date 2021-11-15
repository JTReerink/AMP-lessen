const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//vierkant-onder-driehoek
context.beginPath();
context.fillStyle = "rgb(220,85,57)";
context.moveTo(1000,500);
context.lineTo(1150,450);
context.lineTo(1150,300);
context.lineTo(1000,350);
context.closePath();
context.stroke();
context.fill();

//Driehoek
context.beginPath();
context.fillStyle = "#173825";
context.moveTo(1000,350);
context.lineTo(1150,300);
context.lineTo(1075,200);
context.closePath();
context.stroke();
context.fill();

//Zijkant-dak
context.beginPath();
context.fillStyle = "#9D6055dd";
context.moveTo(1075,200);
context.lineTo(850,120);
context.lineTo(775,270);
context.lineTo(1000,350);
context.closePath();
context.stroke();
context.fill();

//zijkant-rechthoek
context.beginPath();
context.fillStyle = "rgba(220,85,57,0.8)";
context.moveTo(1000,350);
context.lineTo(775,270);
context.lineTo(775,420);
context.lineTo(1000,500);
context.closePath();
context.stroke();
context.fill();

//deur
context.beginPath();
context.fillStyle = "#501916";
context.moveTo(1135,455);
context.lineTo(1135,380);
context.lineTo(1105,390);
context.lineTo(1105,465);
context.closePath();
context.stroke();
context.fill();

//raam klein
context.beginPath();
context.fillStyle = "rgb(172,216,230)";
context.moveTo(1035,410);
context.lineTo(1080,395);
context.lineTo(1080,445);
context.lineTo(1035,460);
context.closePath();
context.stroke();
context.fill();

//hori-lijn in raam
context.beginPath();
context.moveTo(1058,403);
context.lineTo(1058,453);
context.closePath();
context.stroke();

//verti-lijn in raam
context.beginPath();
context.moveTo(1080,420);
context.lineTo(1035,435);
context.closePath();
context.stroke();

//raam lange muur
context.beginPath();
context.fillStyle = "rgb(172,216,230)";
context.moveTo(970,405);
context.lineTo(970,455);
context.lineTo(930,440);
context.lineTo(930,390);
context.closePath();
context.stroke();
context.fill();