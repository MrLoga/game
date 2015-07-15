var Animate = {};
Animate.log = document.getElementById("Alog");


if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = ( function() {
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
  Foe.animate();
  // if(Foe.stock.length){
    requestAnimationFrame(animate);
  // }else{
  //   Foe.animate();
  //   window.setTimeout(animate, 1000);
  // }
}
animate();