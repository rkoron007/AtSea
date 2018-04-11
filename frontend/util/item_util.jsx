
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

export const createItem = (item) => (
  $.ajax({
    method: "POST",
    url: `/api/items/`,
    data: {item}
  })
);

export const updateItem = (item) => (
  $.ajax({
    method: "PATCH",
    url: `/api/items/${item.id}`,
    data: {item}
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


export const makeChange = (price) => {
  let newPrice = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' });


  return newPrice.format(price);
};
