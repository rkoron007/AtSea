import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import login from "./actions/session_actions";
import { createItem } from "./actions/item_actions";

document.addEventListener("DOMContentLoaded", ()=>{
let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.store = store;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.createItem = createItem;
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootElement);
});
