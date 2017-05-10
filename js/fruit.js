//果实脚本
var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];//果实的x 坐标
	this.y = []; //果实的y 坐标
	this.l = [];//果实长度值，设置果实大小
	this.spd = [];//果实上飘+成长速度
	this.fruitType = [];//果实类型，判断为蓝色还是黄色果实  初始化为“”空，可选值为“orange”或“blue”
	this.orange = new Image();//黄色果实
	this.blue = new Image();//蓝色果实
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0 ; i < this.num; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;//[0.03,0.02)
		this.fruitType[i] = "";
		this.born(i);//初始化时让所有的果实出生
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
	
}
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num ; i++) {
		//draw
		//find an ane,grow,fly up
		if(this.alive[i]){
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}
			else{
				var pic = this.orange;
			}
			if(this.l[i] <= 14){//果实长大到一定程度就不长了
				this.l[i] += this.spd[i] * deltaTime;
			}
			else{//长大后y值改动，产生上飘的效果
				this.y[i] -= this.spd[i] * 7  * deltaTime;
			}
			//ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5);//让果实长在海葵上方，去除偏移
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);//绘制图片尺寸
			if (this.y[i] < 10){//果实向上飘出去后，alive回到待命状态
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.l[i] = 0;
	this.alive[i] = true;

	var ran = Math.random();
	if (ran < 0.2){
		this.fruitType[i] = "blue";//orange,blue
	}
	else{
		this.fruitType[i] = "orange";
	}
}
function fruitMonitor(){//不应该让果实一开始就都出生，所以添加一个果实监视功能
	var num = 0;
	for(var i = 0;	i < fruit.num; i++){//判断当前有多少果实是活着的
		if(fruit.alive[i])
			num++;
	}
	if(num < 15){
		//send fruit
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i = 0; i < fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
// fuitObj.prototype.update = function(){
// 	var num = 0;
// 	for(var i = 0; i < this.num; i++){
// 		if(this.alive[i])
// 			num++;
// 	}
// }


