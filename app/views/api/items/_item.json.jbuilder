json.extract! item, :id, :title, :description, :price, :user_id
json.image_url asset_path(item.img_url)

json.currentUserLikes !!item.favorites.find_by(user_id: current_user.id)
