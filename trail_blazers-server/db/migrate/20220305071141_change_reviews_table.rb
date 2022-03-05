class ChangeReviewsTable < ActiveRecord::Migration[6.1]
  def change
    change_column(:reviews, :created_date, :timestamp)
    change_column(:reviews, :updated_date, :timestamp)
  end
end
