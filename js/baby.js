var babyObj = function(){
	this.x;
	this.y;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
	//ctx1
	ctx1.drawImage(this.babyEye, this.x, this.y);
	ctx1.drawImage(this.babyBody, this.x, this.y);
	ctx1.drawImage(this.babyTail, this.x, this.y);
}