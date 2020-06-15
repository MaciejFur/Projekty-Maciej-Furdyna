const ball = {
    x: 40,
    y: 50,
    radius: 20
}
const hole = {
    x: 100,
    y: 100,
    radius: 20
}
function onDeviceOrientationChange(e: any): void 
{
    console.log(e.alpha, e.beta, e.gamma);
}
animate()
function animate(): void {
    // obliczenia, zmiana położenia
    window.requestAnimationFrame(animate)
}

const canvas = <HTMLCanvasElement> document.getElementById("game"); 
const context = canvas.getContext("2d"); 

canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;

const x = canvas.width;
const y = canvas.height;

function drawPlayer()
{
    context.beginPath();
    context.arc(x/2, y/2, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();
}

drawPlayer();