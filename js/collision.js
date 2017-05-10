//存放碰撞检测的功能 
//判断大鱼和果实的距离
function momFruitsCollision(){
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]){
			//calculate length 
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);//计算距离的平方calLength2
			if(l < 500){
				//fruit eaten
				fruit.dead(i);
			}
		}
	}
}