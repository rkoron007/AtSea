class AddFavoritesIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :favorites, [:user_id, :item_id], unique: true
  end
end
