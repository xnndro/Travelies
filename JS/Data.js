let tags = ["Hiking","Camping","Fishing"]
let idxcards = 0;
let index= 0;
let hiking_pict = ["../Assets/img/Destination/Hiking/Semeru.png",
                    "../Assets/img/Destination/Hiking/Blanc.png",
                    "../Assets/img/Destination/Hiking/Aco.png",
                    "../Assets/img/Destination/Hiking/Kili.png",
                    "../Assets/img/Destination/Hiking/Kenya.png",
                    "../Assets/img/Destination/Hiking/Kina.png"]
let hiking_pict_similiar = ["../../Assets/img/Destination/Hiking/Semeru.png",
                    "../../Assets/img/Destination/Hiking/Blanc.png",
                    "../../Assets/img/Destination/Hiking/Aco.png",
                    "../../Assets/img/Destination/Hiking/Kili.png",
                    "../../Assets/img/Destination/Hiking/Kenya.png",
                    "../../Assets/img/Destination/Hiking/Kina.png"]
let hiking_pict_details = [ "../../Assets/img/Details/Adventure/Hiking/Semeru.png",
                            "../../Assets/img/Details/Adventure/Hiking/Blanc.png",
                            "../../Assets/img/Details/Adventure/Hiking/Aco.png",
                            "../../Assets/img/Details/Adventure/Hiking/Kili.png",
                            "../../Assets/img/Details/Adventure/Hiking/Kenya.png",
                            "../../Assets/img/Details/Adventure/Hiking/Kina.png"]
let hiking_name = ["Mount Semeru","Mount Blanc","Mount Aconcagua","Mount Kilimanjaro","Mount Kenya","Mount Kinabalu"]
let hiking_visited = ["1000","1500","500","600","900","800"]
let hiking_desc = ["Semeru, or Mount Semeru, is an active volcano in East Java, Indonesia. It is located in a subduction zone, where the Indo-Australian plate subducts...",
                    "Mont Blanc is the highest mountain in the Alps and Western Europe, rising 4,807.81 m above sea level. It is the second-most prominent mountain...",
                    "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in...",
                    "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa...",
                    "Mount Kenya is the highest mountain in Kenya and the second-highest in Africa, after Kilimanjaro. The highest peaks of the mountain are Batian...",
                    "Mount Kinabalu is the highest mountain in Borneo and Malaysia. With an elevation of 13,435 feet, it is third-highest peak of an island on Earth... "]
let hiking_desc_details = ["Semeru, or Mount Semeru, is an active volcano in East Java, Indonesia. It is located in a subduction zone, where the Indo-Australian plate subducts under the Eurasia plate. It is the highest mountain on the island of Java.",
                            "Mont Blanc is the highest mountain in the Alps and Western Europe, rising 4,807.81 m above sea level. It is the second-most prominent mountain in Europe, after Mount Elbrus, and it is the eleventh most prominent mountain summit in the world.",
                            "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in the Americas, the highest outside Asia, and the highest in the Southern Hemisphere",
                            "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa and the highest single free-standing mountain above sea level in the world: 5,895 metres above sea level.",
                            "Mount Kenya is the highest mountain in Kenya and the second-highest in Africa, after Kilimanjaro. The highest peaks of the mountain are Batian, Nelion and Point Lenana.",
                            "Mount Kinabalu is the highest mountain in Borneo and Malaysia. With an elevation of 13,435 feet, it is third-highest peak of an island on Earth, and 20th most prominent mountain in the world by topographic prominence."]
let hiking_location = ["Indonesia","France","Argentina","Tanzania","Kenya","Borneo"]
let hiking_price = ["IDR 20.000.000,-","IDR 30.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-"]

let camping_pict = ["../Assets/img/Destination/Camping/Banff.png",
                    "../Assets/img/Destination/Camping/Cook.png",
                    "../Assets/img/Destination/Camping/Aca.png",
                    "../Assets/img/Destination/Camping/Oza.png",
                    "../Assets/img/Destination/Camping/Texas.png",
                    "../Assets/img/Destination/Camping/Big.png"]
let camping_pict_similiar = ["../../Assets/img/Destination/Camping/Banff.png",
                    "../../Assets/img/Destination/Camping/Cook.png",
                    "../../Assets/img/Destination/Camping/Aca.png",
                    "../../Assets/img/Destination/Camping/Oza.png",
                    "../../Assets/img/Destination/Camping/Texas.png",
                    "../../Assets/img/Destination/Camping/Big.png"]
