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
//landscape right
var alpha = 0;
var beta = 90;
var gamma = 0;
var points = 0;
canvas.width = window.innerWidth / 1.01;
canvas.height = window.innerHeight / 1.2;
var x = canvas.width;
var y = canvas.height;
var ball = {
    x: (x / 2),
    y: (y / 2),
    radius: 20,
    color: "black"
};
var pickableNumber = x / 10;
function onDeviceOrientationChange(event) {
    var absolute = event.absolute;
    this.alpha = event.alpha;
    this.beta = event.beta;
    this.gamma = event.gamma;
    console.log(event.alpha, event.beta, event.gamma);
}
function animate() {
    // obliczenia, zmiana położenia
    var calcA = 0 - alpha;
    var calcB = 90 - beta;
    var calcC = 0 - gamma;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, listOfPickups_1 = listOfPickups; _i < listOfPickups_1.length; _i++) {
        var pickup = listOfPickups_1[_i];
        drawPickups(pickup.x, pickup.y, pickup.radius, pickup.color);
    }
    drawPlayer(calcA, calcB, calcC);
    window.requestAnimationFrame(animate);
}
function drawPlayer(a, b, c) {
    context.beginPath();
    context.arc(ball.x + a, ball.y + b, ball.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = ball.color;
    context.fill();
    collision(ball.x + a, ball.y + b, c);
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
function mapSize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var listOfPickups = [];
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
}
function collision(a, b, c) {
    //let i: number = 0;
    for (var _i = 0, listOfPickups_2 = listOfPickups; _i < listOfPickups_2.length; _i++) {
        var pickup = listOfPickups_2[_i];
        if (pickup.color != "yellow") {
            //i++;
            var dx = a - pickup.x;
            var dy = b - pickup.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (ball.radius + pickup.radius)) {
                pickup.color = "yellow";
                points++;
                console.log(points);
            }
        }
    }
}
animate();
console.log(listOfPickups);
window.addEventListener("deviceorientation", onDeviceOrientationChange, true);
window.addEventListener("resize", resized);
//# sourceMappingURL=main.js.map