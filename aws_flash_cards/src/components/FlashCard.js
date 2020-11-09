import React, { Component} from 'react'
import MultiCard from './MultiCard'
import RegularCard from './RegularCard'
import RandomWeighted from './RandomWeighted'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSpinner)


class FlashCard extends Component {
    constructor() {
        super()
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`
        this.state = {
            flipClass:'',
            questionData: '',
            ready: false
        }
    }

    componentDidMount () {
        
    }

    flip = (e)=>{
        let newFlip = this.state.flipClass === "" ? "flip" : ""
        this.setState({
            flipClass: newFlip
        })
    }

    newCard = () => {
        let path;
        
        const cardStyle = this.props.cardStyle 
        if ((cardStyle === 'Random') || (cardStyle === 'Regular')) {
            path = this.apiHostRoot + '/all'
        } else if (cardStyle === 'Weighted') {
            path = this.apiHostRoot + '/weighted'
        } else {
            path = this.apiHostRoot + '/multi'
        }

        axios.get(path).then((response) =>{
            this.setState({
                questionData: response.data,
                ready: true
            })
        })
    }

    render() {

        if(!this.state.ready) {
            this.newCard()
                return (
                    <div className='spinner-wrapper'>
                        <FontAwesomeIcon icon='spinner' size='6x' spin/>
                    </div>
            )
        }
        return(
            <div>
                <div className="row align-items-center card-holder">
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        <RegularCard questionData={this.state.questionData}/>
                    </div>
                </div>
                <button onClick={this.newCard} className='btn btn-primary btn-lg'>Next Question!</button>
            </div>
        )
    }
}
export default FlashCard