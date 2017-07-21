class AddOwnerIdToChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :owner_id, :integer, null: false, default: 1
  end
end
