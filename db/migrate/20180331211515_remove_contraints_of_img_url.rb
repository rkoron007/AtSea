class RemoveContraintsOfImgUrl < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :img_url, :string
    add_column :users, :img_url, :string
  end
end
