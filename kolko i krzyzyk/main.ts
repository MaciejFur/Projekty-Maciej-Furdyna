function sleep(milliseconds) 
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let currentPlayer : string[] = ['X', 'O'];
let turnNum : number = 0;
let xPoints : number = 0;
let oPoints : number = 0;

class Cell
{
    private _value : string;
    private _selected : boolean = false;
    constructor(value : string)
    {
        this._value = value;
    }
    get value() : string{
        return this._value;
    }
    set value(value : string){
        if(this._selected == false)
        {
            this._value = value;
            this._selected = true;
        }
    }
}
class Board
{
    cells : Cell[] = [];

    Placevalue(index : number)
    {
        let value : string = currentPlayer[turnNum % 2];
        this.cells[index].value = value;
        document.getElementById("cell" + index).innerHTML = this.cells[index].value;
        turnNum++;
        console.log(this.cells);
        
        let iterable : number = 0;
        for(let i of this.cells)
        {
            if((i.value == "X") || (i.value == "O"))
                iterable++;
            if(iterable == 9)
            {
                this.StillRunning();
                this.NextTurn();
            }
            console.log(iterable);
        }
    }
    CreateBoard()
    {
        let cellContainer : HTMLElement =
            document.getElementById("cellContainer");
        
        cellContainer.innerHTML = "";
        this.cells = [];
        
        
        for(let i:number = 0; i < 9; ++i)
        {
            this.cells[this.cells.length] = new Cell(i.toString());

            cellContainer.innerHTML +=
            ("<div id=\"cell"+ i +
            "\" class=\"valueleCell\"><span>" + (parseInt(this.cells[i].value) + 1) +
            "</span></div>"); 
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
            (this.cells[3].value  == this.cells[6].value)))
            {
                if(this.cells[0].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
            
            }
        else if(((this.cells[1].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[7].value)))
            {
                if(this.cells[1].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
               
            }
        else if(((this.cells[2].value == this.cells[5].value) &&
            (this.cells[5].value  == this.cells[8].value))){
                if(this.cells[2].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
            
            }
        //VERTICAL CHECKING
           
        if(((this.cells[0].value == this.cells[1].value) &&
            (this.cells[1].value  == this.cells[2].value)))
            {
                if(this.cells[0].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
                        
            }
        else if(((this.cells[3].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[5].value)))
            {
                if(this.cells[3].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
                   
            }
        else if(((this.cells[6].value == this.cells[7].value) &&
            (this.cells[7].value  == this.cells[8].value)))
            {
                if(this.cells[6].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
            
            }

         //DIAGONAL CHECKING
         if(((this.cells[0].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[8].value)))
            {
                if(this.cells[0].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
            
            }
        else if(((this.cells[2].value == this.cells[4].value) &&
            (this.cells[4].value  == this.cells[6].value)))
            {
                if(this.cells[2].value == "X")
                {
                    document.getElementById("xPoints").innerHTML =(++xPoints).toString();
                }
                else
                {
                    document.getElementById("oPoints").innerHTML =(++oPoints).toString();
                }
                this.NextTurn();
            
            }
        console.log(xPoints , oPoints);
    }
    ResetGame()
    {
        this.CreateBoard();
        turnNum = 0;
        xPoints = 0;
        oPoints = 0;
        document.getElementById("xPoints").innerHTML =(xPoints).toString();
        document.getElementById("oPoints").innerHTML =(oPoints).toString();
    }
    NextTurn()
    {
        this.CreateBoard();
    }
    CurrentTurn()
    {
        if((turnNum % 2) == 0)
        {
            document.getElementById("turn").innerHTML = "<p id=\"cross\">X</p>";
            document.getElementById("cross").style.background = "#afa";
            setTimeout(() => { document.getElementById("cross").
            style.background = "#efe"; }, 150);
        }
        else
        {
            document.getElementById("turn").innerHTML = "<p id=\"circle\">O</p>";
            document.getElementById("circle").style.background = "#faa";
            setTimeout(() => { document.getElementById("circle").
            style.background = "#fee"; }, 150)  ;          
        }
    }
}
window.onload = () => 
{
    let playBoard : Board = new Board;
    playBoard.CreateBoard();
    playBoard.CurrentTurn();
    
    let reset: HTMLElement = document.getElementById("reset");
    reset.onclick = (e) => {playBoard.ResetGame()};
    
    document.addEventListener("keypress", function(event) {
        
        let keysArray : number[] = [49,50,51,52,53,54,55,56,57,58];
        if (event.keyCode >= 48 && event.keyCode <= 57 ) 
        {
            let keyIndex : number = keysArray.indexOf(event.keyCode)

            let value : string = currentPlayer[turnNum % 2]; 
            playBoard.cells[keyIndex].value = value;
            document.getElementById("cell" + keyIndex).innerHTML = playBoard.cells[keyIndex].value;
            turnNum++;
            console.log(keyIndex);
            
            playBoard.CurrentTurn();
            playBoard.StillRunning();
        }
      });

}