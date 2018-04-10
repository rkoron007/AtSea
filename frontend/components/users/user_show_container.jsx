import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/user_actions";
import UserShow from "./user_show";

const mapStateToProps = (state, ownParams) => {
  const  items = Object.keys(state.entities.items).map(
      id => state.entities.items[id]);

  return {
    items,
    user: Object.values(state.entities.users)[0],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
