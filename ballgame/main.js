var ball = {
    x: 40,
    y: 50,
    radius: 20
};
var hole = {
    x: 100,
    y: 100,
    radius: 20
};
function onDeviceOrientationChange(e) {
    console.log(e.alpha, e.beta, e.gamma);
}
animate();
function animate() {
    // obliczenia, zmiana położenia
    window.requestAnimationFrame(animate);
}
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;
var x = canvas.width;
var y = canvas.height;
function drawPlayer() {
    context.beginPath();
    context.arc(x / 2, y / 2, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();
}
drawPlayer();
//# sourceMappingURL=main.js.map