class Favorite < ApplicationRecord
  validates :user_id, :item_id, presence: true
  validates_uniqueness_of :user_id, scope: [:item_id]

  belongs_to :user

  belongs_to :item
end
