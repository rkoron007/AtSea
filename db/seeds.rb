# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user1 = User.create!({ username: 'USERNAME',password: 'PASSWORD' ,img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522954985/anchor.png"})
user2 = User.create!({ username: 'BoatLover',password: 'PASSWORD1', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957073/anchor2.jpg" })
user3 = User.create!({ username: 'Knotsar3C00l',password: 'PASSWORD2', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957185/seahorse.jpg" })
user4 = User.create!({ username: 'LandLubber',password: 'PASSWORD3', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957236/crab.jpg" })
user5 = User.create!({ username: 'BIRDS!',password: 'PASSWORD4', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957293/whale.jpg"})
user6 = User.create!({ username: 'poseidon#1',password: 'PASSWORD5', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957461/Poseidon_2.jpg" })
user7 = User.create!({ username: 'SailorGal',password: 'PASSWORD6', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957591/moon.png" })
user8 = User.create!({ username: 'PartyBooats',password: 'PASSWORD7', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957634/boat.jpg" })
user9 = User.create!({ username: 'HelloHallo',password: 'PASSWORD8', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957715/ocean.jpg" })
user10 = User.create!({ username: 'Parrots4Ever',password: 'PASSWORD9', img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957770/parrottsss.jpg" })

item1 = Item.create!({ title: 'Knotted Knot',
  description: 'I have no idea how to undo this. Halp.', price: 25, user_id: user1.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522885318/majorknot.jpg" })
item2 = Item.create!({ title: 'Solid Gold Boat',
  description: 'The highest quality solid gold boat. I am a genie I can make more.', price: 200000000, user_id: user2.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522878283/Broighter_Gold_2C_Dublin_2C_October_2010__2803_29.jpg" })
item3 = Item.create!({ title: 'Wooden Boat',
  description: 'Pretty good boat! +2 speed.', price: 100, user_id: user3.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522885461/wood_boat.jpg" })
item4 = Item.create!({ title: 'Iron Boat',
  description: 'This may be too heavy to float. Buy it anyway.', price: 1000, user_id: user4.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522885669/USS_Foote__DD-511__underway_at_sea__circa_in_1945.jpg" })
item5 = Item.create!({ title: 'Parrot',
  description: 'All this bird does is shit and talk. You know you want it.', price: 80, user_id: user5.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522885764/parrot.jpg" })
item6 = Item.create!({ title: 'The Pacific Ocean',
  description: 'I made this ocean. I can always make more. Want one?', price: 1, user_id: user6.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522885988/pacific.jpg" })
item7 = Item.create!({ title: 'Map of The Hidden Sea',
  description: 'Even I do not know where the hidden sea lay.
  But I know that I want to make money off you buying this map.',
  price: 50, user_id: user7.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522886045/World_Map_1689.jpg" })
item8 = Item.create!({ title: 'Tiddy Knot',
  description: 'A cute little knot.', price: 1, user_id: user8.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522886524/tidy.png" })
item9 = Item.create!({ title: 'Loyal Dog',
  description: 'Dogs are the best! You should totally get one. Like this one!', price: 0, user_id: user9.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522886660/dog.jpg" })
item10 = Item.create!({ title: 'Broken Compass',
  description: 'I got a ton of these things. Please buy one.', price: 50, user_id: user1.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522887179/valve-2971385_960_720_2.jpg" })
item11 = Item.create!({ title: 'Map of the Pacific Ocean',
  description: 'I painted it myself!', price: 30, user_id: user2.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522887317/Pacific-centric-map_2.png" })
item12 = Item.create!({ title: 'Sea Fairing Cat',
  description: 'WARNING: Do not let the sea fairing cat in the water',
  price: 10, user_id: user2.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522887390/cat.jpg" })
item13 = Item.create!({ title: 'This Compass Works!',
  description: 'I think...', price: 60, user_id: user2.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522957865/wcompass.jpg" })
item14 = Item.create!({ title: 'Map to Everywhere!',
  description: 'I can do any map you would like! Just let me know which you would prefer!', price: 10, user_id: user1.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959427/globe.png" })
item15 = Item.create!({ title: 'Unsinkable Boat',
  description: 'I got a ton of these totally unsinkable boats!', price: 2000, user_id: user3.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959477/Titanic_modelo_cropped.jpg" })
item16 = Item.create!({ title: 'Large Knot',
  description: 'Put this is any room for a more nautical feel.', price: 300, user_id: user4.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959526/bigknot.jpg" })
item17 = Item.create!({ title: 'Tiny Compass',
  description: 'So tiny you can store it in your sock! Oh man, that is what I should have called this. ', price: 5, user_id: user1.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959649/compass.png" })
item18 = Item.create!({ title: 'Large Boat',
  description: 'Solid large boat. Will definetly carry you many large places.', price: 1200, user_id: user2.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959695/largeboat.jpg" })
item19 = Item.create!({ title: 'Paper Boat',
  description: 'Totally safe to boat in.', price: 50, user_id: user3.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959734/paper.jpg" })
item20 = Item.create!({ title: 'Large Compass',
  description: 'Much better than tiny compass.', price: 2, user_id: user9.id,
  img_url:"http://res.cloudinary.com/dkaolr6pg/image/upload/v1522959804/largecompass.jpg" })


review1 = Review.create!({author_id: user1.id, item_id: 1, rating: 5, body: "I'd buy it."})
review1 = Review.create!({author_id: user2.id, item_id: 1, rating: 5, body: "I'd buy it."})
review1 = Review.create!({author_id: user3.id, item_id: 1, rating: 5, body: "I'd buy it."})
review1 = Review.create!({author_id: user4.id, item_id: 1, rating: 5, body: "I'd buy it."})
