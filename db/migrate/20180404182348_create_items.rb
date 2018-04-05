class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :user_id, null: false
      t.string :img_url, null: false
      t.text :description, null: false
      t.string :title, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :items, :user_id
    add_index :items, :title
    add_index :items, :price
    add_index :items, :description
  end
end
