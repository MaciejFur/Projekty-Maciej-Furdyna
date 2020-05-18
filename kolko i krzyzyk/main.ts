let currentId : number;
class Board
{
    cellBoard: Cell[] = [];
    gameRunning : boolean = true;
    gameType : number;
    players : string[] = ['X','O'];
    currentPlayer : string;
    //gameType :: 1 for players, 0 for computer

    CreateBoard()
    {
        let cellContainer : HTMLElement 
        = document.getElementById("cellContainer");
            for(let i:number = 0; i < 9; ++i)
            {
                
                cellContainer.innerHTML +=
                ("<div id=\""+ i +"\" class=\"signleCell\">"+ i +"</div>");
                
                this.cellBoard[i] = new Cell(i.toString());
            }
            for(let i:number = 0; i < 9; i++)
            {
                let value = this.cellBoard[i];
                let valueId = document.getElementById(value._id);
                valueId.addEventListener("click", (e:Event) => {
                    value.PlaceSign();
                    this.StillRunning();
                    this.CurrentTurn();
                    
                });
            }
    }
    StartGame()
    {
        if(this.currentPlayer == null)
        {
            this.currentPlayer = 
            this.players[Math.floor(Math.random()*2)];

        }
    }
    ResetGame()
    {
        this.cellBoard = [];
        document.getElementById("cellContainer").innerHTML = "";
        this.CreateBoard();
    }
    CurrentTurn()
    {
        if(this.currentPlayer == "X")
        {
            document.getElementById("turn").innerHTML =
             "<p id=\"cross\">X</p>";
            this.cellBoard[currentId].sign = "X";
            console.log("current player is:" + this.currentPlayer)            
            console.log(this.cellBoard[currentId].sign);
            this.currentPlayer = "O";

        }
        else if(this.currentPlayer == "O")
        {
            document.getElementById("turn").innerHTML =
             "<p id=\"circle\">O</p>";
             this.cellBoard[currentId].sign = "O";
             console.log("current player is:" + this.currentPlayer)  
             console.log(this.cellBoard[currentId].sign);
             this.currentPlayer = "X";

        }
        this.StillRunning();
        console.log(this.cellBoard);
    }
    PlayerSelect()
    {
        
    }
    StillRunning()
    {
        
        //HORIZONTAL CHECKING
        if(((this.cellBoard[0].sign == this.cellBoard[3].sign) &&
            (this.cellBoard[3].sign  == this.cellBoard[6].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O"))
            {
                console.log(this.cellBoard[0].sign + " Wins")
                alert(this.cellBoard[0].sign + " Wins horizontal " +
                 this.cellBoard[0].sign + this.cellBoard[3].sign +this.cellBoard[6].sign)

            }
        else if(((this.cellBoard[1].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign  == this.cellBoard[7].sign)) &&
            (this.cellBoard[1].sign == "X" || this.cellBoard[1].sign == "O"))
            {
                console.log(this.cellBoard[1].sign + " Wins")
                alert(this.cellBoard[1].sign + " Wins horizontal " +
                this.cellBoard[1].sign + this.cellBoard[4].sign + this.cellBoard[7].sign)
            }
        else if(((this.cellBoard[2].sign == this.cellBoard[5].sign) &&
            (this.cellBoard[5].sign  == this.cellBoard[8].sign)) &&
            (this.cellBoard[2].sign == "X" || this.cellBoard[2].sign == "O"))
            {
                console.log(this.cellBoard[2].sign + " Wins")
                alert(this.cellBoard[2].sign + " Wins horizontal" +
                this.cellBoard[2].sign + this.cellBoard[5].sign + this.cellBoard[8].sign)
            }
        //VERTICAL CHECKING
           
        if(((this.cellBoard[0].sign == this.cellBoard[1].sign) &&
            (this.cellBoard[1].sign  == this.cellBoard[2].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O"))
            {
                console.log(this.cellBoard[0].sign + " Wins")
                alert(this.cellBoard[0].sign + " Wins vertical" +
                this.cellBoard[0].sign + this.cellBoard[1].sign + this.cellBoard[2].sign)
            }
        else if(((this.cellBoard[3].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign  == this.cellBoard[5].sign)) &&
            (this.cellBoard[3].sign == "X" || this.cellBoard[3].sign == "O"))
            {
                console.log(this.cellBoard[3].sign + " Wins")
                alert(this.cellBoard[3].sign + " Wins vertical" +
                this.cellBoard[3].sign + this.cellBoard[4].sign + this.cellBoard[5].sign)
            }
        else if(((this.cellBoard[6].sign == this.cellBoard[7].sign) &&
            (this.cellBoard[7].sign  == this.cellBoard[8].sign)) &&
            (this.cellBoard[6].sign == "X" || this.cellBoard[6].sign == "O"))
            {
                console.log(this.cellBoard[6].sign + " Wins")
                alert(this.cellBoard[6].sign + " Wins vertical" +
                this.cellBoard[6].sign + this.cellBoard[7].sign + this.cellBoard[8].sign)
            }

         //DIAGONAL CHECKING
         if(((this.cellBoard[0].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign  == this.cellBoard[8].sign)) &&
            (this.cellBoard[0].sign == "X" || this.cellBoard[0].sign == "O"))
            {
                console.log(this.cellBoard[0].sign + " Wins")
                alert(this.cellBoard[1].sign + " Wins diagonal")
            }
        else if(((this.cellBoard[2].sign == this.cellBoard[4].sign) &&
            (this.cellBoard[4].sign  == this.cellBoard[6].sign)) &&
            (this.cellBoard[2].sign == "X" || this.cellBoard[2].sign == "O"))
            {
                console.log(this.cellBoard[2].sign + " Wins")
                alert(this.cellBoard[2].sign + " Wins diagonal")
            }
    }

}
class Cell
{    
    constructor(private id : string)
    {
        this._id = this.id;
    }
    _id :string;
    private _sign: string;
    get sign() : string
    {
        return this._sign;
    }
    set sign(sign : string)
    {
        this._sign = sign;
    }
    PlaceSign()
    {
        if(this._sign != undefined)
        {   
            currentId = parseInt(this._id);
            document.getElementById(this._id).innerHTML = this._sign;
            
            console.log("Current ID = " + this._id);
            console.log("Current Sign = " + this._sign);
        }   
    }
    
}
//addEventListener('click', clickHandler);
window.onload = () => 
{
    let playBoard : Board = new Board;
    playBoard.CreateBoard();
    console.log("current player is:" + playBoard.currentPlayer)
    playBoard.StartGame();
    
    let reset: HTMLElement = document.getElementById("reset");
    reset.onclick = (e) => {playBoard.ResetGame();}
    console.log(playBoard.cellBoard)
}