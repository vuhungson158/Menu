import { SWITCH_MODE } from "../actions/TYPE";

var initialState = {
    dark: true
};


const ThemeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SWITCH_MODE:
            return {
                ...state,
                dark: payload
            }
        default:
            return state;
    }
};

export default ThemeReducer
