import React from 'react'
import './TranslationForm.css'
import Translation from './TranslationInput/TranslationInput'

const TranslationForm = () => {
    return (
        <>
            <section id="tranlsationSection" className="hidden">
                <div id="translation">
                    <div id="translationLabel">
                        Переклад
                    </div>
                    <div id="translationList">
                        <Translation text="Sobaka"/>
                        <Translation text="Pesik"/>
                        <Translation text="Dog"/>
                    </div>
                </div>
                <div id="synonyms">
                  <div id="translLabel">
                      Синоніми
                  </div>
                  <div id="synonymList">

                  </div>
                </div>   
            </section>
            <section id="examples" >
                <div id="translLabel" className="secLabel">
                    Переклад в контексті
                </div>
                <div id="exampleList" >
                    {/* <Example lText ="Тут появятся результаты" rText=""/> */}
                </div>
            </section>
        </>
    )
}

export default TranslationForm