class Trail < ActiveRecord::Base
    has_many :reviews
    has_many :hikers, through: :reviews

    def self.trail_reviews(id)
        trail = Trail.find_by(id)
        trail.reviews.where(trail_id: trail.id)
    end

    def trail_count_reviews
        self.trail_reviews.count
    end

    def trail_avg_rating
        self.trail_reviews.average(:rating).to_f.round(2)
    end
end
