class CreateHikers < ActiveRecord::Migration[6.1]
  def change
    create_table :hikers do |t|
      t.string :name
      t.integer :age
      t.string :location
    end
  end
end
