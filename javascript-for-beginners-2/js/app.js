const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;

const lineWidth = document.querySelector("#line-width");

const color = document.querySelector("#color");

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineWidth.value;
// optional: 경우에 따라 활성화 하는게 퍼포먼스 상 이득일 수도 아닐 수도 있다고 함
// ctx.canvas.willReadFrequently = true;

let drawHistory = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
let isDrawing = false;

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function drawWithCursor(event) {
    if (!isDrawing) return;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function startDraw(event) {
    if (event.buttons !== 1) return;
    isDrawing = true;
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.beginPath();
}

function endDraw() {
    isDrawing = false;
    drawHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

function outOfCanvas() {
    if (!isDrawing) return;
    endDraw();
}

function ctrlZ(event) {
    if (drawHistory.length <= 1) return;
    if (!(event.ctrlKey == true && event.key == "z")) return;
    drawHistory.pop();
    ctx.putImageData(drawHistory[drawHistory.length - 1], 0, 0);
}

canvas.addEventListener("mousemove", drawWithCursor);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseout", outOfCanvas);
lineWidth.addEventListener("change", () => ctx.lineWidth = lineWidth.value)
window.addEventListener("keydown", ctrlZ);
color.addEventListener("change", onColorChange);
