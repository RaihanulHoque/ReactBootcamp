import React from 'react'

export default function AnswerCard({ans, pickAnswer, correctAnswer, pickedAnswer}) {

    //Is Picked Answer is correct -> TRUE, is incorrect-> FALSE
    const isRightAnswer = pickedAnswer && ans === correctAnswer
    const isWrongAnswer = pickedAnswer && ans === pickedAnswer && pickedAnswer !== correctAnswer

    const correctClass = isRightAnswer ? 'correct-answer' : ''
    const incorrectClass = isWrongAnswer? 'incorrect-answer':''
    const disabledClass = pickedAnswer && 'disabled-answer'


  return (
    <div className={`quiz-answer ${correctClass} ${incorrectClass} ${disabledClass}`} onClick={() => pickAnswer(ans)}>
        {ans}
    </div>
  )
}
