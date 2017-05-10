var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];//果实的x y 坐标
	this.y = [];
	this.orange = new Image();//黄色果实
	this.blue = new Image();//蓝色果实
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0 ; i < this.num; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.born(i);//初始化时让所有的果实出生
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
	
}
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num ; i++) {
		//draw
		//find an ane,grow,fly up
		ctx2.drawImage(this.orange, this.x[i], this.y[i]);
	}
}
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
}
// fuitObj.prototype.update = function(){
// 	var num = 0;
// 	for(var i = 0; i < this.num; i++){
// 		if(this.alive[i])
// 			num++;
// 	}
// }


