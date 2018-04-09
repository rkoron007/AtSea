  json.extract! user, :id, :username
  json.img_url asset_path(user.img_url)
