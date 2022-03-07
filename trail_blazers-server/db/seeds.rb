puts "Start seeding"

puts "Deleting old data..."
Hiker.destroy_all
Trail.destroy_all
Review.destroy_all

puts "Creating hikers..."
n_hikers = 15 # if you want to change an amount of records for any of the tables tell me and I can redo

n_hikers.times do
    name = Faker::Name.name
    location = Faker::Address.full_address
    picture = "" # These will be peoples avatars, I'd assume most of them aren't going to be uploading one. 
    # They also have to be a URL format because of the way the database is structed.
    Hiker.create(name: name, picture: picture, location: location)
end

puts "Creating trails..."
parks = ["Black Rock Forest", "Teatown Lake Reservation", "Alley Pond Park", "Penn State Forest", "Umpqua Natilonal Forest", "Catskill Park", "Mount Rainier National Park", "Badlands National Park", "Lake Clark National Park & Preserve", "Bryce Canyon National Park"]
trails = ["Peekaboo Loop Trail", "Fairyland Loop Trail", "The Watchman Trail", "Creek Trail", "Great Head Trail", "Jordan Pond Path", "Compass Rock", "Devil's Path", "Eagle Mountain", "Hunter Road Trail"]
n_trails = 10

n_trails.times do
    park = parks.sample
    parks = parks.select {|p| p != park}

    trail = trails.sample
    trails = trails.select {|t| t != trail}

    park_location = "#{Faker::Address.street_address}, #{Faker::Address.city}, #{Faker::Address.state_abbr} #{Faker::Address.zip}, USA"
    difficulty = ['easy', 'moderate', 'hard'].sample
    duration = rand(0.1..22).to_f.round(2) # or we can do string and then -> "#{rand(0.1..22).to_f.round(2)} mi" or add "mi" at code during displaying
    attraction = nil # what do you want to show here?
    Trail.create(park_name: park, trail_name: trail, location: park_location, difficulty: difficulty, duration: duration, attraction: attraction)
end

puts "Creating reviews..."
reviews = [
    {rating: 4, comment: "FUN ROCK FORMATIONS! A pretty hike with great views and lots of really interesting rock formations along the way!"}, 
    {rating: 5, comment: "Amazing trail with lots of great views. This was my first time at this path and was worth it. Easy at the begin than bit more difficult climb followed by amazing views"},
    {rating: 3, comment: "Also be prepared to be tired so I recommend taking lots of water and food."},
    {rating: 5, comment: "This was a beautiful trail, very easy walk through/hike with such a rewarding site over the rocks. Autumn brings such beautiful colors to trees below. Take a walk by the lake and the follow the yellow trail up. It's worth it!"},
    {rating: 4, comment: "Beautiful foliage and rock formations. Hard to get parking but accessible through different trails."},
    {rating: 5, comment: "Nice place for hiking and see the fall! $10 parking fee"},
    {rating: 1, comment: "My friend just died here so I wouldn’t think it’s safe"},
    {rating: 4, comment: "Easy walk for young families. Beautiful views"},
    {rating: 5, comment: "The best place"},
    {rating: 4, comment: "Cool"},
    {rating: 5, comment: "We love this place for picnics and that we are walking around the lake"},
    {rating: 4, comment: "Very popular so a lot of people, but wonderfully beautiful. Wheel chair accessible from the Visitor's Center. A great family day experience. $10 to park which is reasonable for maintenance of the park fee."},
    {rating: 1, comment: "Nice place to hike around the lake, but the lack of usable restrooms is astounding.  This is a state park, and the state should be ashamed! The outhouses (portable toilets) were filthy, and the actual restrooms had no water so you couldn’t flush or wash your hands. I’m never going back unless I hear that the state installs working toilets and sinks!"},
    {rating: 4, comment: "Nice hike. Signage is pretty confusing, but very enjoyable area."},
    {rating: 5, comment: "Great trails. Make sure you have a map."},
    {rating: 5, comment: "One of my favorite park's to go for a walk in."},
    {rating: 5, comment: nil}, # I did two exemples when user can leave only raiting, unless you don't want to allow this, I mean if it's required to fill out
    {rating: 4, comment: nil},
    {rating: 3, comment: "Great walking"},
    {rating: 1, comment: "Rocks and dirt and bugs, eww"}
]

20.times do
    r = reviews.sample
    rating = r.values[0]
    comment =r.values[1]
    reviews = reviews.select {|review| review != r}

    hiker_id = rand(1..n_hikers)
    trail_id = rand(1..n_trails)
    Review.create(rating: rating, comment: comment, hiker_id: hiker_id, trail_id: trail_id)
end

puts "Seeding done!"