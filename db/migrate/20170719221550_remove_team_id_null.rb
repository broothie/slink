class RemoveTeamIdNull < ActiveRecord::Migration[5.0]
  def change
    change_column :channels, :team_id, :integer, null: true
  end
end
