
class Pickups {
    public x: number;
    public y: number;
    public radius: number;
    public color: string;
    public active: boolean = true;   
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
const envOrientation = {
    alpha :  0,
    beta : 90,
    gamma : 0
}
//animation values
let calcA : number = 0 - envOrientation.alpha;
let calcB : number = 90 - envOrientation.beta;
let calcC : number = 0 - envOrientation.gamma;

const displays = {
    lives: 5,
    points: 0
}

canvas.width = window.innerWidth/1.01;
canvas.height = window.innerHeight/1.2;

const x = canvas.width;
const y = canvas.height;

const ball = {
    x: (x/2),
    y: (y/2),
    radius: 20,
    color: "black",
    speed: {
        x: 0,
        y: 0,
        factor: 50
    }
}
let pickableNumber : number = x/10;

function onDeviceOrientationChange(event) {
    if(envOrientation.alpha === null)
    {    
        envOrientation.alpha = event.alpha;
        envOrientation.beta = event.beta;
        envOrientation.gamma = event.gamma;
    }
    ball.speed.x = (event.alpha-envOrientation.alpha)/ball.speed.factor
    ball.speed.y = (event.beta-envOrientation.beta)/ball.speed.factor;
    
}
function animate(): void {
    // obliczenia, zmiana położenia
    ball.y += ball.speed.y;
    ball.x += ball.speed.x;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const pickup of listOfPickups) 
    {
        drawPickups(pickup.x, pickup.y, pickup.radius, pickup.color, pickup.active);   
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
function drawPickups(x, y, radius, color, active)
{
    if(active == true)
    {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = color;
        context.fill();    
    }
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
        if(pickup.active == true )  
        { 
            //i++;
            let dx : number = a - pickup.x;
            let dy : number = b - pickup.y;
            let distance : number = Math.sqrt(dx * dx + dy * dy);
            if(distance < (ball.radius + pickup.radius))
            {
                if(pickup.radius == 15 && pickup.active == true)
                {  
                    pickup.active = false;
                    displays.points++;        
                    console.log(displays.points);
                    document.getElementById("score").innerHTML = displays.points.toString();
                }
                if(pickup.radius == 10 && pickup.active == true)
                {  
                    pickup.active = false;
                    displays.points += 5;        
                    console.log(displays.points);
                    document.getElementById("score").innerHTML = displays.points.toString();
                }
                if(pickup.radius == 30 && pickup.active == true)
                { 
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