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
