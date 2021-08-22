import { SWITCH_BRANCH } from "./TYPE";


export const switchBranch = newID => dispatch => {
    dispatch({
        type: SWITCH_BRANCH,
        payload: newID
    })
};