class AddUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :username, :string, null: false, uniqueness: true
    add_column :users, :img_url, :string, null: false
    remove_column :users, :email, :string
  end
end
