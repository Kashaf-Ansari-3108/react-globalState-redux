import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const combineReducer = combineReducers({
    counterReducer:counterReducer,
});

export default combineReducer;