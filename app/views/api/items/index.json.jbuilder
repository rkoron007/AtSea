json.items do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :title, :price, :user_id
      json.image_url asset_path(item.img_url)
    end
  end
end

json.users do
  @items.each do |item|
    json.set! item.user_id do
      json.partial! 'api/users/user', user: item.user
    end
  end
end


review = {user_id:1, body:"hello", rating: 2.5, item_id:1}
