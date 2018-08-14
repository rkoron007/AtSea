import { combineReducers } from "redux";
import itemsReducer from "./items_reducer";
import usersReducer from "./users_reducer";
import cartReducer from "./cart_reducer";
import reviewsReducer from "./reviews_reducer";
import favoritesReducer from "./favorites_reducer";
import chatReducer from "./chat_reducer";
import messageReducer from "./message_reducer";

const EntitiesReducer =  combineReducers({
  items: itemsReducer,
  users: usersReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer,
  chats: chatReducer,
  messages: messageReducer
});

export default EntitiesReducer;
