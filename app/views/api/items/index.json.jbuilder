json.items do
  @items.each do |item|
    json.set! item.id do
      json.partial! 'item', item: item
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
