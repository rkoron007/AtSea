json.extract! review, :id, :item_id, :author_id, :body, :rating, :created_at

json.reviewer do
  json.partial! 'api/users/user', user: review.user
end
