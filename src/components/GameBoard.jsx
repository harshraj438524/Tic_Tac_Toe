import React from 'react'
// const initialBoard=[
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]
function GameBoard({onSelectActivePlayer,afterupdatedTurns}) {
// let gameBoard=initialBoard;
//  for(const item of afterupdatedTurns){
//    const {square,currentPlayer}=item;
//    const {row,col}=square;
//    gameBoard[row][col]=currentPlayer;
//  }
 
//  function handlClick(rowIndex,colIndex){
    //      setBoard((prev)=>{
    //         const newBoard=JSON.parse(JSON.stringify(prev));
            
    //         newBoard[rowIndex][colIndex]=onSelectSymbolPlayer;
           
    //         return newBoard;
    //      })
    //      onSelectActivePlayer();
    
    //  }
  return (
    <>
    <ol id="game-board">
        {afterupdatedTurns.map((row,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>(<button key={colIndex} onClick={()=>onSelectActivePlayer(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>))}
                </ol>
            </li>
        ))}
    </ol>
    </>
  )
}

export default GameBoard