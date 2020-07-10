
class Pickups {
    public x: number;
    public y: number;
    public radius: number;
    public color: string;   
    constructor(x: number, 
                y: number,
                radius: number,
                color: string) 
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}
const canvas = <HTMLCanvasElement> document.getElementById("game"); 
const context = canvas.getContext("2d"); 

canvas.width = window.innerWidth /2;
canvas.height = window.innerHeight/2;

const x = canvas.width;
const y = canvas.height;

const ball = {
    x: x/2,
    y: y/2,
    radius: 20,
    color: "black"
}
let pickableNumber : number = x/10;


function onDeviceOrientationChange(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    console.log(event.alpha, event.beta, event.gamma);
}
function animate(): void {
    // obliczenia, zmiana położenia
    window.requestAnimationFrame(animate)
}
function drawPlayer()
{
    context.beginPath();
    context.arc(x/2, y/2, ball.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = ball.color;
    context.fill();
}
function drawPickups(x, y, radius, color)
{
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = color;
    context.fill();
}
function resized()
{
    /*
    canvas.width = window.innerWidth /2;
    canvas.height = window.innerHeight;
    location.reload();
    drawPlayer();
    */
    
}
drawPlayer();
function mapSize(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let listOfPickups: Pickups[] = [];
listOfPickups[0] = (new Pickups(ball.x, ball.y, ball.radius, ball.color));
for (let i = 0; i <= pickableNumber; i++)
{
    let xLocation : number = mapSize(0, x);
    let yLocation : number = mapSize(0, y);
    let objectRadius : number = 15;
    let objectColor : string = "Green";
    if (i % 10 == 0)
    {
        objectRadius = 30;
        objectColor = "Red";
    }
    if (i % 20 == 0)
    {
        
        objectRadius = 10;
        objectColor = "Blue";
    }
    listOfPickups[listOfPickups.length] = (new Pickups(xLocation, yLocation, objectRadius, objectColor));
    drawPickups(xLocation, yLocation, objectRadius, objectColor);
    
}
function playerMovement()
{
    
}
console.log(listOfPickups);
window.addEventListener("deviceorientation", onDeviceOrientationChange, true);
window.addEventListener("resize", resized);