var Field = {};
Field.canvas = document.getElementById("Field");
Field.ctx = Field.canvas.getContext("2d");

Field.gridColor = '#fff';


// Field.ctx.canvas.width = Common.clientWidth;   //на всю ширину эрана
// Field.ctx.canvas.height = Common.clientHeight;
Field.ctx.canvas.width = Common.cell.size * Common.cell.x + 1;
Field.ctx.canvas.height = Common.cell.size * Common.cell.y + 1;
Field.ctx.translate(0.5, 0.5);

Field.drawGrid = function(){
  Field.ctx.strokeStyle = Field.gridColor;
  Field.ctx.lineWidth = 0.1;
  for (i = 0; i < Common.cell.x+1; i++){
    Field.ctx.beginPath();
    Field.ctx.moveTo(i * Common.cell.size, 0);
    Field.ctx.lineTo(i * Common.cell.size, Common.cell.size * Common.cell.y);
    Field.ctx.stroke();
    Field.ctx.closePath();
  }
  for (i = 0; i < Common.cell.y + 1; i++){
    Field.ctx.beginPath();
    Field.ctx.moveTo(0, i * Common.cell.size);
    Field.ctx.lineTo(Common.cell.x * Common.cell.size, i * Common.cell.size);
    Field.ctx.stroke();
    Field.ctx.closePath();
  }
}
Field.drawGrid();