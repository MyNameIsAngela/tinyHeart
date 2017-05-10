var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];//果实的x y 坐标
	this.y = [];
	this.l = [];//果实长度值，设置果实大小
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
		this.born(i);//初始化时让所有的果实出生
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
	
}
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num ; i++) {
		//draw
		//find an ane,grow,fly up
		if(this.l[i] <= 14){//果实长大到一定程度就不长了
			this.l[i] += 0.01 * deltaTime;
		}
		//ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5);//让果实长在海葵上方，去除偏移
		ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);//绘制图片尺寸
	}
}
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.l[i] = 0;
}
// fuitObj.prototype.update = function(){
// 	var num = 0;
// 	for(var i = 0; i < this.num; i++){
// 		if(this.alive[i])
// 			num++;
// 	}
// }


