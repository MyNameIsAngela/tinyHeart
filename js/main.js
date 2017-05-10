var can1;//定义两个canvas
var can2;

var ctx1;//定义两个canvas场景
var ctx2;

//获取canvas的尺寸
var canWidth;
var canHeight;

// 由于gameloop中requestAnimFrame帧间隔不固定，因此设定以下变量
var lastTime;//上一帧执行时间
var deltaTime;//两帧间隔时间差

var bgPic = new Image();//存储背景图片

var ane;
var fruit;
var mom;

document.body.onload = game;//body 加载完成后，将game作为所有js脚本的入口
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init(){
	//获得canvas context
	can1 = document.getElementById("canvas1");//前面画布，绘制小鱼，小鱼，浮游生物，成绩值，gameover 
	ctx1 = can1.getContext('2d');//画笔  ！！！注意此处为getContext('2d')，而不是getContext()，之后了解原因
	can2 = document.getElementById("canvas2");//后面画布，绘制蓝色背景，海葵，海葵上产生的果实
	ctx2 = can2.getContext('2d');

	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

}
function gameloop(){//让游戏循环，如小鱼要不断的移动，需要每一帧的位移，位移不断相加，产生移动效果
	//requestAnimFrame为一个API  
	//可以智能计算，当前绘制完成之后，根据机器性能来确定，间隔多长时间来绘制下一帧 
	//但也有会导致 frame per second = fps 帧与帧之间的间隔不固定
	//setInterval，setTimeout也能完成，但是要设定具体时间，若时间到了还没完成绘制就产生问题了
	//requestAnimFrame 在不同的浏览器上要进行配适，此处调用已配适好的文件 commonFunctions.js
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);	//将前一帧的内容清空，绘制新的
	mom.draw();
}







