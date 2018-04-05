import { combineReducers } from "redux";
import itemsReducer from "./items_reducer";
import usersReducer from "./users_reducer";

const EntitiesReducer =  combineReducers({
  items: itemsReducer,
  users: usersReducer
});

export default EntitiesReducer;
