
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
//landscape right
let alpha : number = 0;
let beta : number = 90;
let gamma : number = 0;

let points : number = 0;

canvas.width = window.innerWidth/1.01;
canvas.height = window.innerHeight/1.2;

const x = canvas.width;
const y = canvas.height;

const ball = {
    x: (x/2),
    y: (y/2),
    radius: 20,
    color: "black"
}
let pickableNumber : number = x/10;

function onDeviceOrientationChange(event) {
    let absolute = event.absolute;
    this.alpha    = event.alpha;
    this.beta     = event.beta;
    this.gamma    = event.gamma;
    console.log(event.alpha, event.beta, event.gamma);
}
function animate(): void {
    // obliczenia, zmiana położenia
    let calcA : number = 0 - alpha;
    let calcB : number = 90 - beta;
    let calcC : number = 0 - gamma;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const pickup of listOfPickups) 
    {
        drawPickups(pickup.x, pickup.y, pickup.radius, pickup.color);   
    }
    drawPlayer(calcA, calcB, calcC);

    window.requestAnimationFrame(animate)
}
function drawPlayer(a : number, b : number, c : number)
{
    context.beginPath();
    context.arc(ball.x + a, ball.y + b , ball.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = ball.color;
    context.fill();
    collision(ball.x + a, ball.y + b, c);
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
function mapSize(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let listOfPickups: Pickups[] = [];
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
    
    
}
function collision(a : number, b : number, c : number)
{
    //let i: number = 0;
    for (const pickup of listOfPickups) 
    {
        if(pickup.color != "yellow")  
        { 
            //i++;
            let dx : number = a - pickup.x;
            let dy : number = b - pickup.y;
            let distance : number = Math.sqrt(dx * dx + dy * dy);
            if(distance < (ball.radius + pickup.radius))
            {
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