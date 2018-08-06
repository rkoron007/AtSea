json.user do
  json.partial! 'api/users/user', user: @user
end

json.items({})
json.items do
  @user.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :title, :price, :user_id
      json.image_url url_for(item.photo)
    end
  end
end
