import React from 'react'
import Square from './Square'

export default function Board({ squares, onClick }) {

  return (
    <div className='board'>
        {squares.map((square, index) => {
            return (
                   <Square onClick={onClick} value={square} index={index}/>
            )
        })}
    </div>
  )
}
