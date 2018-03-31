import React from "react";
import ReactDOM from "react-dom";
// import Root from "./component/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", ()=>{
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<h1>hello!</h1>, rootElement);
});
