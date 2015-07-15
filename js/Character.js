var С = {};  //Character

var C = {};
C.canvas = document.getElementById("Character");
C.ctx = C.canvas.getContext("2d");
C.ctx.canvas.width = 800;
C.ctx.canvas.height = 500;
C.stockHome = [];
C.stockFoe = [];


C.clear = function(){
  this.ctx.save();
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.restore();
};



C.add = function(id){
  var _this = new CharObj(id);
  this.sum++;
  _this.id = this.sum;
  console.log(_this);
  if(_this.side==0){
    this.stockHome.push(_this);
  }else{
    this.stockFoe.push(_this);
  }
}
// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
function CharObj(id) {
  var obj = C.items[id];
  this.id = "";
  this.dir = (obj.side==0)?1:-1;
  this.side = obj.side;
  this.status = "go";
  this.speed = (Math.random()*2)+1|0;
  this.img = resources.get(obj.img);
  this.sx = 0; //sprite x
  this.sy = obj.sy; // sprite y
  this.sw = 83; // sprite width
  this.sh = 124; // sprite height
  this.x = obj.x;
  this.y = S.lineTop-124;
  this.imgW = 83;
  this.imgH = 124;
  this.sprite = 5;
  this.spriteNow = 0;
  this.time=0;
}
C.animate = function (){
  this.drawChar();
  this.atack();
}



CharObj.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.sx, this.sy, this.sw,  this.sh, this.x, this.y, this.imgW, this.imgH);
};

CharObj.prototype.update = function() {
  this.time++;
  if(this.time > 10){
  	this.time=0;
  	if(this.status=="go"){
  		this.spriteNow++;
  	  	if(this.spriteNow>=this.sprite){
  	  		this.spriteNow=0;
  	  		this.sx = 0;
  	  	}
  	  	this.sx=this.sx+83;
  	}
  }
	this.x += (this.speed * this.dir);
};

C.collision = function(home, foe){
  if(home.x+home.imgW>=foe.x){
    home.speed = 0;
    foe.speed = 0;
    home.status = "atack";
    foe.status = "atack";
    return true;
  }else {
    home.status = "go";
    foe.status = "go";
    home.speed = 1;
    foe.speed = 1;
    return false;
  }
}

C.drawChar = function(){
  for (var i = 0; i < this.stockHome.length; i++) {
    this.stockHome[i].update();
    this.stockHome[i].draw(C.ctx);
  }
  for (var i = 0; i < this.stockFoe.length; i++) {
    this.stockFoe[i].update();
    this.stockFoe[i].draw(C.ctx);
  }
}
C.atack = function(){
  for (var h = 0; h < this.stockHome.length; h++) {
    for (var f = 0; f < this.stockFoe.length; f++) {
      if(this.collision(this.stockHome[h], this.stockFoe[f])){
        break;
      }
    }
  }
}