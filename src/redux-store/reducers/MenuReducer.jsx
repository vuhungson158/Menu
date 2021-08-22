import { SWITCH_BRANCH } from "../actions/TYPE";
import { MenuInitialState } from "./MenuInitialState";

const MenuReducer = (state = MenuInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SWITCH_BRANCH:
            return {
                ...state,
                branchs: state.branchs.map((branch) => {
                    if (branch.id === payload) branch.active = true;
                    else if (branch.active) branch.active = false;
                    return branch;
                })
            };
        default:
            return state;
    }
};

export default MenuReducer;