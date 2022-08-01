import React from 'react'

export default function ScoreCard({totalMark, resetQuiz}) {
  return (
    <div className='result'>
        <h3>Result Page</h3>
        <p style={{ padding:"10px", border:"2px dotted blue" }}>Your Score is: <span style={{ fontWeight:"bold" }}>{totalMark} </span></p>
        <button className='btn primary' onClick={resetQuiz}>Play Again</button>
    </div>
  )
}
