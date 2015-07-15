var Common = {}; // Общая инфа
Common.body = document.body;
Common.clientWidth = document.documentElement.clientWidth;
Common.clientHeight = document.documentElement.clientHeight;

Common.mouseX = 0;
Common.mouseY = 0;
Common.log = 0;

function init(){
	S.drawBG();
	animate();
	T.add("r1");
	T.add("l1");
	C.add("l1");
	C.add("r1");
	T.animate();
};

resources.load([
    './img/bg.jpg',
    './img/tower_black_m.png',
    './img/tower_white_m.png',
    './img/char_go.png'
]);





var Animate = {};
Animate.log = document.getElementById("Alog");

if (!window.requestAnimationFrame){
  window.requestAnimationFrame = (function(){
    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback, element){
      window.setTimeout(callback, 1000/60);
    };
  })();
}
var i = 0;

function animate() {
  i++;
  Animate.log.value = i;
  Common.log = i;
  C.clear();
  T.animate();
  C.animate();
  requestAnimationFrame(animate);
}
resources.onReady(init);