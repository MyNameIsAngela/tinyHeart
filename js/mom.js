//大鱼脚本
var momObj = function(){
	this.x;//大鱼的坐标位置
	this.y;
	this.angle;//大鱼跟随鼠标旋转的角度
	this.bigEye = new Image(); //大鱼的眼睛、身体、尾巴图片
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angel = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function(){
	//lerp x,y 使得一个值趋向于目标值 lerpDistance(目标值，当前值，速度) 函数在commonFunction.js中
	this.x = lerpDistance(mx, this.x, 0.9);
	this.y = lerpDistance(my, this.y, 0.9);

	//delta angle  
	//Math.atan2(y,x) y 大鱼与鼠标之间的角度差
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;//大鱼与鼠标之间的角度差

	//lerp angle 让大鱼的角度趋向于鼠标的角度
	this.angel = lerpAngle(beta, this.angel, 0.7);


	ctx1.save(); //该样式属性仅适用于大鱼，所以存储使用范围
	ctx1.translate(this.x, this.y); //将大鱼坐标位置this.x this.y 设置为原点
	ctx1.rotate(this.angel);
	ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);//尾巴向右位移30
	ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5); //将图片绘制到中心点
	ctx1.restore();
	}