class RemoveDefaultUserPhotoAgain < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :img_url, :string, default: 'app/assets/images/anchor.png'
    add_column :users, :img_url, :string
  end
end
