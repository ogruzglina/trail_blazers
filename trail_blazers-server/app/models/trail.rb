class Trail < ActiveRecord::Base
    has_many :reviews
    has_many :hikers, through: :reviews

    def self.trail_reviews(id)
        trail = Trail.find(id)
        trail.reviews.where(trail_id: trail.id)
    end

    def trail_count_reviews
        trail_id = self.id
        Trail.trail_reviews(trail_id).count
    end

    def trail_avg_rating
        trail_id = self.id
        Trail.trail_reviews(trail_id).average(:rating).to_f.round(2)
    end
end
