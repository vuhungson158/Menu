
export const switchMode = isDark => dispatch => {
    dispatch({
        type: ADD_ORDER,
        payload: isDark
    })
};