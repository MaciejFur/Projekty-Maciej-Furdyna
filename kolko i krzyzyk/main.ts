class Board
{
    cellBoard: object[] = [];
    gameRunning : boolean = true;
    gameType : number;
    //gameType :: 1 for players, 0 for computer

    CreateBoard()
    {
        let cellContainer : HTMLElement 
        = document.getElementById("cellContainer");
            for(let i:number = 0; i < 9; ++i)
            {
                let j : number = i;
                j++;
                cellContainer.innerHTML += ("<div id=\""+ j +"\">"+ j +"</div>");
            }
    }
    CurrentTurn()
    {

    }
    PlayerSelect()
    {

    }
    StillRunning()
    {

    }

}
class Cell
{
    PlaceSign()
    {

    }
    ReturnSign()
    {
        
    }
}

window.onload = () => 
{
    let playBoard : Board = new Board;
    playBoard.CreateBoard()
}