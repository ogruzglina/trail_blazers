class Trail < ActiveRecord::Base
    has_many :reviews
    has_many :hikers, through: :reviews

    def trail_reviews
        reviews.where(trail_id: self.id)
    end

    def trail_count_reviews
        self.trail_reviews.count
    end

    def trail_avg_rating
        self.trail_reviews.average(:rating).to_f.round(2)
    end
end
