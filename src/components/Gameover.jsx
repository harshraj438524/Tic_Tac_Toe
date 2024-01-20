import React from 'react'
function Gameover({checkWinner,draw,handleReset}) {
  return (
    <>
    <div id="game-over">
        <h2>Game Over!</h2>
        {checkWinner&&<p> {checkWinner} is Winner!</p>}
        {draw&&<p>It's Draw</p>}
        <p>
            <button onClick={handleReset}>Rematch!</button>
        </p>
    </div>
    </>
  )
}

export default Gameover