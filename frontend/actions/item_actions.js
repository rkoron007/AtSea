import * as API from "../util/item_util";


export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";


const receiveItems = (items) =>{
  return({
  type: RECEIVE_ITEMS,
  items
});};

const receiveItem = (item) =>({
  type: RECEIVE_ITEM,
  item
});

const removeItem = (item) =>({
  type: REMOVE_ITEM,
  item
});


export const fetchItems = () => dispatch => {
  return API.fetchItems().then(
    items => dispatch(receiveItems(items))
  );
};

export const fetchItem = (id) => dispatch => {
  return API.fetchItem(id).then(
    item => dispatch(receiveItem(item))
  );
};

export const createItem = (item) => dispatch => {
  return API.createItem(item).then(
    createdItem => dispatch(createItem(createdItem))
  );
};

export const updateItem = (item) => dispatch => {
  return API.updateItem(item).then(
    updatedItem => dispatch(updateItem(updatedItem))
  );
};
export const deleteItem = (itemId) => dispatch => {
  return API.updateItem(itemId).then(
    item => dispatch(updateItem(item.id))
  );
};
