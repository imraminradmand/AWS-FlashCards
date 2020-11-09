import React from 'react'

function MultiCard(props) {
    return(
        <div>
            <div className='card-back'>
                <div>AWS Service
                    <ul className='multi'>
                        options
                    </ul>
                </div>
            </div>
            <div className='card-front'>
                multi choice answer
            </div>
        </div>
    )
}
export default MultiCard