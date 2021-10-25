import React from 'react'
import './TranslationExample.css'

const TranlsationExample = (props) => {
    return (
        <span className ="exampleItem">
            <div className="leftExample">
                {props.lText}
            </div>
            <div className="rightExample">
                {props.rText}
            </div>
        </span>
    )
}

export default TranlsationExample