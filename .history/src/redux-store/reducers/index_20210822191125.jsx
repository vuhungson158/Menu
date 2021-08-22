import { combineReducers } from "redux";
import HoldReducer from "./HoldReducer";
import MenuReducer from "./MenuReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    menu: MenuReducer,
    order: OrderReducer,
    hold:HoldReducer
});

export default rootReducer;