class AddTrailTypeToTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :trail_type, :string
  end
end
