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

    def trail_count_stars
        stars = [0, 0, 0, 0, 0]
        trail_id = self.id
        reviews = Trail.trail_reviews(trail_id)
        reviews.each {|review| stars[review.rating - 1] += 1}
        stars
    end

end
