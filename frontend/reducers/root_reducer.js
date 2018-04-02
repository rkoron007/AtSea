import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
// import entitiesReducer from "./entitiesReducer";
// import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  // entities: entitiesReducer,
  // ui: uiReducer,
});

export default rootReducer;
