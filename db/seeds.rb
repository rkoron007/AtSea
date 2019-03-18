# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
user1 = User.create!({ username: 'USERNAME',password: 'PASSWORD' ,img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522954985/anchor.png"})
user2 = User.create!({ username: 'BoatLover',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957073/anchor2.jpg" })
user3 = User.create!({ username: 'Knotsar3C00l',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957185/seahorse.jpg" })
user4 = User.create!({ username: 'LandLubber',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957236/crab.jpg" })
user5 = User.create!({ username: 'BIRDS!',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957293/whale.jpg"})
user6 = User.create!({ username: 'poseidon#1',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957461/Poseidon_2.jpg" })
user7 = User.create!({ username: 'SailorGal',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957591/moon.png" })
user8 = User.create!({ username: 'PartyBooats',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957634/boat.jpg" })
user9 = User.create!({ username: 'HelloHallo',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957715/ocean.jpg" })
user10 = User.create!({ username: 'Parrots4Evar',password: 'PASSWORD', img_url:"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957770/parrottsss.jpg" })

Item.destroy_all
item1 = Item.new({ title: 'Knotted Knot1',
  description: 'I have no idea how to undo this. Halp.', price: 25, user_id: user1.id})
  item1.photo.attach(io: File.open(File.join(Rails.root, "/app/assets/images/knot.png")), filename: 'knot.png', content_type: 'pdf')

  item1 = Item.new({ title: 'Knotted Knot1',
  description: 'I have no idea how to undo this. Halp.', price: 25, user_id: 1})
  require 'open-uri'
 item1.photo.attach(io:  open("https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"), filename: 'knot.png', content_type: 'pdf')
  # item1 = Item.new({ title: 'Knotted Knot1',
  # description: 'I have no idea how to undo this. Halp.', price: 25, user_id: 1})
  # item1.photo.attach(io: File.open(File.join(Rails.root, "/app/assets/images/knot.png")), filename: 'knot.png', content_type: 'pdf')
  # item1.save!
# item2 = Item.new({ title: 'Solid Gold Boat',
#   description: 'The highest quality solid gold boat. I am a genie I can make more.', price: 200000000, user_id: user2.id})
#   item2.photo.attach(io: File.open('./app/assets/images/boat.jpg'), filename: 'boat.pdf', content_type: 'pdf')
#   item2.save!
  
#   item3 = Item.new({ title: 'Wooden Boat',
#     description: 'Pretty good boat! +2 speed.', price: 100, user_id: user3.id})
#     item3.photo.attach(io: File.open('./app/assets/images/wood_boat.jpg'), filename: 'woodboat.pdf', content_type: 'pdf')
#     item3.save!
    
#   item4 = Item.new({ title: 'Iron Boat',
#     description: 'This may be too heavy to float. Buy it anyway.', price: 1000, user_id: user4.id})
#     item4.photo.attach(io: File.open('./app/assets/images/USS_Foote__DD-511__underway_at_sea__circa_in_1945.jpg'), filename: 'steelboat.pdf', content_type: 'pdf')
#     item4.save!
    
    
#   item5 = Item.new({ title: 'Parrot',
#     description: 'All this bird does is shit and talk. You know you want it.', price: 80, user_id: user5.id})
#     item5.photo.attach(io: File.open('./app/assets/images/parrot.jpg'), filename: 'parrot.pdf', content_type: 'pdf')
#     item5.save!
      
#   item6 = Item.new({ title: 'The Pacific Ocean',
#     description: 'I made this ocean. I can always make more. Want one?', price: 1, user_id: user6.id})
#     item6.photo.attach(io: File.open('./app/assets/images/pacific.jpg'), filename: 'ocean.pdf', content_type: 'pdf')
#     item6.save!
    
#     item7 = Item.new({ title: 'Map of The Hidden Sea',
#       description: 'Even I do not know where the hidden sea lay.
#       But I know that I want to make money off you buying this map.',
#       price: 50, user_id: user7.id})
#     item7.photo.attach(io: File.open('./app/assets/images/World_Map_1689.jpg'), filename: 'map.pdf', content_type: 'pdf')
#     item7.save!
    
#     item8 = Item.new({ title: 'Tidy Knot',
#       description: 'A cute little knot.', price: 1, user_id: user8.id })
#     item8.photo.attach(io: File.open('./app/assets/images/knot.png'), filename: 'knot.pdf', content_type: 'pdf')
#     item8.save!
#     item9 = Item.new({ title: 'Loyal Dog',
#       description: 'Dogs are the best! Best animal! You should totally get one. Like this one!', price: 0, user_id: user9.id})
#     item9.photo.attach(io: File.open('./app/assets/images/dog.jpg'), filename: 'dog.pdf', content_type: 'pdf')
#     item9.save!
    
#     item10 = Item.new({ title: 'Broken Compass',
#       description: 'I got a ton of these things. Please buy one.', price: 50, user_id: user1.id})
#     item10.photo.attach(io: File.open('./app/assets/images/compass.jpg'), filename: 'compass.pdf', content_type: 'pdf')
#     item10.save!
    #   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522887179/valve-2971385_960_720_2.jpg" })
# item11 = Item.new({ title: 'Map of the Pacific Ocean',
#   description: 'I painted it myself!', price: 30, user_id: user2.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522887317/Pacific-centric-map_2.png" })
# item12 = Item.new({ title: 'Sea Faring Cat',
#   description: 'WARNING: Do not let the sea fairing cat in the water. This animal will eat you.',
#   price: 10, user_id: user2.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522887390/cat.jpg" })
# item13 = Item.new({ title: 'This Compass Works!',
#   description: 'I think...', price: 60, user_id: user2.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522957865/wcompass.jpg" })
# item14 = Item.new({ title: 'Map to Everywhere!',
#   description: 'I can do any map you would like! Just let me know which you would prefer!', price: 10, user_id: user1.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959427/globe.png" })
# item15 = Item.new({ title: 'Unsinkable Boat',
#   description: 'I got a ton of these totally unsinkable boats!', price: 2000, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959477/Titanic_modelo_cropped.jpg" })
# item16 = Item.new({ title: 'Large Knot',
#   description: 'Put this is any room for a more nautical feel.', price: 300, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959526/bigknot.jpg" })
# item17 = Item.new({ title: 'Tiny Compass',
#   description: 'So tiny you can store it in your sock! Oh man, that is what I should have called this. ', price: 5, user_id: user1.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959649/compass.png" })
# item18 = Item.new({ title: 'Large Boat',
#   description: 'Solid large boat. Will definetly carry you many large places.', price: 1200, user_id: user2.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959695/largeboat.jpg" })
# item19 = Item.new({ title: 'Paper Boat',
#   description: 'Totally safe to boat in.', price: 50, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959734/paper.jpg" })
# item20 = Item.new({ title: 'Large Compass',
#   description: 'Much better than tiny compass.', price: 200, user_id: user9.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1522959804/largecompass.jpg" })
# item21 = Item.new({ title: 'Crab',
#   description: 'This guy will mess you up. For real. Fish avoid.', price: 30, user_id: user1.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523562707/crab-2525186_960_720.png" })
# item22 = Item.new({ title: 'Tiny Fish',
#   description: 'So little. So wanted.', price: 4000, user_id: user2.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523562776/tiny.jpg" })
# item23 = Item.new({ title: 'Island',
#   description: 'COME GETYA ISLAND HERE!.', price: 10000000000, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523562867/island-2482200_960_720.jpg" })
# item24 = Item.new({ title: 'WeatherVane',
#   description: 'I mean come on. It goes with the theme of everything in your house. Get it.', price: 300, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,w_600/v1523562985/weather.jpg" })
# item25 = Item.new({ title: 'Useless Wheel',
#   description: 'This doesnt even work.But buy it anyway.', price: 60, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563142/wood_wheel.jpg" })
# item26 = Item.new({ title: 'Chains',
#   description: 'Everyone needs some chain chain chainssss.', price: 10, user_id: user5.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563241/nautical-cables-1788387_960_720.jpg" })
# item27 = Item.new({ title: 'Picture of Boat',
#   description: 'Not as good as the real thing- but faster to make.', price: 5000, user_id: user6.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563308/schooner-3229657_960_720.jpg" })
# item28 = Item.new({ title: 'Model Boat',
#   description: 'For when you get off your boat but still want to look at a boat.', price: 2, user_id: user7.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563418/model_ship.jpg" })
# item29 = Item.new({ title: 'Ropes',
#   description: 'Every boat could always use more ropes.', price: 60, user_id: user8.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563530/ropes.jpg" })
# item30 = Item.new({ title: 'LightHouse Cove',
#   description: 'I own so many light houses. Please buy themmmmm.', price: 20000, user_id: user9.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563823/light_house.jpg" })
# item31 = Item.new({ title: 'SpyGlass',
#   description: 'Binoculars! But for one eye! Much better.', price: 25, user_id: user10.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523563953/spyglass.jpg" })
# item32 = Item.new({ title: 'Pretty Compass',
#   description: 'Like your compass but prettier.', price: 2000, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523564107/nautical_compass.jpg" })
# item33 = Item.new({ title: 'Blue Parrot',
#   description: 'Dont. Make. Eye Contact. This bird will eat you.', price: 20, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523564341/blue_parrot.jpg" })
# item34 = Item.new({ title: 'Shy Seahorse',
#   description: 'This fish is just a shy guy but that just makes you want him more.', price: 10, user_id: user5.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523564430/seahorse-2335646_960_720.jpg" })
# item35 = Item.new({ title: 'Fancy Seahorse',
#   description: 'This fish is Fancier than thou.', price: 1000, user_id: user7.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523564618/sea-dragon.jpg" })
# item36 = Item.new({ title: 'BIG BIRD',
#   description: 'No not that other guy.', price: 300, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523643760/bird.jpg" })
# item37 = Item.new({ title: 'tiny bird',
#   description: 'Soooooo little! <3.', price: 40000, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523645558/tiny-bird.jpg" })
# item38 = Item.new({ title: 'Pigeon',
#   description: 'What? I found it. I sell it- it is not weird.This bird is too cool.', price: 1000, user_id: user7.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523645623/pidge.jpg" })
# item39 = Item.new({ title: 'Sweet Seagull',
#   description: 'You know you need like 4 of these guys as your hype birds.', price: 50, user_id: user6.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523645669/seagull-249638_960_720.jpg" })
# item40 = Item.new({ title: 'Spike Fish',
#   description: 'So cuddly!.', price: 10, user_id: user3.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523645793/1280px-Pterois_volitans_Manado-e_edit.jpg" })
# item41 = Item.new({ title: 'Crazy Rope',
#   description: 'It is EVERYWHERE!', price: 400, user_id: user8.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523645893/dew-rope-brown-rein-knitting-strand-beige-leash-shipping-maritime-cordage-ship-traffic-jams-fixing-ship-accessories-loose-ocher-hardware-accessory-760214.jpg" })
# item42 = Item.new({ title: 'Small Rope',
#   description: 'Not very useful. But cute!', price: 4, user_id: user9.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646011/rope-2437560_960_720.jpg" })
# item43 = Item.new({ title: 'Rope',
#   description: 'What do you want? GET THAT ROPE.', price: 100, user_id: user6.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646089/800px-A_aesthetic_rope_2.jpg" })
# item44 = Item.new({ title: 'Rope Ball',
#   description: 'Your job to untie.', price: 300, user_id: user1.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646138/Rope-Ball-Brown-Decoration-Three-Balls-Sphere-1417400.jpg" })
# item45 = Item.new({ title: 'Hippo',
#   description: 'Who does not need this animal in their lives?', price: 5000, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646629/Hippo_at_dawn.jpg" })
# item46 = Item.new({ title: 'Sea Lion',
#   description: 'A cool animal friend!', price: 500, user_id: user6.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646675/sea-lion-2662860_960_720.jpg" })
# item47 = Item.new({ title: 'Monkey',
#   description: 'Teach this little animal do drive your ship!', price: 3000, user_id: user1.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646729/moneky.jpg" })
# item48 = Item.new({ title: 'Map to Your House',
#   description: 'In case your get lost.', price: 30, user_id: user5.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646784/NPS_white-house-3d-map.jpg" })
# item49 = Item.new({ title: 'Map To Who Knows Where',
#   description: 'Seriously- who knows where?', price: 20, user_id: user6.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600/v1523646874/map_to_who_knows.jpg" })
# item50 = Item.new({ title: 'Atlanic Ocean Map',
#   description: 'Need I say more?', price: 3000, user_id: user4.id,
#   :"https://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_600,w_600/v1523646964/739px-North_Atlantic_Ocean_laea_relief_location_map.jpg" })

Review.destroy_all
# Review.create!({author_id: user1.id, item_id: item1.id, rating: 5, body: "I love this nautical item."})
# Review.create!({author_id: user2.id, item_id: item1.id, rating: 1, body: "I'm not sure bout this one."})
# Review.create!({author_id: user3.id, item_id: item1.id, rating: 5, body: "I'd buy it. Or would I?"})
# Review.create!({author_id: user4.id, item_id: item1.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user3.id, item_id: item4.id, rating: 4, body: "This is so cool. I'm going to buy 50."})
# Review.create!({author_id: user2.id, item_id: item5.id, rating: 5, body: "I need this thingggg"})
# Review.create!({author_id: user9.id, item_id: item6.id, rating: 3, body: "I'm a big fan of items"})
# Review.create!({author_id: user8.id, item_id: item7.id, rating: 2, body: "Quality was bad. But still made me smile."})
# Review.create!({author_id: user6.id, item_id: item8.id, rating: 1, body: "Duuuuuuuuuuuuuuuuuuuuuuude."})
# Review.create!({author_id: user6.id, item_id: item9.id, rating: 4, body: "I had so much fun with this!"})
# Review.create!({author_id: user5.id, item_id: item10.id, rating: 3, body: "But why?"})
# Review.create!({author_id: user4.id, item_id: item11.id, rating: 2, body: "I feel like I'd like this but in pink."})
# Review.create!({author_id: user2.id, item_id: item12.id, rating: 1, body: "HEEEEEEEEEYAAAAAAAA. Hated it."})
# Review.create!({author_id: user1.id, item_id: item13.id, rating: 5, body: "OHMYGOD"})
# Review.create!({author_id: user1.id, item_id: item20.id, rating: 4, body: "its okay"})
# Review.create!({author_id: user2.id, item_id: item14.id, rating: 2, body: "If I had money this would be mine."})
# Review.create!({author_id: user3.id, item_id: item15.id, rating: 1, body: "I have money but I hate this."})
# Review.create!({author_id: user4.id, item_id: item16.id, rating: 4, body: "I'm amazing you can keep making these!"})
# Review.create!({author_id: user5.id, item_id: item17.id, rating: 3, body: "But did you think you'd really like it?"})
# Review.create!({author_id: user8.id, item_id: item18.id, rating: 2, body: "I didn't really enjoy this that much."})
# Review.create!({author_id: user9.id, item_id: item19.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item20.id, rating: 5, body: "I thought this was pretty cool"})
# Review.create!({author_id: user9.id, item_id: item21.id, rating: 1, body: "It's pretty bad."})
# Review.create!({author_id: user10.id, item_id: item22.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item23.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item24.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item25.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item26.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item27.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item28.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item29.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item30.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item31.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item32.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item33.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user10.id, item_id: item34.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user9.id, item_id: item35.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user4.id, item_id: item22.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user3.id, item_id: item29.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user2.id, item_id: item23.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user4.id, item_id: item24.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user9.id, item_id: item24.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user2.id, item_id: item34.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user3.id, item_id: item18.id, rating: 5, body: "ILOVETHIS"})
# Review.create!({author_id: user4.id, item_id: item27.id, rating: 1, body: "Nope."})
# Review.create!({author_id: user1.id, item_id: item26.id, rating: 5, body: "ILOVETHIS"})

Favorite.destroy_all
# Favorite.create!({user_id: user2.id, item_id: item1.id})
# Favorite.create!({user_id: user2.id, item_id: item3.id})
# Favorite.create!({user_id: user1.id, item_id: item1.id})

# Chat.destroy_all
# chat1 = Chat.create!({title: "General Chat"})
# chat2 = Chat.create!({title: "Animal Lovers"})

# Message.destroy_all
# message1 = Message.create!({sender_id: user1.id, chat_id: chat1.id, body:'Yooooo'})
# message2 = Message.create!({sender_id: user2.id, chat_id: chat1.id, body:'Love Dogs'})