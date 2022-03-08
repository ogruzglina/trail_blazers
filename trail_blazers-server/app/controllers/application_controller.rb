class ApplicationController < Sinatra::Base
  set :default_content_sort, "application/json"

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

  get "/hikers/:trail_id" do
    trail_id = params[:trail_id]
    reviews = Trail.trail_reviews(trail_id)
  
    hikers_id = reviews.map {|review| review.hiker_id}.uniq
    hikers = hikers_id.map {|hiker_id| Hiker.find(hiker_id)}
  
    trail_hikers = {trail_id: trail_id, hikers: hikers}
    trail_hikers.to_json
  end

  get "/reviews/:trail_id/?:sort?" do # ?:sort? -it's an optional parametr
    sort = params[:sort]
    trail_id = params[:trail_id]
    sorted_reviews = []

    t_reviews = Trail.trail_reviews(trail_id)

    if sort == nil 
      t_reviews.to_json
    else 
      sorted_reviews = case sort
        when "newest"
          t_reviews.order(created_at: :desc)
        when "oldest"
          t_reviews.order(created_at: :asc)
        when "highest"
          t_reviews.order(rating: :desc)
        when "lowest"
          t_reviews.order(rating: :asc)
      end
      sorted_reviews.to_json
    end
  end

  post '/reviews' do
    review = Review.create(
      comment: params[:comment],
      rating: params[:rating],
      hiker_id: params[:hiker_id],
      trail_id: params[:trail_id],
    )
    review.to_json
  end
    
  
end