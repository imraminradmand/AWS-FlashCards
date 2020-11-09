import React from 'react'
import QuizType from './QuizType'
 


function QuizBar (props) {

        const quizArray = [{
            icon:'dice',
            type: 'Random'
        },
        {
            icon:'file-alt',
            type: 'Regular'
        },
        {
            icon: 'dumbbell',
            type: 'Weighted'
        },
        {
            icon:'font', 
            type:'Mutli'

        }   
    
    ]

    const quizTypes = quizArray.map((qt, i)=>{
        return (
            <QuizType key={i} icon={qt.icon} quizType={qt.type} userChoice={props.userChoice}/>
        )
    })
    return(
        <div className= 'quiz-bar'>
            <h1>Choose your study type</h1>
            <ul className='nav nav-pills nav-fill'>
                {quizTypes}
            </ul>
        </div>
    )

}

export default QuizBar