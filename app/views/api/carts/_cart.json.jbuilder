
json.cart do
  cart.cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.extract cart_item, :item_id, :quantity
    end
  end
end
