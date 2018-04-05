import { combineReducers } from "redux";
import itemsReducer from "./items_reducer";

const EntitiesReducer =  combineReducers({
  items: itemsReducer
});

export default EntitiesReducer;
