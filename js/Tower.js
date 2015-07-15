var T = {}; //Tower
T.sum = 0;
T.stock = [];

T.items = {
  "l1": {img:"./img/tower_white_m.png", x: 80},
  "r1": {img:"./img/tower_black_m.png", x: 1370}
};

T.add = function(id){
  var _this = new TowerObj(id);
  this.sum++;
  _this.id = this.sum;
  this.stock.push(_this);
}

function TowerObj(id) {
  var obj = T.items[id];
  this.img = resources.get(obj.img);
  this.x = obj.x;
  this.y = S.lineTop-175;
}
T.animate = function (){
  this.drawTower();
}



TowerObj.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.x, this.y);
};

TowerObj.prototype.update = function(num) {
  this.x += (this.Xshift * this.speed);
  this.y += (this.Yshift * this.speed);
  var FoeXCell = Math.ceil((this.x + 49) / Common.cell.size);
  var FoeYCell = Math.ceil((this.y + 49) / Common.cell.size) - 1;
  var map = Level.scene1.map[FoeYCell][FoeXCell];
};

T.drawTower = function(){
  for (var i = 0; i < this.stock.length; i++) {
    if(typeof this.stock[i] == 'object'){
      this.stock[i].draw(C.ctx);
      // this.stock[i].update(i);  
    }
  }
}
