
export const switchMode = isDark => dispatch => {
    dispatch({
        type: SWITCH_MODE,
        payload: isDark
    })
};