class AddReplyStatusToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :reply, :boolean, default: false
    add_column :messages, :prompt_id, :integer
  end
end
