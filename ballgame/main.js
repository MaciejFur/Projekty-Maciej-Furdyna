var Pickups = /** @class */ (function () {
    function Pickups(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    return Pickups;
}());
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
var x = canvas.width;
var y = canvas.height;
var ball = {
    x: x / 2,
    y: y / 2,
    radius: 20,
    color: "black"
};
var pickableNumber = x / 10;
function onDeviceOrientationChange(e) {
    console.log(e.alpha, e.beta, e.gamma);
}
animate();
function animate() {
    // obliczenia, zmiana położenia
    window.requestAnimationFrame(animate);
}
function drawPlayer() {
    context.beginPath();
    context.arc(x / 2, y / 2, ball.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = ball.color;
    context.fill();
}
function drawPickups(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = color;
    context.fill();
}
function resized() {
    /*
    canvas.width = window.innerWidth /2;
    canvas.height = window.innerHeight;
    location.reload();
    drawPlayer();
    */
}
window.addEventListener("resize", resized);
drawPlayer();
function mapSize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var listOfPickups = [];
listOfPickups[0] = (new Pickups(ball.x, ball.y, ball.radius, ball.color));
for (var i = 0; i <= pickableNumber; i++) {
    var xLocation = mapSize(0, x);
    var yLocation = mapSize(0, y);
    var objectRadius = 15;
    var objectColor = "Green";
    if (i % 10 == 0) {
        objectRadius = 30;
        objectColor = "Red";
    }
    if (i % 20 == 0) {
        objectRadius = 10;
        objectColor = "Blue";
    }
    listOfPickups[listOfPickups.length] = (new Pickups(xLocation, yLocation, objectRadius, objectColor));
    drawPickups(xLocation, yLocation, objectRadius, objectColor);
}
console.log(listOfPickups);
//# sourceMappingURL=main.js.map