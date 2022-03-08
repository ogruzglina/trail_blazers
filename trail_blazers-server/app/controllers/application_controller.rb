class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trails" do
    trails = Trail.all
    trails_count_and_rating = []

    trails.each do |trail|
      trail_count = trail.trail_count_reviews
      trail_rating = trail.trail_avg_rating
      trails_count_and_rating << {trail_id: trail.id, count: trail_count, avg_review: trail_rating}
    end

    result = {trails: trails, rating: trails_count_and_rating}
    result.to_json
  end

  get "/reviews/:trail_id" do 
    trail = Trail.find_by(id: params[:trail_id])
    t_reviews = trail.trail_reviews
    
    t_reviews.to_json
  end

  get "/hikers/:trail_id" do 
    trail = Trail.find_by(id: params[:trail_id])
    reviews = trail.trail_reviews

    hikers_id = reviews.map {|review| review.hiker_id}
    hikers = hikers_id.map {|hiker_id| Hiker.find(hiker_id)}

    trail_hikers = {trail_id: trail.id, hikers: hikers}
    trail_hikers.to_json
  end
end
