json.extract! item, :id, :title, :description, :price, :user_id
json.image_url url_for(item.photo)

json.currentUserLikes !!item.favorites.find_by(user_id: current_user.id)
