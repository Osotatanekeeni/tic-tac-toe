import React from 'react'

export default function Square({ onClick, value, index}) {
  return (
    <button className="square" onClick={() => onClick(index)}>
        {value}
    </button>
  )
}
