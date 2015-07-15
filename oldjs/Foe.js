var Foe = {};
Foe.canvas = document.getElementById("Units");
Foe.ctx = Foe.canvas.getContext("2d");
Foe.stock = [];
Foe.vars = {};
Foe.vars.Timeout = 100;
Foe.vars.TimeoutI = 0;
Foe.vars.wave = 0;
Foe.vars.sum = 0;


Foe.ctx.canvas.width = Common.cell.size * Common.cell.x;
Foe.ctx.canvas.height = Common.cell.size * Common.cell.y;


Foe.animate = function (){
  this.draw();
  this.foeBlock(false);
  this.vars.TimeoutI++;
  if(this.vars.TimeoutI == this.vars.Timeout && this.vars.wave < Level.scene1.wave){
    this.vars.wave++;
    this.vars.TimeoutI = 0;
    this.add();
  }
}

Foe.foeBlock = function(rtrn){
  var xBlock = Math.round((Common.mouseX-Common.cell.size/2)/Common.cell.size);
  var yBlock = Math.round((Common.mouseY-Common.cell.size/2)/Common.cell.size);
  var x = Math.round((Common.mouseX-Common.cell.size/2)/Common.cell.size)*Common.cell.size;
  var y = Math.round((Common.mouseY-Common.cell.size/2)/Common.cell.size)*Common.cell.size;
  this.ctx.beginPath();
  this.ctx.strokeStyle="red";
  this.ctx.rect(x,y,Common.cell.size,Common.cell.size);
  this.ctx.stroke();
  if(rtrn){
    return [xBlock,yBlock]
  }
}
Foe.add = function(){
  var foe = new FoeObj();
  Foe.vars.sum++;
  foe.id = Foe.vars.sum;
  this.stock.push(foe);
  this.vars.sum++;
}

function FoeObj(name, img) {
  this.name = name;
  var pic = new Image();
  pic.src = 'img/1.png';
  this.img = pic;
  this.speed = Math.random()*(7-1)+1;
  this.x = Level.scene1.start[0];
  this.y = Level.scene1.start[1];
  this.Xshift = 1;
  this.Yshift = 0;
}

FoeObj.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.x, this.y);
};

FoeObj.prototype.update = function(num) {
  this.x += (this.Xshift * this.speed);
  this.y += (this.Yshift * this.speed);
  var FoeXCell = Math.ceil((this.x + 49) / Common.cell.size);
  var FoeYCell = Math.ceil((this.y + 49) / Common.cell.size) - 1;
  var map = Level.scene1.map[FoeYCell][FoeXCell];
  switch(map){
    case 1:
      this.Xshift = 0;
      this.Yshift = -1;   
      break;
    case 2:
      this.Xshift = 1;
      this.Yshift = 0;   
      break;
    case 3:
      this.Xshift = 0;
      this.Yshift = 1;
      break;
    case 4:
      this.Xshift = -1;
      this.Yshift = 0;   
      break;
    case 5:
      var index = Foe.stock.indexOf(this);
      Foe.stock.splice(index, 1);
      break;
  }
};

Foe.draw = function(){
  this.ctx.clearRect(0, 0, Common.cell.x * Common.cell.size, Common.cell.y * Common.cell.size);
  for (var i = 0; i < this.stock.length; i++) {
    if(typeof this.stock[i] == 'object'){
      this.stock[i].draw(this.ctx);
      this.stock[i].update(i);  
    }
  }
};


