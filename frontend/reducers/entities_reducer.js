import { combineReducers } from "redux";
import itemsReducer from "./items_reducer";
import usersReducer from "./users_reducer";
import cartReducer from "./cart_reducer";

const EntitiesReducer =  combineReducers({
  items: itemsReducer,
  users: usersReducer,
  cart: cartReducer,
});

export default EntitiesReducer;