let camping_pict_details = [ "../../Assets/img/Details/Adventure/Camping/Banff.png",
                    "../../Assets/img/Details/Adventure/Camping/Cook.png",
                    "../../Assets/img/Details/Adventure/Camping/Aca.png",
                    "../../Assets/img/Details/Adventure/Camping/Ozka.png",
                    "../../Assets/img/Details/Adventure/Camping/Texas.png",
                    "../../Assets/img/Details/Adventure/Camping/Big.png"]
let camping_name = ["Banff","Cook National Park","Acadia National Park","The Ozark","Texas Hill Country","Big Bend National"]
let camping_visited = ["900","500","1500","600","800","1000"]
let camping_desc = ["Spreading along the Canadian Rockies, this destination is one of the most scenic National Parks in Canada. There’s something for everyone in this little slice of heaven, with ...",
                    "Aoraki/Mount Cook National Park is in the South Island of New Zealand. Aoraki / Mount Cook, New Zealand's highest mountain, and the eponymous village lie within the park...",
                    "Forty-seven thousand acres off the Atlantic coast you’ll find Acadia National Park. Home to extraordinary wildlife like moose, bears, whales, and sea animals, this stunning piece...",
                    "The Ozarks, also known as the Ozark Mountains, span across southern Missouri. This destination has long been a must-see for adventure-seekers looking to explore...",
                    "West of Austin and north of San Antonio, Texas’ Hill Country provides ample opportunities for beautiful nature, museums and history, and shopping. Explore Fredericksburg...",
                    "Looking for awe-inspiring views? Big Bend National Park is an adventure seekers paradise year-round. Steep mountains and cliffs, rocky terrain, and the Rio Grande combine to..."]
let camping_location = ["Canada","New Zealand","Maine","Missouri","San Antonio","Texas"]
let camping_desc_details = ["Spreading along the Canadian Rockies, this destination is one of the most scenic National Parks in Canada. There’s something for everyone in this little slice of heaven, with towering mountains, scenic valleys, peaks, and glacier-fed lakes and rivers. Nestled high in the mountains of the Banff National Park, the quaint town awaits you.",
                    "Aoraki/Mount Cook National Park is in the South Island of New Zealand. Aoraki / Mount Cook, New Zealand's highest mountain, and the eponymous village lie within the park.",
                    "Forty-seven thousand acres off the Atlantic coast you’ll find Acadia National Park. Home to extraordinary wildlife like moose, bears, whales, and sea animals, this stunning piece of northeastern US is the perfect national park to visit in 2022. Hike The Beehive or Cadillac Mountain for views over the rocky landscape. Looking to relax with a bit more comfort? Check out Bar Harbor, a popular seaside town perfect for a quiet getaway or to end your outdoor adventure.",
                    "The Ozarks, also known as the Ozark Mountains, span across southern Missouri. This destination has long been a must-see for adventure-seekers looking to explore woodlands, limestone bluffs, and caves, and travelers are finally catching on to its beauty, making this one of our top recommended destinations to camp in 2022.",
                    "West of Austin and north of San Antonio, Texas’ Hill Country provides ample opportunities for beautiful nature, museums and history, and shopping. Explore Fredericksburg, choose between 100 wineries in the area, or hike Enchanted Rock Natural State Area.",
                    "Looking for awe-inspiring views? Big Bend National Park is an adventureseekers paradise year-round. Steep mountains and cliffs, rocky terrain, and the Rio Grande combine to make this area an outstanding outdoor playground for hikers, campers, canoers, photographers, and nature lovers alike."]
let camping_price = ["IDR 20.000.000,-","IDR 30.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-"]

let fishing_pict = ["../Assets/img/Destination/Fishing/Bay.png",
                    "../Assets/img/Destination/Fishing/Lizard.png",
                    "../Assets/img/Destination/Fishing/Ocra.png",
                    "../Assets/img/Destination/Fishing/Izta.png",
                    "../Assets/img/Destination/Fishing/Betty.png",
                    "../Assets/img/Destination/Fishing/Malindi.png"]
let fishing_pict_similiar = ["../../Assets/img/Destination/Fishing/Bay.png",
                    "../../Assets/img/Destination/Fishing/Lizard.png",
                    "../../Assets/img/Destination/Fishing/Ocra.png",
                    "../../Assets/img/Destination/Fishing/Izta.png",
                    "../../Assets/img/Destination/Fishing/Betty.png",
                    "../../Assets/img/Destination/Fishing/Malindi.png"]
let fishing_pict_details = [ "../../Assets/img/Details/Adventure/Fishing/Bay.png",
                            "../../Assets/img/Details/Adventure/Fishing/Lizard.png",
                            "../../Assets/img/Details/Adventure/Fishing/Ocra.png",
                            "../../Assets/img/Details/Adventure/Fishing/Izta.png",
                            "../../Assets/img/Details/Adventure/Fishing/Betty.png",
                            "../../Assets/img/Details/Adventure/Fishing/Malindi.png"]
