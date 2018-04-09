
cart.cart_items.each do |cart_item|
    json.set! cart_item.item_id do
      json.extract! cart_item, :quantity
    json.partial! 'api/items/item', item: cart_item.item
  end
end
