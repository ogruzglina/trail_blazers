class FixReviewsColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column(:reviews, :created_date, :created_at)
    rename_column(:reviews, :updated_date, :updated_at)
  end
end
