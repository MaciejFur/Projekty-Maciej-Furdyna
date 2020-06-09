var currentId;
var Board = /** @class */ (function () {
    function Board() {
        this.cellBoard = [];
        this.gameRunning = true;
        this.players = ['X', 'O'];
    }
    //gameType :: 1 for players, 0 for computer
    Board.prototype.CreateBoard = function () {
        var _this = this;
        var cellContainer = document.getElementById("cellContainer");
        for (var i = 0; i < 9; ++i) {
            cellContainer.innerHTML +=
                ("<div id=\"" + i + "\" class=\"signleCell\">" + i + "</div>");
            this.cellBoard[i] = new Cell(i.toString());
        }
        var _loop_1 = function (i) {
            var value = this_1.cellBoard[i];
            var valueId = document.getElementById(value._id);
            valueId.addEventListener("click", function (e) {
                value.PlaceSign();
                _this.StillRunning();
                _this.CurrentTurn();
            });
        };
        var this_1 = this;
        for (var i = 0; i < 9; i++) {
            _loop_1(i);
        }
    };
    Board.prototype.StartGame = function () {
        if (this.currentPlayer == null) {
            this.currentPlayer =
                this.players[Math.floor(Math.random() * 2)];
        }
    };
    Board.prototype.ResetGame = function () {
        this.cellBoard = [];
        document.getElementById("cellContainer").innerHTML = "";
        this.CreateBoard();
    };
    Board.prototype.CurrentTurn = function () {
        if (this.currentPlayer == "X") {
            document.getElementById("turn").innerHTML =
                "<p id=\"cross\">X</p>";
            this.cellBoard[currentId].sign = "X";
            this.currentPlayer = "O";
        }
        else if (this.currentPlayer == "O") {
            document.getElementById("turn").innerHTML =
                "<p id=\"circle\">O</p>";
            this.cellBoard[currentId].sign = "O";
            this.currentPlayer = "X";
        }
        this.StillRunning();
    };
    Board.prototype.PlayerSelect = function () {
    };
    Board.prototype.StillRunning = function () {
        //HORIZONTAL CHECKING
        if (((this.cellBoard[0].sign == this.cellBoard[3].sign) &&
            (this.cellBoard[3].sign == this.cellBoard[6].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O")) {
            console.log(this.cellBoard[0].sign + " Wins");
            alert(this.cellBoard[0].sign + " Wins horizontal " +
                this.cellBoard[0].sign + this.cellBoard[3].sign + this.cellBoard[6].sign);
        }
        else if (((this.cellBoard[1].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign == this.cellBoard[7].sign)) &&
            (this.cellBoard[1].sign == "X" || this.cellBoard[1].sign == "O")) {
            console.log(this.cellBoard[1].sign + " Wins");
            alert(this.cellBoard[1].sign + " Wins horizontal " +
                this.cellBoard[1].sign + this.cellBoard[4].sign + this.cellBoard[7].sign);
        }
        else if (((this.cellBoard[2].sign == this.cellBoard[5].sign) &&
            (this.cellBoard[5].sign == this.cellBoard[8].sign)) &&
            (this.cellBoard[2].sign == "X" || this.cellBoard[2].sign == "O")) {
            console.log(this.cellBoard[2].sign + " Wins");
            alert(this.cellBoard[2].sign + " Wins horizontal" +
                this.cellBoard[2].sign + this.cellBoard[5].sign + this.cellBoard[8].sign);
        }
        //VERTICAL CHECKING
        if (((this.cellBoard[0].sign == this.cellBoard[1].sign) &&
            (this.cellBoard[1].sign == this.cellBoard[2].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O")) {
            console.log(this.cellBoard[0].sign + " Wins");
            alert(this.cellBoard[0].sign + " Wins vertical" +
                this.cellBoard[0].sign + this.cellBoard[1].sign + this.cellBoard[2].sign);
        }
        else if (((this.cellBoard[3].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign == this.cellBoard[5].sign)) &&
            (this.cellBoard[3].sign == "X" || this.cellBoard[3].sign == "O")) {
            console.log(this.cellBoard[3].sign + " Wins");
            alert(this.cellBoard[3].sign + " Wins vertical" +
                this.cellBoard[3].sign + this.cellBoard[4].sign + this.cellBoard[5].sign);
        }
        else if (((this.cellBoard[6].sign == this.cellBoard[7].sign) &&
            (this.cellBoard[7].sign == this.cellBoard[8].sign)) &&
            (this.cellBoard[6].sign == "X" || this.cellBoard[6].sign == "O")) {
            console.log(this.cellBoard[6].sign + " Wins");
            alert(this.cellBoard[6].sign + " Wins vertical" +
                this.cellBoard[6].sign + this.cellBoard[7].sign + this.cellBoard[8].sign);
        }
        //DIAGONAL CHECKING
        if (((this.cellBoard[0].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign == this.cellBoard[8].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O")) {
            console.log(this.cellBoard[0].sign + " Wins");
            alert(this.cellBoard[1].sign + " Wins diagonal");
        }
        else if (((this.cellBoard[2].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign == this.cellBoard[6].sign)) &&
            (this.cellBoard[2].sign == "X" || this.cellBoard[2].sign == "O")) {
            console.log(this.cellBoard[2].sign + " Wins");
            alert(this.cellBoard[2].sign + " Wins diagonal");
        }
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell(id) {
        this.id = id;
        this._id = this.id;
    }
    Object.defineProperty(Cell.prototype, "sign", {
        get: function () {
            return this._sign;
        },
        set: function (sign) {
            this._sign = sign;
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.PlaceSign = function () {
        if (this._sign != undefined) {
            currentId = parseInt(this._id);
            document.getElementById(this._id).innerHTML = this._sign;
            console.log("Current ID = " + this._id);
            console.log("Current Sign = " + this._sign);
        }
    };
    return Cell;
}());
//addEventListener('click', clickHandler);
window.onload = function () {
    var playBoard = new Board;
    playBoard.CreateBoard();
    console.log("current player is:" + playBoard.currentPlayer);
    playBoard.StartGame();
    var reset = document.getElementById("reset");
    reset.onclick = function (e) { playBoard.ResetGame(); };
    console.log(playBoard.cellBoard);
};
//# sourceMappingURL=main.js.map