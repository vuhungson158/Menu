
var initialState = {
    dark: true
};


const ThemeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SWITCH_MODE:
            return
        default:
            return state;
    }
};

export default ThemeReducer
