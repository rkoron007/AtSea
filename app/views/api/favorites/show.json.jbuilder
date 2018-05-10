json.extract! favorite, :id, :item_id, :user_id

json.item do
  json.partial! 'api/items/item', item: favorite.item
end
