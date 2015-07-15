var S = {}; //S
S.canvas = document.getElementById("Scene");
S.ctx = S.canvas.getContext("2d");
S.dragObject = null;

S.gridColor = '#f00';
S.lineTop = 400;


S.ctx.canvas.width = 800;
S.ctx.canvas.height = 500;


S.clear = function(){
  this.ctx.save();
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.restore();
};
S.drawBG = function(){
  S.clear();
  S.ctx.drawImage(resources.get("./img/bg.jpg"),0,0);
  // S.ctx.beginPath();
  // S.ctx.moveTo(0,S.lineTop-2);
  // S.ctx.lineTo(1800,S.lineTop-2);
  // S.ctx.stroke();
}

S.dragTranslX = 0;
S.dragOldX = 0;





// S.canvas.addEventListener("wheel",onWheel,false);
function onWheel(e) {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  S.ctx.scale(1+Math.round(delta)/5000, 1+Math.round(delta)/5000);
  S.drawBG();
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
resources.onReady(S.drawBG);