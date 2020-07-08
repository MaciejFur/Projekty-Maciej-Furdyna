function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
var currentPlayer = ['X', 'O'];
var turnNum = 0;
var xPoints = 0;
var oPoints = 0;
var Cell = /** @class */ (function () {
    function Cell(value) {
        this._selected = false;
        this._value = value;
    }
    Object.defineProperty(Cell.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._selected == false) {
                this._value = value;
                this._selected = true;
            }
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
        this.cells[index].value = value;
        document.getElementById("cell" + index).innerHTML = this.cells[index].value;
        turnNum++;
        console.log(this.cells);
        var iterable = 0;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var i = _a[_i];
            if ((i.value == "X") || (i.value == "O"))
                iterable++;
            if (iterable == 9)
                this.NextTurn();
            console.log(iterable);
        }
    };
    Board.prototype.CreateBoard = function () {
        var _this = this;
        var cellContainer = document.getElementById("cellContainer");
        cellContainer.innerHTML = "";
        this.cells = [];
        for (var i = 0; i < 9; ++i) {
            this.cells[this.cells.length] = new Cell(i.toString());
            cellContainer.innerHTML +=
                ("<div id=\"cell" + i +
                    "\" class=\"valueleCell\"><span>" + (parseInt(this.cells[i].value) + 1) +
                    "</span></div>");
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
            (this.cells[3].value == this.cells[6].value))) {
            if (this.cells[0].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        else if (((this.cells[1].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[7].value))) {
            if (this.cells[1].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        else if (((this.cells[2].value == this.cells[5].value) &&
            (this.cells[5].value == this.cells[8].value))) {
            if (this.cells[2].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        //VERTICAL CHECKING
        if (((this.cells[0].value == this.cells[1].value) &&
            (this.cells[1].value == this.cells[2].value))) {
            if (this.cells[0].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        else if (((this.cells[3].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[5].value))) {
            if (this.cells[3].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        else if (((this.cells[6].value == this.cells[7].value) &&
            (this.cells[7].value == this.cells[8].value))) {
            if (this.cells[6].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        //DIAGONAL CHECKING
        if (((this.cells[0].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[8].value))) {
            if (this.cells[0].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        else if (((this.cells[2].value == this.cells[4].value) &&
            (this.cells[4].value == this.cells[6].value))) {
            if (this.cells[2].value == "X") {
                document.getElementById("xPoints").innerHTML = (++xPoints).toString();
            }
            else {
                document.getElementById("oPoints").innerHTML = (++oPoints).toString();
            }
            this.NextTurn();
        }
        console.log(xPoints, oPoints);
    };
    Board.prototype.ResetGame = function () {
        this.CreateBoard();
        turnNum = 0;
        xPoints = 0;
        oPoints = 0;
        document.getElementById("xPoints").innerHTML = (xPoints).toString();
        document.getElementById("oPoints").innerHTML = (oPoints).toString();
    };
    Board.prototype.NextTurn = function () {
        this.CreateBoard();
    };
    Board.prototype.CurrentTurn = function () {
        if ((turnNum % 2) == 0) {
            document.getElementById("turn").innerHTML = "<p id=\"cross\">X</p>";
            document.getElementById("cross").style.background = "#afa";
            setTimeout(function () {
                document.getElementById("cross").
                    style.background = "#efe";
            }, 150);
        }
        else {
            document.getElementById("turn").innerHTML = "<p id=\"circle\">O</p>";
            document.getElementById("circle").style.background = "#faa";
            setTimeout(function () {
                document.getElementById("circle").
                    style.background = "#fee";
            }, 150);
        }
    };
    return Board;
}());
window.onload = function () {
    var playBoard = new Board;
    playBoard.CreateBoard();
    playBoard.CurrentTurn();
    var reset = document.getElementById("reset");
    reset.onclick = function (e) { playBoard.ResetGame(); };
    document.addEventListener("keypress", function (event) {
        var keysArray = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58];
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            var keyIndex = keysArray.indexOf(event.keyCode);
            var value = currentPlayer[turnNum % 2];
            playBoard.cells[keyIndex].value = value;
            document.getElementById("cell" + keyIndex).innerHTML = playBoard.cells[keyIndex].value;
            turnNum++;
            console.log(keyIndex);
            playBoard.CurrentTurn();
            playBoard.StillRunning();
        }
    });
};
//# sourceMappingURL=main.js.map