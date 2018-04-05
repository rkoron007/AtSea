json.partial! 'api/items/item', item: @item

json.user do
  json.set! @item.user_id do
    json.partial! 'api/users/user', user: @item.user
  end
end
