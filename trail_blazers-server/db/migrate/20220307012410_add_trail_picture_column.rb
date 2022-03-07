class AddTrailPictureColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :trail_picture, :string
  end
end
