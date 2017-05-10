var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];//果实的x y 坐标
	this.y = [];
	this.l = [];//果实长度值，设置果实大小
	this.spd = [];//果实上飘+成长速度
	this.orange = new Image();//黄色果实
	this.blue = new Image();//蓝色果实
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0 ; i < this.num; i++){
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.005;//[0.05,0.015)
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
			if(this.l[i] <= 14){//果实长大到一定程度就不长了
				this.l[i] += this.spd[i] * deltaTime;
			}
			else{//长大后y值改动，产生上飘的效果
				this.y[i] -= this.spd[i] * 7  * deltaTime;
			}
			//ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5);//让果实长在海葵上方，去除偏移
			ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);//绘制图片尺寸
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
}
// fuitObj.prototype.update = function(){
// 	var num = 0;
// 	for(var i = 0; i < this.num; i++){
// 		if(this.alive[i])
// 			num++;
// 	}
// }


