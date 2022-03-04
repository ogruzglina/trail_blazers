class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :park_name
      t.string :trail_name
      t.string :location
      t.string :difficulty
      t.integer :duration
      t.string :attraction
    end
  end
end
