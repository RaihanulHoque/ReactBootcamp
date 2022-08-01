import React from 'react'
import AnswerCard from './AnswerCard'

export default function QuestionCard({
    quiz, 
    currentAns, 
    curentQuesIndex, 
    quizzes, 
    navigateNext,
    navigatePrev,
    pickAnswer,
    correctAnswer,
    pickedAnswer

}) {
  return (
    <div className='question-card'>
        <p>Question No:{curentQuesIndex + 1}/{quizzes.length}</p>
       <h4>{quiz.question}</h4>
       
        <div className='quiz-answer-wrapper'> 
            {currentAns.map((ans, i)=>(
                <AnswerCard 
                    key={i} 
                    ans={ans} 
                    pickAnswer={pickAnswer}
                    correctAnswer = {correctAnswer}
                    pickedAnswer = {pickedAnswer}
                />
            ))}
        </div> 
        <div style={{ margin:"5vh 0"}}>
            {/* <button onClick={navigatePrev} >Previous</button> */}

            <button onClick={navigateNext} >Next</button>
        </div>
    </div>
  )
}
