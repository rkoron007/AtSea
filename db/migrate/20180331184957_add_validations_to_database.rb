class AddValidationsToDatabase < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :session_token, :string
    add_column :users, :session_token, :string, null: false
  end
end
