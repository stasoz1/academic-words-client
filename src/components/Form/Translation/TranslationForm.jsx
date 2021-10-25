import React from 'react'
import './TranslationForm.css'
import Translation from './TranslationInput/TranslationInput'
import TranslationExample from './TranlsationExample/TranslationExample'
import { useSelector } from 'react-redux'

const TranslationForm = () => {
    const translation = useSelector(s => s.translation.translation);
    const translations = translation.contextResult;
    const synonyms = translation.synonyms;
    const examples = translation.lookupExamples;
    const sentense = translation.translationResult;

    return (
        <>
            <section id="tranlsationSection">
                {sentense &&
                    <div id="translation" className="wide">
                        <div id="translationLabel">
                            Переклад
                        </div>
                        <div id="translationList">
                            <Translation text={sentense} />
                        </div>
                    </div>
                }
                {translations && translations.length > 0 && 
                    <div id="translation">
                        <div id="translationLabel">
                            Переклад
                        </div>
                        <div id="translationList">
                            {translations && translations.map(t => <Translation text={t.text} key={t.confidence} />)}
                        </div>
                    </div>
                }
                {synonyms && synonyms.length > 0 &&
                    <div id="synonyms">
                        <div id="translLabel">
                            Синоніми
                        </div>
                        <div id="synonymList">
                            {synonyms && synonyms.map(s => <span className="synonymListItem">{s}</span>)}
                        </div>
                    </div>  
                }
            </section>
                {examples && 
                    <section id="examples">
                        <div id="translLabel" className="secLabel">
                            Переклад в контексті
                        </div>
                        <div id="exampleList">
                            {examples && examples.fromLanguageExamples.map((e, i) => 
                                    <TranslationExample lText={e} rText={examples.toLanguageExamples[i]}/>)
                            }
                        </div>
                    </section>
                }
        </>
    )
}

export default TranslationForm