let fishing_name = ["Bay Awang","Lizard Island","Ocracoke Island","Iztapa","Betty Lake","Malindi"]
let fishing_visited = ["1000","1500","500","600","900","800"]
let fishing_desc = ["Awang Bay is a bay in southeast Lombok, Indonesia, about 800 metres from the village of Ekas. It is a reputable surfing location.Cliffs overlook...",
                    "As the northern most resort on the Great Barrier Reef, and a luxury lodge of Australia, Lizard Island is truly secluded from the rest of the world...",
                    "Ocracoke is a village on Ocracoke Island, part of North Carolina's coastal Outer Banks region. The landmark 1823 Ocracoke Lighthouse overlooks the... ",
                    "Champerico town and port is situated in the southwestern region of Guatemala. Champerico Guatemala is one of the country’s Iztapa...",
                    "There are several good campsites along Betty Lake, see comments. The short distance into this lake makes it a popular spot for those interested...",
                    "The waters off Malindi, on Kenya’s central coast, offer one of the few places on the planet where anglers can realistically hope to accomplish a billfish... "]
let fishing_desc_details = ["Awang Bay is a bay in southeast Lombok, Indonesia, about 800 metres from the village of Ekas. It is a reputable surfing location. Cliffs overlook the bay from both sides.",
                    "As the northern most resort on the Great Barrier Reef, and a luxury lodge of Australia, Lizard Island is truly secluded from the rest of the world. This is just one wonderful Lizard Island fact that makes it like nowhere else. ",
                    "Ocracoke is a village on Ocracoke Island, part of North Carolina's coastal Outer Banks region. The landmark 1823 Ocracoke Lighthouse overlooks the village and Pamlico Sound. ",
                    "Champerico town and port is situated in the southwestern region of Guatemala. Champerico Guatemala is one of the country’s Iztapa, Guatemala is located on the shores of the Pacific Ocean and is surrounded by Michatoya and Maria Linda rivers.",
                    "There are several good campsites along Betty Lake, see comments. The short distance into this lake makes it a popular spot for those interested in carrying a lightweight fishing boat and camping gear. ",
                    "The waters off Malindi, on Kenya’s central coast, offer one of the few places on the planet where anglers can realistically hope to accomplish a billfish royal slam, or even a fantasy slam. The latter (which has been done here a number of times) "]
let fishing_location = ["Indonesia","Australia","Carolina","Guatemala","Colorado","Kenya"]
let fishing_price = ["IDR 20.000.000,-","IDR 30.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-","IDR 10.000.000,-","IDR 20.000.000,-"]
let review_image = ["../../Assets/img/Details/Adventure/User/user1.png",
                    "../../Assets/img/Details/Adventure/User/user2.png",
                    "../../Assets/img/Details/Adventure/User/user3.png",
                    "../../Assets/img/Details/Adventure/User/user4.png",
                    "../../Assets/img/Details/Adventure/User/user5.png",
                    "../../Assets/img/Details/Adventure/User/user6.png"]
let review_name = ["Andriana","Letty","Bobby","Alice","Janny","Rudy"]
let review_period =["Jan 1, 2022","Feb 2, 2022","Mar 5, 2022", "Apr 6, 2022","June 8, 2022","Aug 6, 2022"]
let review_ratings = ["5.0/5.0","5.0/5.0","5.0/5.0","4.5/5.0","3.5/5.0","4.0/5.0"]
let review_comment = ["WWoah, of all the destinations I've tried, this destination really made an impression on my heart, those of you who are reading this review can make plans to try this destination, I guarantee you won't regret it.",
                    "The service was amazing, all the trips were very enjoyable, and I will invite all my family to come to this tour. Isn't that a really fun thing? I can't wait for it too",
                    "Cool, the destination is very beautiful, or even too beautiful. I am amazed by the beauty of the environment, and I believe you will also be amazed by the environment. How beautiful Allah created this world, this nature is very very beautiful.",
                    "Awesome, you will never see nature as beautiful as this destination, I'm so happy!!!! This destination makes me feel relieved after working too long, so I can say this is the right refreshing destination for those of you who are tired of working.",
                    "I was a little surprised that too many insects came to our place, but we are very happy for all the services and unforgettable experience.",
                    "I can't say anymore, this natural beauty is too magical. I have never found a destination as beautiful as this one. Everything is so beautiful, thank you for the experience!"]
