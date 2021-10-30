import { GET_TRANLATION } from './translationTypes';
import { getWords } from '../../service' 

export const getTranslation = (tranlsationData) => {
    return async dispatch => {
        let translation = await getWords(tranlsationData);
        // if (!(tranlsationData.text.trim().split(" ").length > 1)) {
        //     translation = {
        //         translationResult: null,
        //             contextResult: [
        //             {
        //                 confidence: 0.2987,
        //                 text: "матері",
        //                 posTag: "NOUN"
        //             },
        //             {
        //                 confidence: 0.2315,
        //                 text: "матір'ю",
        //                 posTag: "NOUN"
        //             },
        //             {
        //                 confidence: 0.1985,
        //                 text: "мати",
        //                 posTag: "NOUN"
        //             },
        //             {
        //                 confidence: 0.0828,
        //                 text: "мама",
        //                 posTag: "NOUN"
        //             }
        //             ],
        //             synonyms: [
        //             "mom",
        //             "mama",
        //             "mommy",
        //             "mother",
        //             "mum"
        //             ],
        //             lookupExamples: {
        //             fromLanguageExamples: [
        //                 "Based on results of six Tempus IV calls for proposals involving Ukrainian partners, the EU has financed 94 projects: 12 projects in the 1st call (overall consolidated budget being about EUR 11 mln.), 12 in the 2nd (about EUR 11 mln.), 5 in the 3rd (about EUR 5 m), 9 in the 4th (about EUR 9 mln.), 23  in the 5th (about EUR 22 mln.) and 33 in six call (around EUR 32 mln.). A strong impulse enhancing interest to the Programme and, accordingly, resulting in a growing number of project applications was provided by considerable increase in financing for the Tempus IV projects in 2011 and 2013 for Azerbaijan, Belarus, Armenia, Georgia, Moldova and Ukraine within the Eastern Partnership policy framework. The Tempus IV projects in Ukraine include 76 Joint Projects (including 12 national ones) and 18 Structural Measures (including 6 national ones)..",
        //                 "Here is a picture of my mother's heart.",
        //                 "And he delivered him to his mother.",
        //                 "As the mother's body undergoes major changes ...",
        //                 "Are you going to save the mother earth in your own ...",
        //                 "The mother won't let it run in and take what ...",
        //                 "Help the mother to collect the essential things ...",
        //                 "... actually comes from your mother's side of the family.",
        //                 "... the body and the child and mother.",
        //                 "... circulatory system, hence supplying the mother much more power.",
        //                 "... factors that affect the body of his mother.",
        //                 "... can be fed in the mother's absence.",
        //                 "... entered the room of his mother.",
        //                 "... basic minerals from the organism of mother to the fetus.",
        //                 "... the child know it from his mother's belly."
        //             ],
        //             toLanguageExamples: [
        //                 "За результатами шести конкурсів Програми Темпус IV за участі партнерів з України ЄС профінансовано 94 проекти: 12 проектів – у першому конкурсі (загалом консолідований бюджет склав близько 11 млн євро), 12 – у другому (близько 11 млн євро), 5 – у третьому (близько 5 млн євро), 9 – у четвертому (близько 9 млн євро), 23 – у п’ятому (близько 22 млн євро) та 33 – у шостому конкурсі (близько 32 млн. євро). Потужним поштовхом до збільшення інтересу до Програми та, відповідно, зростання кількості проектних заявок стало значне збільшення фінансування проектів Програми Темпус IV у 2011–2013 рр. для Азербайджану, Білорусі, Вірменії, Грузії, Молдови та України в рамках політики Східного Партнерства. Серед проектів Програми Темпус IV в Україні: 76 – Спільних проектів (з них 12 – національних проектів), 18 проектів – Структурні заходи (з них 6 – національні). ",
        //                 "Ось картина серце моєї матері.",
        //                 "І його Він віддав його матері.",
        //                 "Як тіло матері зазнає серйозних змін, ...",
        //                 "Чи збираєтеся ви зберегти матері-землі у ваших власних ...",
        //                 "Матері не дають йому працювати і прийняти те ...",
        //                 "допомогти матері зібрати необхідні речі, ...",
        //                 "... насправді відбувається з боку своєї матері в сім'ї.",
        //                 "... організм і дитину, і матері.",
        //                 "... кровообігу, а отже поставки матері набагато більше енергії.",
        //                 "... факторів, які впливають на організм його матері.",
        //                 "... може бути поданий у відсутність матері.",
        //                 "... увійшов до кімнати його матері.",
        //                 "... перехід основних мінералів з організму матері до плоду.",
        //                 "... Дитина повинна знати, від живота своєї матері."
        //             ]
        //         }
        //     };
        // } else {
        //     translation = {
        //         translationResult: "моя мати моя мати моя мати моя мати моя мати моя мати моя мати ",
        //         contextResult: [],
        //         synonyms: [],
        //         lookupExamples: null
        //     }
        // }
        dispatch({ type: GET_TRANLATION, value: translation.data });
    };
}