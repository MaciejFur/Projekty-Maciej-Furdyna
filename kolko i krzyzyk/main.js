var Board = /** @class */ (function () {
    function Board() {
        this.cellBoard = [];
        this.gameRunning = true;
    }
    //gameType :: 1 for players, 0 for computer
    Board.prototype.CreateBoard = function () {
        var cellContainer = document.getElementById("cellContainer");
        for (var i = 0; i < 9; ++i) {
            var j = i;
            j++;
            cellContainer.innerHTML += ("<div id=\"" + j + "\">" + j + "</div>");
        }
    };
    Board.prototype.CurrentTurn = function () {
    };
    Board.prototype.PlayerSelect = function () {
    };
    Board.prototype.StillRunning = function () {
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell() {
    }
    Cell.prototype.PlaceSign = function () {
    };
    Cell.prototype.ReturnSign = function () {
    };
    return Cell;
}());
window.onload = function () {
    var playBoard = new Board;
    playBoard.CreateBoard();
};
