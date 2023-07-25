// CanvaJS.js

const CanvaJS = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let currentColor = "black";

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
  }

  function changeColor(newColor) {
    currentColor = newColor;
  }

  return {
    drawLine: drawLine,
    changeColor: changeColor
  };
})();
