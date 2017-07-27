class RemoveTeamIdFromChannels < ActiveRecord::Migration[5.0]
  def change
    remove_column :channels, :team_id
  end
end
