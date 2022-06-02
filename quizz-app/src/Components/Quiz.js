import React, {useState,useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';


export default function Quiz() {

  const {score,setScore, setGameState} = useContext(QuizContext);

  const [currQuestion,setCurrQuestion] = useState(0);
  const [optionChoosen,setOptionChoosen] = useState("");

  const nextQuestion = () => {
    if(Questions[currQuestion].answer == optionChoosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  }

  const FinishQuiz = () => {
    if(Questions[currQuestion].answer == optionChoosen){
      setScore(score + 1);
    }

    setGameState("endScreen")
  }

  return (
    <div className='quiz'>
      <h1> {Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button className='quiz-btn' onClick={() => setOptionChoosen("A")}> { Questions[currQuestion].optionA } </button>
        <button className='quiz-btn' onClick={() => setOptionChoosen("B")}> { Questions[currQuestion].optionB } </button>
        <button className='quiz-btn' onClick={() => setOptionChoosen("C")}> { Questions[currQuestion].optionC } </button>
        <button className='quiz-btn' onClick={() => setOptionChoosen("D")}> { Questions[currQuestion].optionD } </button>
      </div>
       
       {currQuestion == Questions.length - 1 ?(
         <button onClick={FinishQuiz}> Finish Quiz </button>
       ) : (
         <button onClick={nextQuestion}> Next Question </button>
       )}
      
    </div>
  )
}
