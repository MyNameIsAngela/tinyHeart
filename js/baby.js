var babyObj = function(){
	this.x;
	this.y;
	this.angel;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angel = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
	//lerp x,y
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
	
	//lerp angle
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;//大鱼与鼠标之间的角度差

	//lerp angle 让大鱼的角度趋向于鼠标的角度
	this.angel = lerpAngle(beta, this.angel, 0.7);

	//ctx1
	//translate()
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angel);
	ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23 , -this.babyTail.height * 0.5);
	ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
	ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

	ctx1.restore();
}