/*gameType :: 1 for players, 0 for computer



*/
var currentPlayer = ['X', 'O'];
var turnNum = 0;
var Cell = /** @class */ (function () {
    function Cell(value) {
        this._value = value;
    }
    Object.defineProperty(Cell.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board() {
        this.cells = [];
    }
    Board.prototype.Placevalue = function (index) {
        var value = currentPlayer[turnNum % 2];
        document.getElementById("cell" + index).innerHTML = value;
        this.cells[index].value = value;
        turnNum++;
        console.log(this.cells);
    };
    Board.prototype.CreateBoard = function () {
        var _this = this;
        var cellContainer = document.getElementById("cellContainer");
        cellContainer.innerHTML = "";
        for (var i = 0; i < 9; ++i) {
            this.cells[this.cells.length] = new Cell(i.toString());
            cellContainer.innerHTML +=
                ("<div id=\"cell" + i +
                    "\" class=\"valueleCell\">" + this.cells[i].value +
                    "</div>");
        }
        var _loop_1 = function (i) {
            var valueId = document.getElementById("cell" + i);
            valueId.addEventListener("click", function (e) {
                _this.Placevalue(i);
                _this.CurrentTurn();
                _this.StillRunning();
            });
        };
        for (var i = 0; i < 9; i++) {
            _loop_1(i);
        }
        console.log(this.cells);
    };
    Board.prototype.StillRunning = function () {
        //HORIZONTAL CHECKING
        if (((this.cells[0].value == this.cells[3].value) &&
            (this.cells[3].value == this.cells[6].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O")) {
            //code here
        }
        else if (((this.cells[1].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[7].value)) &&
            (this.cells[1].value == "X" || this.cells[1].value == "O")) {
            //code here   
        }
        else if (((this.cells[2].value == this.cells[5].value) &&
            (this.cells[5].value == this.cells[8].value)) &&
            (this.cells[2].value == "X" || this.cells[2].value == "O")) {
            //code here
        }
        //VERTICAL CHECKING
        if (((this.cells[0].value == this.cells[1].value) &&
            (this.cells[1].value == this.cells[2].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O")) {
            //code here            
        }
        else if (((this.cells[3].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[5].value)) &&
            (this.cells[3].value == "X" || this.cells[3].value == "O")) {
            //code here   
        }
        else if (((this.cells[6].value == this.cells[7].value) &&
            (this.cells[7].value == this.cells[8].value)) &&
            (this.cells[6].value == "X" || this.cells[6].value == "O")) {
            //code here
        }
        //DIAGONAL CHECKING
        if (((this.cells[0].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[8].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O")) {
            console.log(this.cells[0].value + " Wins");
            alert(this.cells[1].value + " Wins diagonal");
        }
        else if (((this.cells[2].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[6].value)) &&
            (this.cells[2].value == "X" || this.cells[2].value == "O")) {
            console.log(this.cells[2].value + " Wins");
            alert(this.cells[2].value + " Wins diagonal");
        }
    };
    Board.prototype.ResetGame = function () {
        this.CreateBoard();
        turnNum = 0;
    };
    Board.prototype.CurrentTurn = function () {
        if ((turnNum % 2) == 0)
            document.getElementById("turn").innerHTML = "<p id=\"cross\">X</p>";
        else
            document.getElementById("turn").innerHTML = "<p id=\"circle\">O</p>";
    };
    Board.prototype.StartGame = function () { };
    return Board;
}());
window.onload = function () {
    var playBoard = new Board;
    playBoard.CreateBoard();
    //console.log("current player is:" + playBoard.currentPlayer)
    playBoard.StartGame();
    playBoard.CurrentTurn();
    var reset = document.getElementById("reset");
    reset.onclick = function (e) { playBoard.ResetGame(); };
};
//# sourceMappingURL=main.js.map