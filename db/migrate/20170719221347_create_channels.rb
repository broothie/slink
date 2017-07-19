class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :team_id

      t.timestamps
    end

    add_index :channels, :name
    add_index :channels, :team_id
  end
end
