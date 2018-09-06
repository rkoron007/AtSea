
export const fetchItems = () => (
  $.ajax({
    method: "GET",
    url: "/api/items",
  })
);

export const fetchItem = (itemId) => (
  $.ajax({
    method: "GET",
    url: `/api/items/${itemId}`,
  })
);

export const createItem = (item) => {
  return $.ajax({
    method: "POST",
    url: `/api/items/`,
    data: item,
    contentType: false,
    processData: false
  });
};

export const updateItem = (item) => (
  $.ajax({
    method: "PATCH",
    url: `/api/items/${item.id}`,
    data: item,
    contentType: false,
    processData: false
  })
);

export const deleteItem = (itemId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/items/${itemId}`,
  })
);

export const fetchItemsBySearch = ({description}) => {
  return $.ajax({
    method: "GET",
    url: "/api/item_searches",
    data: { search: { description }}
  });
};

export const fetchItemsByPrice = (filterbyprice) => {
  return $.ajax({
    method: "GET",
    url: `/api/items?filterbyprice=${filterbyprice}`
  });
};


export const makeChange = (price) => {
  let newPrice = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' });


  return newPrice.format(price);
};
