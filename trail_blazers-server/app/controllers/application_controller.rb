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

  # get "/reviews/:trail_id" do 
  #   trail = Trail.find_by(id: params[:trail_id])
  #   t_reviews = trail.trail_reviews
    
  #   t_reviews.to_json
  # end

  get "/hikers/:trail_id" do 
    trail = Trail.find_by(id: params[:trail_id])
    reviews = trail.trail_reviews

    hikers_id = reviews.map {|review| review.hiker_id}
    hikers = hikers_id.map {|hiker_id| Hiker.find(hiker_id)}

    trail_hikers = {trail_id: trail.id, hikers: hikers}
    trail_hikers.to_json
  end

  get "/reviews/:sort_or_trail_id" do
    type = params[:sort_or_trail_id]
    type.to_json
    sorted_reviews = []

    if type.length >= 6
      case type
      when "newest"
        sorted_reviews = Review.all.order(created_at: :desc)
      when "oldest"
        sorted_reviews = Review.all.order(created_at: :asc)
      when "highest"
        sorted_reviews = Review.all.order(rating: :desc)
      when "lowest"
        sorted_reviews = Review.all.order(rating: :asc)
      end
      sorted_reviews.to_json
    else
      trail = Trail.find_by(id: type)
      t_reviews = trail.trail_reviews
      t_reviews.to_json
    end
  end

end
