class Review < ApplicationRecord
  validates :body, :author_id, :rating, :item_id, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  class_name: 'User'


  belongs_to :item
end
