class ChangeHikersTableColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :hikers, :age
    add_column :hikers, :picture, :string
  end
end
