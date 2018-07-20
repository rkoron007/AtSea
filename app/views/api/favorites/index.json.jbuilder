
json.favorites({})
json.favorites do
  @favorites.each do |favorite|
    json.set! favorite.item.id do
      json.extract! favorite.item, :title, :price, :id
      json.image_url asset_path(favorite.item.img_url)
    end
  end
end
