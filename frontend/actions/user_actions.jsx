import React from "react";

import { fetchUser } from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveUser = (payload) =>({
    type:RECEIVE_USER,
    payload
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});


export const getUser = (id) => (dispatch) => (
  fetchUser(id).then(
    payload => dispatch(receiveUser(payload)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);
