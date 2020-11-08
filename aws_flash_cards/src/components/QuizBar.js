import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faFont, faFileAlt, faDice} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
 
library.add(faDumbbell)
library.add(faFont)
library.add(faFileAlt)
library.add(faDice)

function QuizBar (props) {

    return(
        <div className= 'quiz-bar'>
            <h1>Choose your study type</h1>
            <ul className='nav nav-pills nav-fill'>
                <li className='col-sm-3 text-center'>
                    <div className='nav-card'>
                        <FontAwesomeIcon icon='dice' size='4x'/>
                    </div>
                </li>
            </ul>
        </div>
    )

}

export default QuizBar