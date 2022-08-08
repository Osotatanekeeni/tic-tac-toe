import Board from './Board'
import { useState } from 'react'

export default function Game() {


    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState("X")    
    let status;

    function calculateWinner() {
        const winningSequence = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let sequence of winningSequence) {
            const [a, b, c] = sequence
            
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                document.getElementsByClassName("square")[a].style.backgroundColor = "green"
                document.getElementsByClassName("square")[b].style.backgroundColor = "green"
                document.getElementsByClassName("square")[c].style.backgroundColor = "green"
                return squares[a]
            }
        }
        return false;
    }


    const winner = calculateWinner();
    
    function handleCLickFunction(squareIndex) {
      // TODO: 
      // 1. Add functionality to play against the computer
      // 2. Keep Score

      if (squares[squareIndex] || winner) return;

      setSquares(squares.map((square, index) => {
        if (index === squareIndex) {
          return currentPlayer
        } else {
          return square
        }
      }
      ))
      
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    function handleRestartGame() {
      for (let i = 0; i < squares.length; i++) {
        document.getElementsByClassName("square")[i].style.backgroundColor = "white"
      }
      setSquares(Array(9).fill(null))
    }

    if (winner) { 
      console.log(winner)
      status = `Winner: ${winner}`;
      
    } else {
      status = `Next player: ${currentPlayer}`;
    }

    const boardIsFull = !squares.includes(null)

    
  return (
    <div>
        <h3 id='status'>{status}</h3>
        <div>
          <Board squares={squares}  onClick={handleCLickFunction} />
        </div>
        <br></br>
        <div>
        {(winner || boardIsFull) && <button id='play-again' onClick={handleRestartGame}>Play Again</button>}
        </div>
    </div>
  )
}
