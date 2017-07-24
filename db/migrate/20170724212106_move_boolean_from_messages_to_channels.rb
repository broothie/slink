class MoveBooleanFromMessagesToChannels < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :private
    add_column :channels, :private, :boolean, default: false
  end
end
