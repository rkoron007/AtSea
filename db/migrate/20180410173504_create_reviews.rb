class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :item_id, null: false
      t.float :rating, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :reviews, [:author_id, :item_id], unique: true
  end
end
