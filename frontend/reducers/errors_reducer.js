import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import itemErrorsReducer from "./items_errors_reducer";
import cartErrorsReducer from "./cart_errors_reducer";
const errorsReducer =  combineReducers({
  session: sessionErrorsReducer,
  items: itemErrorsReducer,
  cart: cartErrorsReducer,
});

export default errorsReducer;