
const canvas = <HTMLCanvasElement> document.getElementById("game"); 
const context = canvas.getContext("2d"); 

canvas.width = window.innerWidth /2;
canvas.height = window.innerHeight/2;

const x = canvas.width;
const y = canvas.height;

//canvas.scale(2,2, redCircle.x, redCircle.y);

const ball = {
    x: x/2,
    y: y/2,
    radius: 20
}
let pickableNumber : number = 60;

function onDeviceOrientationChange(e: any): void 
{
    console.log(e.alpha, e.beta, e.gamma);
}
animate()
function animate(): void {
    // obliczenia, zmiana położenia
    window.requestAnimationFrame(animate)
}
function drawPlayer()
{
    context.beginPath();
    context.arc(x/2, y/2, ball.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
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
   /* canvas.width = window.innerWidth /2;
    canvas.height = window.innerHeight;
    location.reload();
    drawPlayer();*/
    
}
window.addEventListener("resize", resized);
drawPlayer();
function mapSize(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*for (let i = 0; i <= pickables; i++)
{
    if (i % 10 == 0)
    {
        drawPickups(mapSize(0, x), mapSize(0, y), 40, "red");
    }
    if (i % 20 == 0){
        drawPickups(mapSize(0, x), mapSize(0, y), 10, "blue");
    }
    else
    {
        drawPickups(mapSize(0, x), mapSize(0, y), 20, "green");
    }
}*/
let listOfPickups: Pickups[];
for (let i = 0; i <= pickableNumber; i++)
{
    if (i % 10 == 0)
    {
        drawPickups(mapSize(0, x), mapSize(0, y), 40, "red");
    }
    if (i % 20 == 0){
        drawPickups(mapSize(0, x), mapSize(0, y), 10, "blue");
    }
    else
    {
        drawPickups(mapSize(0, x), mapSize(0, y), 20, "green");
    }
}
class Pickups
{
    public color: string;
    public y: number;
    public x: number;
    public radius: number;
}
