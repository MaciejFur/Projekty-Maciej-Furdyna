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