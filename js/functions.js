function distance(x1, y1, x2, y2) {
  return Math.floor(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
}


function mouseMove(e) {
    Common.mouseX = Math.round(e.clientX);
    Common.mouseY = Math.round(e.clientY);
    document.getElementById("mxx").value = e.clientX;
    document.getElementById("myy").value = e.clientY;
    if(S.dragObject){
    	var x = Common.mouseX-S.dragOldX;
    	if((S.dragTranslX+x)<-800){x=-S.dragTranslX; return false;}
    	if((S.dragTranslX+x)>0){x=-S.dragTranslX; return false;}
    	S.ctx.translate(x, 0);
    	C.ctx.translate(x, 0);
    	S.dragTranslX+=x;
    	T.drawTower();
    	S.drawBG();
    	S.dragOldX = Common.mouseX;
    }
}
function mouseClickUnit() {
}



C.canvas.onmousedown = function(e){
    S.dragObject = this;
    S.dragOldX = Common.mouseX;
    return false;
}
document.onmouseup = function() {
    S.dragObject = null;
}
