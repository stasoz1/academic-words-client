import React, { useEffect } from 'react'
import './TranslationExample.css'
import { useSelector } from 'react-redux'

const TranlsationExample = (props) => {
    const translation = useSelector(s => s.translation.translation);
    const highlighWords = translation.highlighWords; 

    // const lTextWithHighlighWords = props.lText.split(" ")
    //     .map(text => highlighWords.includes(text.toLowerCase().replace(/[.,\s]/g, '')) 
    //             ? <span style={{ color: '#26611E' }}><b>{text}</b> </span> 
    //             : text + " ");

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