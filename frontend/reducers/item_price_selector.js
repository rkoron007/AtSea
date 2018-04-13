
export const OrderItemsByPrice = (state, asc) => {
  return Object.values(state.entities.items).sort(
    (item1, item2) => item1.price < item2.price);
};
export const OrderItemsByPriceD = (state, desc) => {
  return Object.values(state.entities.items).sort(
    (item1, item2) => item1.price > item2.price);
};
