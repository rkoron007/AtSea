import { combineReducers } from "redux";
import sessionErrorsReducer from "./errors/session_errors_reducer";
import itemErrorsReducer from "./errors/items_errors_reducer";
import cartErrorsReducer from "./errors/cart_errors_reducer";
import userErrorsReducer from "./errors/user_errors_reducer";
import reviewErrorsReducer from "./errors/reviews_errors_reducer";

const errorsReducer =  combineReducers({
  session: sessionErrorsReducer,
  items: itemErrorsReducer,
  cart: cartErrorsReducer,
  user:userErrorsReducer,
  reviews: reviewErrorsReducer,
});

export default errorsReducer;
