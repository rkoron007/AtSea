json.username message.sender.username
json.imageUrl asset_path(message.sender.img_url)
json.created message.created_at
json.extract! message, :body, :id
