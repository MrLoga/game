var Unit = {};
Unit.tower = {
	"f1": {name:"F1", src: "t1.png", range: 150, power: 10, speed: 200}
};

function UnitObj(id) {
  var obj=Unit.tower[id];
  this.name = obj.name;
  var pic = new Image();
  pic.src = obj.src;
  this.img = pic;
  this.speed = obj.speed;
  this.x = Level.scene1.start[0];
  this.y = Level.scene1.start[1];
  this.Xshift = 1;
  this.Yshift = 0;
}