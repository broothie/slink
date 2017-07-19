class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.datetime :timestamp, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false, default: 1

      t.timestamps
    end

    add_index :messages, :timestamp
    add_index :messages, :author_id
    add_index :messages, :channel_id
  end
end
