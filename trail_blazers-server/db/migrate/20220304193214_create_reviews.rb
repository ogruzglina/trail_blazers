class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :rating
      t.string :comment
      t.integer :hiker_id
      t.integer :trail_id
      t.date :created_date
      t.date :updated_date
    end
  end
end
