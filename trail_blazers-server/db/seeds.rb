puts "Start seeding"

puts "Creating hikers..."
n_hikers = 20

n_hikers.times do
    gender = ['men', 'women'].sample
    name = gender == 'men' ? Faker::Name.male_first_name : Faker::Name.female_first_name
    last_name = Faker::Name.last_name
    picture = ["https://randomuser.me/api/portraits/thumb/#{ gender }/#{ rand(1..70) }.jpg", nil].sample
    Hiker.create(name: "#{ name } #{ last_name }", picture: picture)
end 
puts "Hikers done" 

puts "Creating trails..."
parks = ["Black Rock Forest", "Teatown Lake Reservation", "Alley Pond Park", "Penn State Forest", "Umpqua National Forest", "Catskill Park", 
    "Mount Rainier National Park", "Badlands National Park", "Lake Clark National Park & Preserve", "Bryce Canyon National Park", "Rio Grande Nature Center State Park", 
    "Hyde Memorial State Park", "Cerrillos Hills State Park", "White Sands National Park", "Schmidts Woods Park", "Harriman State Park", "Hickory Run State Park", 
    "Tuscarora State Forest", "Buchanan State Forest", "Sleepy Creek Wildlife Management Area"]
trails = ["Peekaboo Trail", "Fairyland Trail", "The Watchman Trail", "Creek Trail", "Great Head Trail", "Jordan Pond Path", "Compass Rock", "Devil's Path", 
    "Eagle Mountain", "Hunter Road Trail", "Rio Grande Nature Trail", "Borrego Trail", "Hills Trail", "Alkali Flat Trail", "Playa Trail", "Mill Creek Marsh Trail",
    "Hemlock Trail Head", "Beacon Trail", "Shockeys Knob Trailhead", "Central Trail"]
photos = ["https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_50,w_740/v1/clients/virginiabeachva/144_3_2283_jpeg_2af5fb02-5a69-4104-8670-15a4bbfaee3d.jpg", 
    "https://www.thurstontalk.com/wp-content/uploads/2020/05/Millersylvania-State-Park-Thurston-County-Hiking-scaled.jpg", 
    "https://dsqeev865ph38.cloudfront.net/media/original_images/off-shakamak-state-park-in.jpg", 
    "https://www2.illinois.gov/dnr/RotatorImages/360600/Matthiessen.3681.C.360600.jpg", 
    "https://i.insider.com/5db07749045a31009a7b0b22?width=700", "https://tnstateparks.com/assets/images/content-images/social-media-images/david-crockett.jpg", 
    "https://365atlantatraveler.com/wp-content/uploads/2014/08/DSC_0128-5.jpg", 
    "https://www.alapark.com/sites/default/files/styles/default/public/2018-05/cheaha_lake_pier.jpg?itok=RpsbRr0i", 
    "https://img1.10bestmedia.com/Images/Photos/382049/GettyImages-507252540_54_990x660.jpg", 
    "https://media.istockphoto.com/photos/american-desert-sunset-with-cacti-and-mountain-picture-id497274553?k=20&m=497274553&s=612x612&w=0&h=CkrYllBaHCU-WpcMslkhUwvvLbaitvoBkDbkQ7RhMec=", 
    "https://travelnevada.com/wp-content/uploads/2014/04/VOF_Desktop.jpg", "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/08/24/a0/us-hiking-trails_ss_001.rend.hgtvcom.966.725.suffix/1491580965291.jpeg", 
    "https://cdn.vox-cdn.com/thumbor/fu9OVyTJgkgEJ0uJWQj6JI17cUA=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19370217/shutterstock_1356281234.jpg", 
    "https://static.onecms.io/wp-content/uploads/sites/28/2020/07/10/yosemite-national-park-falls-trail-CALIHIKES0720.jpg", 
    "https://d3qvqlc701gzhm.cloudfront.net/thumbs/d42bcc88960e7d101ea038afc049c2624f7ae7ac06541183b174f54c68bdcbd8-750.jpg", 
    "https://www.region18.org/uploaded/faculty/ltraver/Dylan/trail.jpg", 
    "https://www.turkeyrunstatepark.com/wp-content/uploads/2020/10/rocky_hollow2.jpg", 
    "https://d2exd72xrrp1s7.cloudfront.net/www/guide/31731/1FCrga?width=800&height=560&crop=true&q=40", 
    "https://www.planetware.com/photos-large/USMN/minnesota-jay-cooke-state-park-silver-creek-trail-st-louis-river.jpg",
    "https://cdn.securem2.com//commonimages/pages/2021/8/mountainrangefall.jpg"]
attractions = ["Waterfall", "Wildflowers", "Scenic View", "Lake", "Historic Feature", "Bridge", "Cliffs", "Wild Animals", "Cave", "Mountain", "River", "Overlook", nil]
n_trails = 20

n_trails.times do
    park = parks.sample
    parks = parks.select {|p| p != park}

    trail = trails.sample
    trails = trails.select {|t| t != trail}

    park_location = "#{ Faker::Address.street_address }, #{ Faker::Address.city }, #{ Faker::Address.state_abbr } #{ Faker::Address.zip }, USA"
    difficulty = ['Easy', 'Moderate', 'Hard'].sample
    length = rand(0.4..22).to_f.round(2)
    duration = length.ceil*20 
    attraction = attractions.sample
    trail_type = ['Loop', 'Out & back', 'Point to point'].sample
    
    trail_picture = photos.sample
    photos = photos.select {|p| p != trail_picture}

    Trail.create(park_name: park, trail_name: trail, location: park_location, difficulty: difficulty, length: length, duration: duration, attraction: attraction, trail_type: trail_type, trail_picture: trail_picture)
end
puts "Trails done..."

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
    {rating: 5, comment: nil}, 
    {rating: 4, comment: nil},
    {rating: 3, comment: "Great walking"},
    {rating: 1, comment: "Rocks and dirt and bugs, eww"},
    {rating: 3, comment: nil}, 
    {rating: 2, comment: nil},
    {rating: 3, comment: "These directions were so very helpful and accurate. We had a good hike; remember tick protection because there are some grassy areas. We used picardin and seem to have come.back clean. Thanks for these fantastic directions and cues!"},
    {rating: 1, comment: nil},
    {rating: 3, comment: "Lost cell reception before we made it to the parking area so a hard copy/offline map is a good idea"},
    {rating: 3, comment: "Fun in the snow! Didn't have to dodge bikers today!"},
    {rating: 3, comment: "The trail was in pretty good shape. As always you should have a very good pair of trail running shoes to take it on. I named this trip “Wrong & Redundant” because I chose to take each time marked “wrong way”, and in doing so, ended having to retrace my steps multiple times. There weren’t any bikes on the trail, but I’d there were, I’d prefer to see them coming and be able to step out of the way. The best part is always running the ramps in the dirt park. Has a very Sonic feel. "},
    {rating: 1, comment: "Too many mosquitoes!!"},
    {rating: 2, comment: "Very confusing trail and mainly used for bikers. "},
    {rating: 2, comment: "It’s like a maze/jungle in here"}
]

30.times do
    r = reviews.sample
    rating = r.values[0]
    comment =r.values[1]
    reviews = reviews.select {|review| review != r}
    hiker_id = rand(1..n_hikers)
    trail_id = rand(1..n_trails)
    created_at = Faker::Date.birthday(min_age: 0, max_age: 10)
    Review.create(rating: rating, comment: comment, created_at: created_at, updated_at: created_at, hiker_id: hiker_id, trail_id: trail_id)
end
puts "Reviews done"

puts "Seeding done!"