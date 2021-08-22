import { SWITCH_MODE } from "./TYPE";

export const switchMode = isDark => dispatch => {
    dispatch({
        type: SWITCH_MODE,
        payload: isDark
    })
};