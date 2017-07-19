class SetMessageChannelIdDefault < ActiveRecord::Migration[5.0]
  def change
    change_column :messages, :channel_id, :integer, null: true
  end
end
