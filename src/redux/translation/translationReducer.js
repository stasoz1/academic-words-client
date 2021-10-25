import { GET_TRANLATION } from './translationTypes'

const INITIAL_STATE = {
    translation: {}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TRANLATION:
            return {
                ...state, translation: action.value,
            };
        default: return state;
    }
};

export default reducer;