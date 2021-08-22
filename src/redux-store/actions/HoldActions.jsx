import { MAKE_HOLD } from "./TYPE";

export const makeHold = hold => dispatch => {
    dispatch({
        type: MAKE_HOLD,
        payload: hold
    })
};