import {combineReducers} from "redux";
import homeReducer from "../app/views/Home/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
});

export default rootReducer;