import * as API from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => (
  API.signup(user).then((cUser) => (
    dispatch(receiveCurrentUser(cUser))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const login = (user) => (dispatch) => (
  API.login(user).then(
    cUser => dispatch(receiveCurrentUser(cUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  API.logout().then( user => (
    dispatch(receiveCurrentUser(null))
  ))
);
