class RemoveChannelIdDefaultOnMessages < ActiveRecord::Migration[5.0]
  def change
    change_column_default :messages, :channel_id, nil
  end
end
