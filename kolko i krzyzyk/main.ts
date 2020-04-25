let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let players = ['X', 'O'];

let currentPlayer;
let available = [];

function setup() {
    createCanvas(400, 400);
    frameRate(1);
    currentPlayer = floor(Math.random(players))
}
function draw() {
    background(220);
    let w = width / 3;
    let h = height / 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = board[i][j];
            textSize(32);
            if (spot == player1) {
                noFill()
                elipseMode(CORNER);
                elipse(x,y,w);
            }
            else if (spot == player2) {
                line(x,y,x + w,y + h)
                line(x + w,y,x,y + h)
            }
            text(spot, x, y);
        }
    }
}