
var initialState = {
    dark: true
};


const ThemeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 1:

        default:
            return state;
    }
};

export default ThemeReducer
