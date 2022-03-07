class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trails" do
    trails = Trail.all
    trails_count_and_rating = []

    trails.each do |trail|
      trail_count = trail.trail_count_reviews
      trail_rating = trail.trail_avg_rating
      trails_count_and_rating << {count: trail_count, avg_review: trail_rating}
    end

    result = {trails: trails, rating: trails_count_and_rating}
    result.to_json
  end

  get "/reviews" do
    reviews = Review.all
    reviews.to_json
  end

  get "/hikers" do
    hikers = Hiker.all
    hikers.to_json
  end
end
