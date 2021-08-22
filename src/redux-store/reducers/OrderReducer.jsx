import { ADD_ORDER, AMOUNT_DOWN, AMOUNT_UP, CHANGE_AMOUNT, CLEAR_ALL, HOLD_TO_ORDER } from "../actions/TYPE";

var initialState = {
    ordered_item: [],
};

const OrderReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_ORDER:
            return {
                ...state,
                ordered_item: [...state.ordered_item, payload]
            }
        case HOLD_TO_ORDER:
            if (payload === undefined) {
                return {
                    ...state,
                    ordered_item: []
                }
            } else return {
                ...state,
                ordered_item: payload
            }
        case CHANGE_AMOUNT:
            return {
                ...state,
                ordered_item: state.ordered_item.map(item => {
                    if (item.id === payload.id) {
                        item.amount = payload.amount;
                    }
                    return item;
                })
            }
        case AMOUNT_UP:
            return {
                ...state,
                ordered_item: state.ordered_item.map(item => {
                    if (item.id === payload) {
                        item.amount++;
                    }
                    return item;
                })
            }
        case AMOUNT_DOWN:
            if (payload.amount === 1) {
                return {
                    ...state,
                    ordered_item: state.ordered_item.filter(item => item.id !== payload.id)
                }
            } else return {
                ...state,
                ordered_item: state.ordered_item.map(item => {
                    if (item.id === payload.id) {
                        item.amount--
                    }
                    return item;
                })
            }
        case CLEAR_ALL:
            return {
                ...state,
                ordered_item: []
            }
        default:
            return state;
    }
};

export default OrderReducer;