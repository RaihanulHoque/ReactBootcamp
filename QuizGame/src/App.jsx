import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuestionCard from './components/QuestionCard';
import shuffle from './utils';
import ScoreCard from './components/ScoreCard';

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [curentQuesIndex, setCurentQuesIndex] = useState(0)
  const [currentAns, setCurrentAns] = useState(null)

  const [loaded, setLoaded] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [totalMark, setTotalMark]= useState(null)
  //to keep the correct Ans. from each question
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [pickedAnswer, setPickedAnswer] = useState(null)

  const navigateNext = () =>{
      let updatedQuizIndex = curentQuesIndex + 1
      const validQuestionIndex = updatedQuizIndex < quizzes.length
      if(validQuestionIndex){
        setCurentQuesIndex(updatedQuizIndex)
        const question = quizzes[updatedQuizIndex]
        setCurrentAns(shuffle(question))
        //getting the correct Ans. from the question
        setCorrectAnswer(question.correct_answer)
        // setCorrectAnswer(null)
        setPickedAnswer(null)
      }else{
        setEndGame(true)
      }
  } 
  const pickAnswer = (answer) =>{
    // console.log(answer, '..........Picked Answer')
    setPickedAnswer(answer)
    if(correctAnswer === answer){
      console.log("Congratulations, your answer is correct....... App.jsx - pickAnswer()")  
      //Increasing total score
      setTotalMark((prevMark)=>prevMark+1) // CallBack Function
    }else{
      console.log("Oppps!, you gotta wrong Ans....... App.jsx - pickAnswer()")  
    }

  }
  const fetchQuiz = async() =>{
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple');

      const {results} = await response.json()
      setQuizzes(results)
      const initialQuestion = results[curentQuesIndex]
     
      setCurrentAns(shuffle(initialQuestion))
      //getting the correct Ans. from the fetched question
      setCorrectAnswer(initialQuestion.correct_answer)
      setLoaded(true) 
  }
  const playAgain = () =>{
    setLoaded(false) 
    setEndGame(false)
    setQuizzes(null)
    setCurrentAns(null)
    setCurentQuesIndex(0)
    setCorrectAnswer(null)
    setPickedAnswer(null)
    setTotalMark(0)
  }
  return (
    <>
    {
      endGame && 
      <>
        <p>HAVE FUN WITH YOUR RESULT!</p>
        <ScoreCard totalMark ={totalMark} resetQuiz={playAgain} />
        

      </>
}
    <div className="App">
      <div className='container'>
          { 
            loaded && 
            !endGame &&
            (
            <QuestionCard 
            quiz = {quizzes[curentQuesIndex]} 
            currentAns = {currentAns}  
            curentQuesIndex = {curentQuesIndex}
            quizzes = {quizzes}
            navigateNext = {navigateNext}
            pickAnswer = {pickAnswer}
            correctAnswer = {correctAnswer}
            pickedAnswer = {pickedAnswer}

            />
            )
          }
          {
            !loaded && 
            <>
              
              <button className='btn primary' onClick={fetchQuiz}>Start Quiz</button>
              <p className="read-the-docs">
                Click on the Start Quiz Button to start the quiz session
              </p>
            </>
          }
      </div>
      
    </div>
    </>
  )
}

export default App
