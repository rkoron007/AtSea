class AddDefaultImagesToUsers < ActiveRecord::Migration[5.1]
  def change
     change_column :users, :img_url, :string, default: 'app/assets/images/anchor.png'
  end
end
