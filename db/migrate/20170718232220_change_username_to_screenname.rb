class ChangeUsernameToScreenname < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :username, :screenname
  end
end
