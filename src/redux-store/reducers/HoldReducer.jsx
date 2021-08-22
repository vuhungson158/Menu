import { MAKE_HOLD } from "../actions/TYPE";

var initialState = {
    holder: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
}

const HoldReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MAKE_HOLD:
            if (payload.totalAmount === 0) {
                state.holder[payload.index] = {};
                return state;
            } else {
                state.holder[payload.index] = payload;
                return state;
            }
        default:
            return state;
    }
};

export default HoldReducer;