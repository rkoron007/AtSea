
json.item do
  json.partial! 'api/items/item', item: @item
end

json.items do
  @item.associated_items.each do |item|
    json.set! item.id do
      json.extract! item, :id
      json.imageUrl asset_path(item.img_url)
    end
  end
end

json.user do
  json.partial! 'api/users/user', user: @item.user
end


json.reviews do
  @item.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
