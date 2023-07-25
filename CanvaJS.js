// CanvaJS.js

const CanvaJS = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let currentColor = "black";
  let lineWidth = 2;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function changeColor(newColor) {
    currentColor = newColor;
  }

  function setLineWidth(newWidth) {
    lineWidth = newWidth;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function startDrawing(x, y) {
    isDrawing = true;
    lastX = x;
    lastY = y;
  }

  function draw(x, y) {
    if (isDrawing) {
      drawLine(lastX, lastY, x, y);
      lastX = x;
      lastY = y;
    }
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function enableDrawing() {
    canvas.addEventListener("mousedown", function(e) {
      startDrawing(e.clientX, e.clientY);
    });
    canvas.addEventListener("mousemove", function(e) {
      draw(e.clientX, e.clientY);
    });
    canvas.addEventListener("mouseup", function() {
      stopDrawing();
    });
    canvas.addEventListener("mouseleave", function() {
      stopDrawing();
    });
  }

  return {
    drawLine: drawLine,
    changeColor: changeColor,
    setLineWidth: setLineWidth,
    clearCanvas: clearCanvas,
    enableDrawing: enableDrawing
  };
})();
