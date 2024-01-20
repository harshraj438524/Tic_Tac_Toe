import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import Gameover from "./components/Gameover";


const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {
  const [turns, setturns] = useState([]);
  const [playerName, setplayerName] = useState({
   'X':'player1',
   'O':'player2'
  });

  function onHandleNameChange(symbol,playerName){
    setplayerName((prev)=>{
      return ({...prev,[symbol]:playerName})
    });
  }
  
let gameBoard=JSON.parse(JSON.stringify(initialBoard));  

 for(const item of turns){
   const {square,currentPlayer}=item;
   const {row,col}=square;
   gameBoard[row][col]=currentPlayer;
 }


let Winner=null;
for(const item of WINNING_COMBINATIONS){
  const firstValue=gameBoard[item[0].row][item[0].column];
  const secondValue=gameBoard[item[1].row][item[1].column];
  const thirdValue=gameBoard[item[2].row][item[2].column];
  if(firstValue&&firstValue==secondValue&&firstValue==thirdValue){
    Winner=playerName[firstValue];
  }
}


let isDraw=false;
if(turns.length===9&&Winner===null){
 isDraw=true;
}


  let activePlayer='X';
  if(turns.length>0 && turns[0].currentPlayer==='X'){
    activePlayer ='O';
  }
 
  function handleActivePlayer(rowIndex,colIndex){
  setturns((prev)=>{
  let Player='X';
  if(prev.length>0 && prev[0].currentPlayer==='X'){
    Player='O';
  }
  const updatedTurns= [ {square:{row:rowIndex,col:colIndex},currentPlayer:Player},...prev];
  return updatedTurns;
      
  });
  }

  function handleRestart(){
    setturns([]);
  }
  return (
    <>
    <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" onChangeName={onHandleNameChange} isActive={activePlayer==='X'}/>
          <Player name="Player 2" symbol="O"onChangeName={onHandleNameChange} isActive={activePlayer==='O'}/> 
        </ol>
       {(Winner || isDraw)&& <Gameover checkWinner={Winner} draw={isDraw}  handleReset={handleRestart}/>}

        <GameBoard onSelectActivePlayer={handleActivePlayer} afterupdatedTurns={gameBoard}/>
      </div>
    </main>
    </>
  )
}

export default App
