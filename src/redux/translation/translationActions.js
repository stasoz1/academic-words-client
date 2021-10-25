import { GET_TRANLATION } from './translationTypes';
import { getWords } from '../../service' 

export const getTranslation = (tranlsationData) => {
    return async dispatch => {
        let translation = null;
        if (!(tranlsationData.text.trim().split(" ").length > 1)) {
            translation = {
                translationResult: null,
                    contextResult: [
                    {
                        confidence: 0.2987,
                        text: "матері",
                        posTag: "NOUN"
                    },
                    {
                        confidence: 0.2315,
                        text: "матір'ю",
                        posTag: "NOUN"
                    },
                    {
                        confidence: 0.1985,
                        text: "мати",
                        posTag: "NOUN"
                    },
                    {
                        confidence: 0.0828,
                        text: "мама",
                        posTag: "NOUN"
                    }
                    ],
                    synonyms: [
                    "mom",
                    "mama",
                    "mommy",
                    "mother",
                    "mum"
                    ],
                    lookupExamples: {
                    fromLanguageExamples: [
                        "I hope your mother's condition improves.",
                        "Here is a picture of my mother's heart.",
                        "And he delivered him to his mother.",
                        "As the mother's body undergoes major changes ...",
                        "Are you going to save the mother earth in your own ...",
                        "The mother won't let it run in and take what ...",
                        "Help the mother to collect the essential things ...",
                        "... actually comes from your mother's side of the family.",
                        "... the body and the child and mother.",
                        "... circulatory system, hence supplying the mother much more power.",
                        "... factors that affect the body of his mother.",
                        "... can be fed in the mother's absence.",
                        "... entered the room of his mother.",
                        "... basic minerals from the organism of mother to the fetus.",
                        "... the child know it from his mother's belly."
                    ],
                    toLanguageExamples: [
                        "Я сподіваюся, стан матері поліпшується.",
                        "Ось картина серце моєї матері.",
                        "І його Він віддав його матері.",
                        "Як тіло матері зазнає серйозних змін, ...",
                        "Чи збираєтеся ви зберегти матері-землі у ваших власних ...",
                        "Матері не дають йому працювати і прийняти те ...",
                        "допомогти матері зібрати необхідні речі, ...",
                        "... насправді відбувається з боку своєї матері в сім'ї.",
                        "... організм і дитину, і матері.",
                        "... кровообігу, а отже поставки матері набагато більше енергії.",
                        "... факторів, які впливають на організм його матері.",
                        "... може бути поданий у відсутність матері.",
                        "... увійшов до кімнати його матері.",
                        "... перехід основних мінералів з організму матері до плоду.",
                        "... Дитина повинна знати, від живота своєї матері."
                    ]
                }
            };
        } else {
            translation = {
                translationResult: "моя мати моя мати моя мати моя мати моя мати моя мати моя мати ",
                contextResult: [],
                synonyms: [],
                lookupExamples: null
            }
        }
        dispatch({ type: GET_TRANLATION, value: translation });
    };
}