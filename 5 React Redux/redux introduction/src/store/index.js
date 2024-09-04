import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { darkModeReducer } from "./darkModeReducer";

const rootReducer = combineReducers({ cashReducer, darkModeReducer });
export const store = createStore(rootReducer);
