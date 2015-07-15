function distance(x1, y1, x2, y2) { // Подсчет дистанции по теореме Пифагора
  return Math.floor(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
}
function mouseMove(e) {
    Common.mouseX = Math.round(e.clientX);
    Common.mouseY = Math.round(e.clientY);
    document.getElementById("mxx").value = e.clientX;
    document.getElementById("myy").value = e.clientY;
}
function mouseClickUnit() {
	var num = Foe.foeBlock(true);
	console.log(num);
}