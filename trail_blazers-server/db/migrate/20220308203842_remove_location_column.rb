class RemoveLocationColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :hikers, :location
  end
end
