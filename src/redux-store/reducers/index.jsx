import { combineReducers } from "redux";
import HoldReducer from "./HoldReducer";
import MenuReducer from "./MenuReducer";
import OrderReducer from "./OrderReducer";
import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
    menu: MenuReducer,
    order: OrderReducer,
    hold: HoldReducer,
    theme: ThemeReducer
});

export default rootReducer;