
/*gameType :: 1 for players, 0 for computer



*/
let currentPlayer : string[] = ['X', 'O'];
let turnNum : number = 0;

class Cell
{
    private _value : string;
    constructor(value : string)
    {
        this._value = value;
    }

    
    get value() : string{
        return this._value;
    }
    set value(value : string){
        this._value = value;
    }

    


}
class Board
{
    cells : Cell[] = [];

    Placevalue(index : number)
    {
        let value : string = currentPlayer[turnNum % 2];
        document.getElementById("cell" + index).innerHTML = value; 
        this.cells[index].value = value;
        turnNum++;
        console.log(this.cells);


    }
    CreateBoard()
    {
        let cellContainer : HTMLElement =
            document.getElementById("cellContainer");

        cellContainer.innerHTML = "";
        
        
        
        for(let i:number = 0; i < 9; ++i)
        {
            this.cells[this.cells.length] = new Cell(i.toString());

            cellContainer.innerHTML +=
            ("<div id=\"cell"+ i +
            "\" class=\"valueleCell\">" + this.cells[i].value +
            "</div>");
            
            
        }
        for(let i:number = 0; i < 9; i++)
        {
            let valueId = document.getElementById("cell" + i);
            valueId.addEventListener("click",(e:Event) => {
                this.Placevalue(i);
                this.CurrentTurn();
                this.StillRunning();
                
            });
        }
        console.log(this.cells);
    }
    StillRunning()
    {
        
        //HORIZONTAL CHECKING
        if(((this.cells[0].value == this.cells[3].value) &&
            (this.cells[3].value  == this.cells[6].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O"))
            {
                //code here
            }
        else if(((this.cells[1].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[7].value)) &&
            (this.cells[1].value == "X" || this.cells[1].value == "O"))
            {
                //code here   
            }
        else if(((this.cells[2].value == this.cells[5].value) &&
            (this.cells[5].value  == this.cells[8].value)) &&
            (this.cells[2].value == "X" || this.cells[2].value == "O"))
            {
                //code here
            }
        //VERTICAL CHECKING
           
        if(((this.cells[0].value == this.cells[1].value) &&
            (this.cells[1].value  == this.cells[2].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O"))
            {
                //code here            
            }
        else if(((this.cells[3].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[5].value)) &&
            (this.cells[3].value == "X" || this.cells[3].value == "O"))
            {
                 //code here   
            }
        else if(((this.cells[6].value == this.cells[7].value) &&
            (this.cells[7].value  == this.cells[8].value)) &&
            (this.cells[6].value == "X" || this.cells[6].value == "O"))
            {
                //code here
            }

         //DIAGONAL CHECKING
         if(((this.cells[0].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[8].value)) &&
            (this.cells[0].value == "X" || this.cells[0].value == "O"))
            {
                console.log(this.cells[0].value + " Wins")
                alert(this.cells[1].value + " Wins diagonal")
            }
        else if(((this.cells[2].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[6].value)) &&
            (this.cells[2].value == "X" || this.cells[2].value == "O"))
            {
                console.log(this.cells[2].value + " Wins")
                alert(this.cells[2].value + " Wins diagonal")
            }
    }
    
    ResetGame()
    {
        this.CreateBoard();
        turnNum = 0;
    }
    CurrentTurn()
    {
        if((turnNum % 2) == 0)
            document.getElementById("turn").innerHTML = "<p id=\"cross\">X</p>";
        else
            document.getElementById("turn").innerHTML = "<p id=\"circle\">O</p>";            

    }

    StartGame()
    {}
}
window.onload = () => 
{
    let playBoard : Board = new Board;
    playBoard.CreateBoard();
    //console.log("current player is:" + playBoard.currentPlayer)
    playBoard.StartGame();
    playBoard.CurrentTurn();
    
    let reset: HTMLElement = document.getElementById("reset");
    reset.onclick = (e) => {playBoard.ResetGame();}


}
