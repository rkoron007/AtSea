class Review < ApplicationRecord
  belongs_to :user,
  foreign_key: :author_id,
  class_name: 'User'


  belongs_to :item
end
