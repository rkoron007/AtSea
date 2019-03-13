class Review < ApplicationRecord
  validates :body, :author_id, :rating, :item_id, presence: true
  validates_uniqueness_of :author_id, scope: [:item_id]

  belongs_to :user,
  foreign_key: :author_id,
  class_name: 'User'


  belongs_to :item

end
