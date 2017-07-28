class RemoveReplyBooleanFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :reply
  end
end
