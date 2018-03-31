import { combineReducers } from "redux";
// import entitiesReducer from "./entitiesReducer";
import sessionReducer from "./session_reducer";
// import uiReducer from "./uiReducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
  // entities: entitiesReducer,
  // ui: uiReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
