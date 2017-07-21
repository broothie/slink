class ChangeSubscriptionIdsToIntegers < ActiveRecord::Migration[5.0]
  def change
    change_column :subscriptions, :user_id, 'integer USING CAST(user_id AS integer)'
    change_column :subscriptions, :channel_id, 'integer USING CAST(channel_id AS integer)'
  end
end
