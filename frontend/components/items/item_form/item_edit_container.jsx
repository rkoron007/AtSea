import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateItem,
  fetchItem,
  receiveErrors,
  deleteItem } from "../../../actions/item_actions";
import ItemForm from "./item_form";

const mapStateToProps = ( state, ownProps ) => {
  const defaultitem = { title: "",
    description: "",
    price:"",
    imgUrl:"",
    userId:"",
  };

  const item = state.entities.items[ownProps.match.params.itemId] || defaultitem;
  return {
    item,
    formType: "Update Item",
    formTitle: "Update Your Product",
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processItemForm: (item) => dispatch(updateItem(item)),
    clearErrors: () => dispatch(receiveErrors([])),
    fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    handleDelete: (itemId) => dispatch(deleteItem(itemId))
  };
};

class EditItemForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id !== nextProps.match.params.itemId) {
      this.props.fetchItem(nextProps.match.params.itemId);
    }
  }

  render() {
    const { processItemForm, formType, item, handleDelete } = this.props;
    return (
      <PostForm
        processItemForm={processItemForm}
        formType={formType}
        item={item}
        handleDelete = {handleDelete}
        />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
