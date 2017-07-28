class RenamePromptId < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :prompt_id, :reply_id
  end
end
