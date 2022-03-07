class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trails" do
    trails = Trail.all
    trails.to_json
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
