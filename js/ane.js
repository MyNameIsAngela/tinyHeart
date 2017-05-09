var aneObj = function(){ //定义海葵 anemone 对象的类
this.x = [];//x轴坐标位置数组
this.len = [];//海葵长度数组
}
aneObj.prototype.num = 50; //先设定有50个海葵
aneObj.prototype.init = function(){//初始化，确定每一个海葵的位置  此处从底部画上去
	for(var i = 0; i < this.num; i++){
		this.x[i] = i * 16 + Math.random() * 20; //Math.random()返回 [0,1）之间的值
		this.len[i] = 200 + Math.random() * 50;
	}
	//console.log("ane");
}
aneObj.prototype.draw = function(){ //绘制到canvas上
	
	for(var i = 0; i < this.num; i++){
		//beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], canHeight);
		ctx2.lineTo(this.x[i], canHeight - this.len[i]);
		ctx2.lineWidth = 20;
		ctx2.lineCap = "round";
		ctx2.strokeStyle = "#3b154e";
		ctx2.stroke();
	}
}