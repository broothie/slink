class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.string :user_id, null: false
      t.string :channel_id, null: false

      t.timestamps
    end

    add_index :subscriptions, :user_id
    add_index :subscriptions, :channel_id
  end
end
