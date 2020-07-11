var Pickups = /** @class */ (function () {
    function Pickups(x, y, radius, color) {
        this.active = true;
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
var envOrientation = {
    alpha: 0,
    beta: 90,
    gamma: 0
};
//animation values
var calcA = 0 - envOrientation.alpha;
var calcB = 90 - envOrientation.beta;
var calcC = 0 - envOrientation.gamma;
var displays = {
    lives: 5,
    points: 0
};
canvas.width = window.innerWidth / 1.01;
canvas.height = window.innerHeight / 1.2;
var x = canvas.width;
var y = canvas.height;
var ball = {
    x: (x / 2),
    y: (y / 2),
    radius: 20,
    color: "black",
    speed: {
        x: 0,
        y: 0,
        factor: 50
    }
};
var pickableNumber = x / 10;
function onDeviceOrientationChange(event) {
    if (envOrientation.alpha === null) {
        envOrientation.alpha = event.alpha;
        envOrientation.beta = event.beta;
        envOrientation.gamma = event.gamma;
    }
    ball.speed.x = (event.alpha - envOrientation.alpha) / ball.speed.factor;
    ball.speed.y = (event.beta - envOrientation.beta) / ball.speed.factor;
}
function animate() {
    // obliczenia, zmiana położenia
    ball.y += ball.speed.y;
    ball.x += ball.speed.x;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, listOfPickups_1 = listOfPickups; _i < listOfPickups_1.length; _i++) {
        var pickup = listOfPickups_1[_i];
        drawPickups(pickup.x, pickup.y, pickup.radius, pickup.color, pickup.active);
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
function drawPickups(x, y, radius, color, active) {
    if (active == true) {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = color;
        context.fill();
    }
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
        if (pickup.active == true) {
            //i++;
            var dx = a - pickup.x;
            var dy = b - pickup.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (ball.radius + pickup.radius)) {
                if (pickup.radius == 15 && pickup.active == true) {
                    pickup.active = false;
                    displays.points++;
                    console.log(displays.points);
                    document.getElementById("score").innerHTML = displays.points.toString();
                }
                if (pickup.radius == 10 && pickup.active == true) {
                    pickup.active = false;
                    displays.points += 5;
                    console.log(displays.points);
                    document.getElementById("score").innerHTML = displays.points.toString();
                }
                if (pickup.radius == 30 && pickup.active == true) {
                    pickup.active = false;
                    displays.lives--;
                    console.log(displays.lives);
                    document.getElementById("lives").innerHTML = displays.lives.toString();
                }
            }
        }
    }
}
animate();
document.getElementById("score").innerHTML = displays.points.toString();
document.getElementById("lives").innerHTML = displays.lives.toString();
console.log(listOfPickups);
window.addEventListener("deviceorientation", onDeviceOrientationChange, true);
window.addEventListener("resize", resized);
//# sourceMappingURL=main.js.map