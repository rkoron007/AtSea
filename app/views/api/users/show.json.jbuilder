json.user do
  json.partial! 'api/users/user', user: @user
end

json.items({})
json.items do
  @user.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :title, :price, :user_id
      json.image_url asset_path(item.img_url)
    end
  end
end

# json.favorites({})
# json.favorites do
#   @user.favorites.each do |favorite|
#     json.set! favorite.item.id do
#       json.extract! favorite.item, :title, :price, :id
#       json.image_url asset_path(favorite.item.img_url)
#     end
#   end
# end
