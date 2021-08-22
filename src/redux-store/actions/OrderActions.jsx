import { ADD_ORDER, AMOUNT_DOWN, AMOUNT_UP, CHANGE_AMOUNT, CLEAR_ALL, HOLD_TO_ORDER } from "./TYPE";
import { v4 as uuidV4 } from "uuid";

export const addToOrder = item => dispatch => {
    dispatch({
        type: ADD_ORDER,
        payload: { ...item, id: uuidV4(), amount: 1 }
    })
};

export const holdToOrder = orders => dispatch => {
    dispatch({
        type: HOLD_TO_ORDER,
        payload: orders
    })
};

export const changeAmount = (id, amount) => dispatch => {
    dispatch({
        type: CHANGE_AMOUNT,
        payload: { id, amount: parseInt(amount, 10) }
    })
};

export const amountUp = id => dispatch => {
    dispatch({
        type: AMOUNT_UP,
        payload: id
    })
};

export const amountDown = (id, amount) => dispatch => {
    dispatch({
        type: AMOUNT_DOWN,
        payload: { id, amount }
    })
};

export const clearAll = () => dispatch => {
    dispatch({
        type: CLEAR_ALL,
        payload: null
    })
};

