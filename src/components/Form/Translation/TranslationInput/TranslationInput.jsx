import React from 'react'
import './TranslationInput.css'

const TranslationInput = (props) => {
    return (
        <span className="translationListItem">
            {props.text}
        </span>
    )
}

export default TranslationInput