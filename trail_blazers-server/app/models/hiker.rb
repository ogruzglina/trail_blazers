class Hiker < ActiveRecord::Base
    has_many :reviews
    has_many :trails, through: :reviews

    def self.hikers_with_reviews(review_list)
        final_data = review_list.map do |review|
            review_user = []
            review_user << review
            review_user << Hiker.find(review.hiker_id)
        end
    end
end
