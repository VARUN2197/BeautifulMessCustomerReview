document.addEventListener('DOMContentLoaded', () => {

    const reviewsContainer = document.getElementById('reviews-container');
   
    const mockReviews = [
	{"name":"L dA","review":"Food was brilliant and quick! Great flavours and authentic.Nice location overlooking a bit of water sport area. Staff were great, though we did feel like we'd been forgotten a couple times... but then, providing the true refugee experience, I suppose!  (Just joking, was a lovely evening). Well done. Have shared with others and wish you success!"},
	{"name":"Ira Gitlin","review":"My wife and I were taken here with our tour group (cost included). This restaurant is simply amazing. The food was to die for, and the service impeccable. They totally understood my wife's allergies and made sure she had a terrific meal. If we had this place where I live we would be there weekly. Do not miss this wonderful restaurant."},
	{"name":"Anne-Jolie","review":"A fusion of flavors, so healthy and bright, A Lebanese cuisine beautifully presented, fills us with delight. The venue so spacious, with a happy vibe, Conveniently located, for all to abide. The staff so helpful, efficient and true, Great for sharing big plates, with friends old and new. AJ has a thought, to make it even better, Showcasing your best on menu, with photos that gather. "},
	{"name":"Polina List","review":"Great food, I liked verity of different cuisines and dishes. Falafel with pita was great! I also liked the lemonade. Service was a bit chaotic and now everyone spoke English, but in general I had good experience here."},
	{"name":"Ned Sh","review":"Good ambiance and the variety of food on the menu is decent for all diet types.The food is clean and you can see the cooks take extra care of hygiene and cleanliness of the place. The only complaint I have is around the food portion, I feel it should be slightly bigger.  Other than that, everything was great!"},
	{"name":"Nik Roberts","review":"Visited on a cloudy Thursday for breakfast. We had Labneh and Balila and both dishes were delicious and enormous! Eggs in the Balila were perfectly cooked, and the accompanying flatbreads were fresh and tasty.  The staff were very welcoming.A great concept supporting former refugees. You should give it a try!"},
	{"name":"Tegan Tigani","review":"Easy single dining outside at lunch with a beautiful view and comfortable shade. The vegetarian options are plentiful, and my choices (lentil soup and roasted cauliflower) were delicious! Full of flavor, great texture. Together they made up a hearty lunch."},
	{"name":"writing traveller","review":"Food is absolutely fabulous! Large portions, lots of options, and a paradise for vegetarians. And a fantastic social project too. We paid just over 20 euros per person for a very good lunch."},
	{"name":"Odeta Kup","review":"Tasty, mostly Midle East inspired, food and served realy quick. Good beer and interesting cocktails."},
	{"name":"Beata Handzel","review":"We had a dinner with our big group yesterday and the whole experience was wonderful. It was easy to make a reservation for 15 people, the staff was prepared and ready, even though we arrived with more people. The food was quickly on the table, and it was DELICIOUS."},
	{"name":"Jenny Kan","review":"Lovely lovely place with beautiful concept! I love the concept of this place. The service is attentive and warm, but also a bit chaotic, but all forgivable, because of the warm service.  The Iraqi chicken was tender and tasty and the fries also amazing. The hummus was great and as well the moutabal.  Wish you all the best!"},
	{"name":"Barbara van de Kerke","review":"Friendly, good food, Nice view, centrally located. We had lunch here with a group of 5, we shared the starters, yummm"},
	{"name":"Dixie De Winne","review":"I think this restaurant is underrated - the quality (& quantity) of the food was superb, the location is nice and they have fair prices. The staff were friendly and genuinely caring. We enjoyed the shared dining menu - which was well crafted and would highly recommend it. Thank you for the experience :)"},
	{"name":"Ruud O","review":"Very tasty food on a great location. Plenty of space inside and outside. We tried some starters and a mixed plate for several people, allowing us to try a bit of all the great flavours. Very fresh and diverse food, also very suitable for vegetarians. The staff was very friendly as well. I will definitely come back."},
	{"name":"Gulnara Sagdieva","review":"Food is so so. Service no comments. The area itself and the ambience very nice. Especially the terrace outside."},
	{"name":"Lorene Faivre","review":"Really good vegetarian middle eastern food. We got a large platter to share with labneh, smoked eggplant dip, rice and lentils, potatoes and bread. Good quantity for two people.  The service was friendly and caring."},
	{"name":"George Juge","review":"After nearly a week in The Netherlands, this is hands down the best meal I've had. Perfectly grilled seabass with a delicious Sudanese sauce, and the spinach sabzi, along with a kombucha so good it literally made me clap my hands. Lovely staff and a beautiful view! I will definitely be back."},
	{"name":"Margot Salmi","review":"The best surprise in Amsterdam! And this is truly a delicious surprise! If you are around, don't wait another second. Even if you are not around, hop on your bicycle and try the delicious middle-eastern dishes suggested by A Beautiful Mess. Also go for the two mocktails. You won'st be disappointed."},
	{"name":"Sherryn V","review":"Delicious, wholesome middle eastern food. The dishes here are made with love, and you can tell that they really want you to enjoy your food. The service is top-notch. We got a free soup because they were out of the dish I originally wanted (how nice!)The kofta was amazing - juicy, spiced and very filling. Great place, totally recommend!!!"},
	{"name":"Daniela Rosca","review":"Amazingly fresh taste and the team is so polite! Very comfy, you can have a meal but also work if you need as they have good wifi and plenty of space with air conditioning. Top food!"},
	{"name":"Emilie Smithjes - Schretlen","review":"Great informal place to have a nice evening with family. We all loved the good, service was friendly and very enjoyable. Good atmosphere. I will definitely return😀😋"},
	{"name":"Martin Evans","review":"A pleasant location overlooking the canal. We had some coffee and the vegetarian starters, which were all excellent. A nice place to hang out for a little while."},
	{"name":"Lana","review":"A wide range of dishes that are suitable for sharing or ordering 1-2 for yourself. The staff was friendly, knowledgeable, and very attentive to ensure I had a positive dining experience and explained the dishes with precision ahead of time. This place is hidden gem in Amsterdam and a must try for anyone visiting Oost!"},
	{"name":"Deniz Elings","review":"Very nice Lebanese like food but with a bite. Loved it. The red Montalbano was amazing."},
	{"name":"JDV","review":"Nice concept where former refugees rule the kitchen. It's a pop-up so be in time for the experience."},
	{"name":"Martine Baya","review":"Perfect for a chill sunday. The food is delicious and the vibes are really nice."},
	{"name":"Jasper M","review":"Amazing food and a very nice location and atmosphere. Friendly staff. Overall highly recommended"},
	{"name":"Mads Knigge","review":"All about this place is fantastic. I love it. It is a must if you visit Amsterdam. The food is nice, but the story is amazing."},
	{"name":"Sylvester_2114","review":"I didn'st stay for long and I'sve never been there before BUT THEY SERVED ME THE BEST WARM TONY CHOCOLONELY CHOCOLATE MILK I HAVE EVER TASTED IN MY LIFE!!!!! ❤️😀 + we were with a lot of people and the staff kindly fixed us a big table. Also we ordered a lot of drinks but they were able to serve us pretty quickly!"},
	{"name":"E. D.","review":"Relaxed quiet atmosphere with excellent service and great view, since it is facing the water. The staff is super friendly and the food feels healthy and delicious with tasty unusual lemonade versions  🎉 🍊"},
	{"name":"Ivana G.","review":"The most wonderful staff, great atmosphere, beautiful space, delicious food (possibly best falafel I'sve ever had), even the other customers seemed lovely. Overall fantastic vibe!"},
	{"name":"Ewan Topping","review":"Tried the new location at Oosterdokskade. Amazing space, great vibe and service with beautiful and tasty food. Great vegetarian options and the desserts were especially good 😀"},
	{"name":"Laura Kristiina","review":"Great views, solidly good food (we got caramellized carrots, flatbread + two spreads, lentils, and poached apricots). The waiters were all great!"},
	{"name":"Rachel","review":"The food here was really beautiful. The service was very friendly and welcoming, and attentive. We had a gorgeous meal and will definitely come back. We ordered the sharing platters and got to try many different options, would really recommend"},
	{"name":"Margo de Beijer-Meijer","review":"This is a wonderful restaurant that I intend to keep coming back too. Gorgeous foods & staff and stunning views"},
	{"name":"Sofiya Pokatylo","review":"Amazing location, cozy and welcoming vibes and absolutely delicious food! Also great options for vegetarians :) Recommend this place!"},
	{"name":"Hanneke de Boer","review":"Super nice people and wonderful food. What a great place!"},
	{"name":"Heidy Elsobky","review":"Amazing place, delicious food."},
	{"name":"Valentine Dillisse","review":"What a perfect place! Super friendly service, great oriental food at a very special location. Reasonable prices."},
	{"name":"Daniel Wilson","review":"Food is OK, toilet is filled with leftist propaganda. Steer away from this communist place"},
	{"name":"Onno Van der R","review":"Absolutely fabulous: Super tastefull Food and good service!!! Very nice atmosphere"},
	{"name":"Ariel Daniel","review":"Food was so good. Lots of vegetarian options. Food came quickly."},
	{"name":"Tina Marga Peeters","review":"Wonderful. We ate caramelized carrots and granate apple hummus. Drinks with oregano."},
	{"name":"Marc De Kloet","review":"Great atmosphere, lovely food and amazing people!"},
	{"name":"Roy Kamienchik","review":"Super pleasant atmosphere and very professional, speedy and kind service! The mezzes surprise menu that we took was diverse, super delicious with amazing spicing and sophisticated. The size of the portions is generous, and the price very fair! Only feedback for improvement is that some of the meat could have been cooked a little shorter as it was on the overcooked side but the flavors were as mentioned amazing."},
	{"name":"Elizabeth Barton","review":"Delicious Mezze options with a  variety of dishes from a range of countries. Very nicely presented, sampled some unusual delicious cocktails  🎉🏆 . Friendly staff, great service. Really liked the concept."},
	{"name":"zeats a lot","review":"Service is HORRRRRIBLE !!! They claimed they were busy but the outside had a few parties. It took us 1.5 hours to get our food we were just with our drinks for so long. We also had to find the waiter to get a menu after 20 mins of sitting their waiting to be acknowledged. The food was very good but not at the expense of waiting for 1.5 hour."},
	{"name":"Simone Machl","review":"A very nice colorful location in a part from the old prison. The food is very tasty and the atomsphere very relaxed."},
	{"name":"Lucy Longley","review":"Absolutely lovely staff, came for a family meal and was the perfect meal for all. Gluten free options and vegetarian options meant we were all happy :) Would recommend to anyone, not just for good, fragrant food but also to support an amazing social initiative. Complements to the staff and chefs!"},
	{"name":"Lorina Winkler","review":"Next Level - REALLY tasty and stylishly served middle Eastern food, we were amazed. Loved every bite of it! Just a pity this restaurant is in Amsterdam and not in my hometown in Switzerland. I recommend the shared food plate as well as the mocktail Za'atar."},
	{"name":"Lukáš Jančík","review":"Yummy. Delicious⭐😀⭐😀⭐😀"},
	{"name":"lena beraud peigne","review":"Great food, convenient location and fast service"},
	{"name":"Christy Landes","review":"This is a must-stop when visiting Amsterdam. Delicious small Lebanese and north African plates. Everything is fresh and flavorful and healthy."},
	{"name":"Gabriella Kanhai","review":"Went to a Beautiful Mess for one of our team outings. Had such a lovely night. The food was absolutely delicious (including the desserts!). The staff was also super kind. Make sure you check out their social mission, which makes it even more special."},
	{"name":"Sita Remesar","review":"Beautiful view, great location, delicious food"},
	{"name":"Nvard Gharakhanyan","review":"Nice place very close to Central Station"},
	{"name":"Nathalie Ruhmann","review":"Lovely restaurant with great platters to share, food is delicious, staff very kind. We will come back!"},
	{"name":"Willemijn Verloop","review":"Amazing mission, great location, yummy food & lovely vibe!"},
	{"name":"Alex Koper","review":"What a fantastic restaurant in the beautiful Manor Hotel. Driven by a good cause, it is a melting pot of the greatest mediterranean and other dishes. The best is the sharing of the meal, with a  variety of mezzes (dishes).  We'll definately return."},
	{"name":"Arash Idora","review":"Great food and nice concept!"},
	{"name":"Samantha Noll","review":"I loved our experience at A Beautiful Mess!! The staff was so friendly and attentive, the middle eastern dishes were really delicious (an entire world of discovery for the tastebuds!), and the setting was very cosy :) It is amazing to see their social mission in action and I definitely recommend to visit!"},
	{"name":"Melanie L","review":"Great project! The food was so delicious! I had the beef stew with sweet potatoes, chickpeas and carrots. So fantastic!! Thank you"},
	{"name":"Ying Feng","review":"Great tasting food. I usually order the 'Share A Beautiful Mess' with the meat option and walk away stuffed. However, desserts are in comparison a bit lacking."},
	{"name":"F Moreira","review":"Very nice athmosphere, staff friendly and helpful. Food was ok, not a lot of options for main course if for people that dont eat meat. Dips that i had the chance to try was average."},
	{"name":"Kristjan Knigge","review":"A brand new location for A Beautiful Mess Amsterdam, but still the some lovely vibe and great food. The restaurant has moved to the Manor Hotel in the Linnaeusstraat, very accessible by bike and tram."},
	{"name":"Still Analog","review":"Seemingly non profit organization housed in an old industrial building, somewhat hard to reach but free parking compensates. The servers were very friendly careful and clearly cared about the experience we were having. However they were not fast or efficient. Food was very good, large portions as well. We had the shared tasting platter. The whole experience was very very cheap, imagine the lights are kept on by governmental grants."},
	{"name":"Zada Tagli","review":"Most authentic Lebanese, Syrian food in town. Hummus and babaganush yes passed cum lauda ;)"},
	{"name":"M. Basha","review":"Friendly staff and tasty food"},
	{"name":"Dean D'Souza","review":"The food was absolutely gorgeous. Many of the items (e.g., the hummus, couscous, labneh) were the best I have ever had. We had the 'tasting of different dishes' option. The food was freshly made and tasted delicious. The restaurant looked fantastic, and was relaxed. The staff were very friendly. I highly recommend it, and will definitely go again.  The restaurant (and nearby hotel) are both located in an abandoned prison, and run by a mix of refugees and locals, so not only is the food gorgeous - but it's also for a great cause!"},
	{"name":"Lynn","review":"Great vibe, good music and very friendly staff. The 'beach' is nicely decorated and cozy. Delicious cocktails with a Middle Eastern twist! The food is also really tasty, I would highly recommend the smoky Moutabal!"},
	{"name":"Katja Körnich","review":"If I had grown up with this food culture and ended up in Europe I would cry myself to sleep every night. Thank you so very much for sharing with us, beautiful food in a beautiful environment made by beautiful people."},
	{"name":"Molly McGhan","review":"Beautiful food with a beautiful ethos behind it. Lovely, friendly, welcoming servers & in such a cozy space... thank you so much for having us!"},
	{"name":"N Groot","review":"Delicious food, excellent service"},
	{"name":"Jivko Stankov","review":"Had a company dinner here and was very happy with the quality of the food and the ambiance. Coupled with the wonderful social mission of the restaurant, I very much recommend it 😀👍"},
	{"name":"Nina van Stokkum","review":"Everything was amazing! The food was lovely, the portions HUGE, our waiters were very Nice and friendly. Its a very good concept! And the location is so special :):)"},
	{"name":"Olubunmi Okolosi","review":"Iconic location in Amsterdam and a must visit. Food, drink and concept run by refugees"},
	{"name":"Andrii Bednarchuk","review":"Very interesting place. Silent. Friendly people"},
	{"name":"Simona Baloghova","review":"Great Lebanese fusion food, cosy place and nice staff! The service was also fast."},
	{"name":"Paul van Dijk","review":"Had a really great time here! Super tasty food and friendly staff"},
	{"name":"Colleen Bolger","review":"Delicious food. Fabulous cocktails. Reasonably priced. Helpful and friendly staff."},
	{"name":"Mara Astrid","review":"Definitely a must visit place in Amsterdam. The food is amazing and the people is very kind. The concept is really interesting. Don'st forget to make a reservation before you arrive."},
	{"name":"Natasha Golding","review":"Beautiful food and just a relaxed place to be, a group of adults and young children, we took out time and had a lovely long lunch."},
	{"name":"Almajd AA","review":"Distinctive atmosphere, elegant treatment and delicious food. I advise all people to try it"},
	{"name":"Idil Gnosti","review":"I would give 5 star to concept but food and atmosphere is just not something I would dig for again, regardless it is different and makes you feel like contributors"},
	{"name":"Michiel Scholten","review":"Great food (lots of vegetarian options too), lovely people. Really interesting building, as it's in the former Bijlmer prison."},
	{"name":"Frank Flinterman","review":"Great food in a great atmosphere. Dinner in a former prison! The staff is very friendly and service is great."},
	{"name":"Hkon Holdhus","review":"Good food, great experience, amazing concept, and fair prices.  10/10 will eat again."},
	{"name":"Henk Jan Beltman","review":"love it!"},
	{"name":"Alexandra Pafford","review":"Amazing food, service, atmosphere, and value for money. 10/10 would go back I love it there"},
	{"name":"Wim Bloemers","review":"Great initiative from former refugees, hard to find, harder to beat! People are very gentle! Awsome food too!"},
	{"name":"Wout Wijker","review":"Interesting location. Even though it used to be a prison, it is filled with creative people giving the restaurant and the general area a very free feel."},
	{"name":"Marcel Putina","review":"Hidden gem in Amsterdam Oost! Great food, service and great vibe inside."},
	{"name":"Tijl Kruyswijk","review":"The bartender left early, which is... Weird"},
	{"name":"Stephen Holz","review":"Cool place. Funky and positive vibe. I recommend it for the good you can do to help these good people learn a worthy trade."},
	{"name":"Ruben Vandenbussche","review":"We had a very nice experience with theatre in the old prison. Food was great, service excelent and staff is very nice."},
	{"name":"Gergo Lippai","review":"Top of my list in Amsterdam."},
	{"name":"Mariana Kamimura","review":"Amazing food, absolutely delicious and fantastic environment!"},
	{"name":"Marjorie Tann","review":"Great environment to connect with people and great food!"},
	{"name":"Loret Ta","review":"interesting location in the old penitentiary pop up cafe restaurant authentic middle eastern food nice atmosphere friendly staff"},
	{"name":"Jennifer and John Ganser","review":"Excellent!"},
	{"name":"Elif ","review":"That was a great place. The staff and food were excellent."},
	{"name":"Ben","review":"Nice restaurant, with delicious food! Very friendly owner."},
	{"name":"Jasper Verduyn","review":"Delicious flavors with African dishes"},
	{"name":"Erik Tengen","review":"Great food and atmosphere!"},
	{"name":"Felix Hamer","review":"Delicious lunch at this hidden gem, tasty, spicy, natural!"},
	{"name":"Elwin Arens","review":"Nice to visit as a local. Food and service OK."},
	{"name":"christine samaan","review":"Lovely place nice food amazing service"},
	{"name":"Saverio Guzzo","review":"Unique concept and amazing staff!! Love this place"},
	{"name":"Theophilus Ahenkorah Okyere","review":"Good Place to be."},
	{"name":"ahmed Mostafa","review":"Lovely cozy place, not experience"},
	{"name":"teresa de sanctis","review":"Genuine, warm and joyful place! :-D"},
	{"name":"Paola Fezzigna","review":"Everything was great"},
	{"name":"femke soppe","review":"Nice people good food!"},
	{"name":"Anton Hinkel","review":"14 spices slaps."},
	{"name":"Jan van Dooren","review":"This is one of the best newcomers to our area. Fantastic original food, very friendly staff, top location (great view) and honest prices. I have been three times in as many weeks,  Their idealism and politcs are mine and I recommend this place wholeheartedly!"},
	{"name":"Katariina Pekkanen","review":"Dips were great - but even I make a lot  better shakshuka."},
	{"name":"John Bocxe","review":"The three of us had dinner in the evening. We opted for the share menu “Feast”: three dips, flatbread, delicious lentil soup, salad, crispy roast chicken and kofta balls, both very good. We drank a nice Sauvignon with it. Finished with coffee and we shared an orange cake dessert. Had a nice evening, will definitely go back."},
	{"name":"Brian Issac","review":"Delicious food, nice staff. The acoustics are not great and the service could be a little better, but the idea behind the concept means that you don't really mind. To be repeated."},
	{"name":"Raquel Calzada","review":"On the Amsterdam dock. Very nice atmosphere. All the food we ordered was delicious and at an appropriate price. We liked a lot. We will return without a doubt."},
	{"name":"Matthieu Picher","review":"A charming place close to Centraal. The Middle Eastern cuisine offered is very tasty and elaborate. Also suitable for vegetarians. The place is very spacious, the decoration is very modern and the choice of music playlists is well chosen. Having gone there on a Sunday lunchtime, the restaurant was relatively empty. The only slightly negative point is the price, the main dishes come without accompaniments, which increases the bill if you add one or more accompaniments. However the food is very good so you get what you pay for."},
	{"name":"Cathie Matricon","review":"A good address, warm welcome and very friendly staff.We chose to eat sharing dishes with a varied choice of different flavors and textures. Excellent roasted carrots, the meat was good and the fish fresh. We had a good time in a pleasant setting facing the canal. You can go there without worries."},
	{"name":"Ana Eliza","review":"We are very happy every time, exceptionally pleasant service and excellent cuisine! This time we were spoiled by Nur. A radiant hostess; radiant person who truly understands what hospitality is. I had indicated that I expected to come by again this evening, but unfortunately that will not be possible. Wonderful restaurant and excellent cuisine."},
	{"name":"timstet","review":"What a wonderful place this is. The service is very nice, the food delicious. A beautifully diverse cuisine that gives you a glimpse into various other cultures. And, in any case, a very nice concept in which the cultures of the chefs end up on your plate.Recommended!"},
	{"name":"Michel","review":"Beautiful place with a beautiful terrace, super social entrepreneurial initiative, delicious and surprising food and very friendly people in the heart of Amsterdam! Go there, it's worth it!"},
	{"name":"kimsoepnel","review":"Everything was delicious and fun, with good and friendly service. On the terrace we were only bothered by pounding bass in the distance (from the IJ?)"},
	{"name":"Rene van OpenEmbassy","review":"Beautiful, nice, warm place. Food is really tasty, lentil soup was my favorite. Recommended!"},
	{"name":"Jeroen","review":"A somewhat hidden fusion restaurant where you can eat various dishes from the Middle East. The portions are a bit small. Staff is extremely friendly. With nice beers on the menu."},
	{"name":"Tely Suarez","review":"I had such a delicious meal here and what great service with a smile. I can't wait for the new location to open soon on the Oosterdokskade. Highly recommended with a wonderful social mission!"},
	{"name":"Haaike Braakhuis","review":"Was there for an event, so I didn't really experience service (it was a bit chaotic at the bar). Food was tasty (hummus, baba ghanoush, tzatzik, different vegetables, chicken and mudjadara)"},
	{"name":"WHYSGUYS [PIM]","review":"What world flavors and the employees are super hospitable and enthusiastic. A wonderful place to relax in the busy center of Amsterdam."},
	{"name":"Sander Linda","review":"Had a lovely meal here on a Sunday afternoon, very friendly service and delicious dishes, relaxing in the sun on the terrace, highly recommended!"},
	{"name":"Martin Hammer","review":"This charming restaurant is hidden at the former visitors' entrance of the Bijlmerbajes in the former laundry. Run by fellow countrymen with a refugee background, you can enjoy informal, good and special food here. Super friendly employees that the Dutch could follow as an example. Highly recommended to experience"},
	{"name":"Koosje Henneman","review":"Super nice atmosphere. And a super good concept. Great service and delicious food! A place where I will definitely come back!"},
	{"name":"Fronnie Biesma","review":"Delicious food. Nice, hospitable staff. Atmospheric restaurant in a nice location with a beautiful view. Asset."},
	{"name":"Linda de Vries","review":"Super nice new place with fantastic views, delicious food and super friendly service. Recommended!"},
	{"name":"Myra Brons","review":"What a great place and what a beautiful concept! Delicious food."},
	{"name":"mickey schutte","review":"Delicious food! Good service. Nice thoughts. I am a fan"},
	{"name":"Orit","review":"It was very good food and also very tasty and I recommend everyone to eat here"},
	{"name":"Ilse Eijsink","review":"Very nice place with good food and nice staff!"},
	{"name":"Jorg W.","review":"Wonderful restaurant and fantastic textile factory. A company with an important mission, and one that gives people an opportunity to contribute to it."},
	{"name":"Peter Koks","review":"Really very special and very tasty. Wonderful initiative to help people find work!"},
	{"name":"Mi ma","review":"We had a lovely evening with good food."},
	{"name":"Martina Manca","review":"Stellar food. Low prices. Exquisite staff. Absolutely try the aubergine cream. Unsurpassed"},
	{"name":"Hayke van Dommelen","review":"Nice! You can enjoy delicious food in the launderette of the former Bijlmer prison. The project is run by former refugees and of course the food is from their region of origin. Pleasant atmosphere, friendly service and prices. Very okay."},
	{"name":"Laura de Vries","review":"Great place. To get there you walk from the station through a construction site with a half-demolished prison and wonder where on earth you are going. But then you suddenly arrive in a very warm, cheerfully designed room. All employees are extremely friendly and the food was delicious. See you soon!"},
	{"name":"Enrico Raho","review":"Food really delicious, portions a bit small."},
	{"name":"Ben","review":"Chosen at the last moment because we arrived late at the hotel. A beautiful discovery. Very kind staff. Excellent availability. Relaxing environment that encourages conversation while waiting for the food which is spectacular. Definitely worth trying again. Tip if you are not nearby, book."},
	{"name":"Raymond Adan","review":"Had a great meal and was introduced to new dishes and flavors."},
	{"name":"Henriette","review":"Top location, nice people with good food"},
	{"name":"Mattijs Peters","review":"Nice location..nice food and good price. Service is friendly but could be a little sharper."},
	{"name":"Leon Ozkohen","review":"great location, good food and good service"},
	{"name":"Kirsten Schut","review":"Delicious food and very nice service - highly recommended."},
	{"name":"Lisa Karels","review":"Good concept and very tasty food! We had the mezze table with 3 people, vegan. We missed a small explanation of "},
	{"name":"Lisa Bijvoets","review":"We had a delicious meal at our new location on Linnaeusstraat! Friendly service. And if you like smoked eggplant, the moutabal is orgasm worthy!"},
	{"name":"Jens Maas","review":"A very nice evening, getting to know new cuisine! Thank you for the culinary delights!"},
	{"name":"Gerrie van Bennekom","review":"What an asset to the neighborhood! Delicious food, genuinely friendly staff and a chef who loves desserts as much as I do. What does a man want more. No annoyingly loud music, not on your neighbors lap... recommended!"},
	{"name":"Bob","review":"Had a lovely meal with friends last night in this beautiful restaurant, one of the few good restaurants with oriental cuisine-oriented dishes, highly recommended!"},
	{"name":"Diederick","review":"Great service, lovely people. Share a beautiful mess gives you a wonderful mix of delicious dishes! The moutabal is very tasty."},
	{"name":"Peter Groenendaal","review":"Great spot in Amsterdam East. Nice concept and tasty food. Excellent price quality ratio. Tastes like more."},
	{"name":"Sigrid Raben","review":"Fantastic concept in a great place!"},
	{"name":"Babette Roelandschap","review":"What a special place! Nice concept, delicious food and great service. I will definitely eat here more often."},
	{"name":"Cecile Stulemeijer","review":"Delicious dinner on the terrace in the evening sun. Authentic Middle Eastern cuisine, cheerful and good service, delicious wine. Also plenty of vegetarian options.  In short, recommended!"},
	{"name":"Sander Nieuwenhuizen","review":"Today we had a delicious meal again, the injera with lamb and a watermelon salad (delicious fresh watermelon with feta, crispy corn kernels, mint). I really enjoyed these delicious flavors. Thank you Rosa and crew, you are great!"},
	{"name":"joannenijland","review":"Beautiful and sympathetic concept, delicious food, great location and lovely staff! Even received baby service so we could have a quiet meal"},
	{"name":"Gert Tetteroo","review":"The charming lady at the service was working there for the first time - but helped us with a Big Smile together with a training colleague. When the sandwiches made of Lebanese bread with feta and the vegetable tempura with pineapple chutney were truly delicious, our afternoon couldn't go wrong. Yummyrrrrrr!"},
	{"name":"Chantal Homan","review":"Had a delicious meal here. Nice location, friendly staff and fantastic dishes. The cassava fries with stew are highly recommended, just like the rest actually ;-)"},
	{"name":"Harold Halewijn","review":"Special place with delicious food. Something different again."},
	{"name":"Jay Sahusilawane","review":"Igor and Mikail really helped me a lot, they were polite and nice and recommended the best beer to me, really great waiters who know everything about their range"},
	{"name":"kim de koning","review":"Lovely place with delicious snacks, tasty lunch and very nice for a drink. It would be nice if this initiative remained in the area even if the Bijlmer prison had to be demolished."},
	{"name":"Kennispunt Zoom","review":"Delicious food, you can choose between vegan, vegetarian and meat. good service and nice terrace"},
	{"name":"Henk Brandsen","review":"Fantastic restaurant with delicious food. The service is very friendly and very fast, especially if you ask for it. Special location, in the old Bijlmer prison."},
	{"name":"Tiny Guyt","review":"Special place in the old Bijlmer prison. It took some time to find the entrance. Alternative design fits perfectly in the large space of the old laundry. Service very friendly. Small menu but very tasty!!"},
	{"name":"Sijmen Mulder","review":"cool concept that has not detracted from the taste for a single moment. beautiful dishes for very competitive prices. It's a pity that the entire wine range is out of the way."},
	{"name":"Simon Tiemersma","review":"Delicious food! Really delicious. Service also friendly. The setting is of course really cool, between the large washing machines in the prison"},
	{"name":"Suzanne de Bruijn","review":"What an incredibly special place! The restaurant inside is very nicely decorated and outside there is a lovely terrace courtyard. The food is super good!!"},
	{"name":"Ahmed Elshamouty","review":"Fantastic. A bit hidden and difficult to find But the food is really tasty and the servers are quite nice."},
	{"name":"Armelle Donelli","review":"Excellent Indo-Pakistani cuisine. The servers do their best to be pleasant to us."},
	{"name":"Janet vissers","review":"Very nice idea to eat in the Bijlmer anesthesia. Good project also which is served by this. Modest card. Lovely staff."},
	{"name":"Derk van Voorst","review":"What a really nice and pleasant place. With good food! Very nice service too."},
	{"name":"Bert Pots","review":"Nice place, lovely people in the service, good food."},
	{"name":"Dam B","review":"Delicious food. All small snacks, meat and vegetarian were both tasty. Recommended!"},
	{"name":"Thomas de Wolf","review":"Delicious food, nice dishes and nice seating."},
	{"name":"Hylco van Engelen","review":"Good restaurant. Food is tasty, service is good. Little fuss in a fantastic location for an evening of just good food"},
	{"name":"Patries van der Schoot","review":"Delicious lunch prepared with love and served with pride. Very difficult to find. A sign on the road could be a solution."},
	{"name":"Gijs den Besten","review":"Good food without too much fuss, friendly and passionate service. Price level is fine."},
	{"name":"Marco","review":"Cool restaurant in a former laundry room. The large washing machines are now only used for decoration."},
	{"name":"Lisette van Niekerk","review":"Everything is special: concept, location, people and not to forget the food. Everyone should go there at least once!"},
	{"name":"Hans Donders","review":"Delicious food and drinks at this place!"},
	{"name":"Tamara Dekker","review":"Nice restaurant with delicious mezzes to share."},
	{"name":"Adriaan Pieter","review":"From a delicious cup of coffee on the terrace."},
	{"name":"Stephanie","review":"Super cozy! Delicious food, good atmosphere and great service!"},
	{"name":"Mathilde Bosker","review":"Hidden gem. Nice m.o. fusion cuisine., Cozy, homely, creative. Reservations required"},
	{"name":"Merijn Ch","review":"Unexpectedly nice place and very tasty food. Recommended."},
	{"name":"Vito Roeej","review":"Nice and relaxing..."},
	{"name":"Olga","review":"Special place, cozy atmosphere and super tasty food!"},
	{"name":"Michael Druhl","review":"Great food, very cheap with a unique atmosphere...in the old prison laundry between the machines..."},
	{"name":"Dirk Blauw","review":"Delicious!"},
	{"name":"Chrissie Cremers","review":"Delicious food and super cozy atmosphere."},
	{"name":"Daan","review":"Special location and people, good food for competitive prices!"},
	{"name":"Saskia","review":"So special. Good food. Special atmosphere."},
	{"name":"Stijn de Bruin","review":"Special place. Excellent food. Very suitable for children."},
	{"name":"Liesbeth Groeneveld","review":"good food for a great price!"},
	{"name":"Ies Kaczmarek","review":"Great place. Very free people. Free atmosphere."},
	{"name":"lilian Koenders","review":"Delicious food... I say: go taste it and see!"},
	{"name":"Peter Moerbeek","review":"Excellent lunch, nice staff and special food"},
	{"name":"A","review":"Delicious lunch. Special location!"},
	{"name":"Hedzer","review":"Very friendly and fast service and special location."},
	{"name":"Rutger V","review":"Visit the restaurant while you still can and enjoy"},
	{"name":"Imme Siersma","review":"Cheerful place with delicious food!"},
	{"name":"Bram van der sleen","review":"Great spot. In the former Bijlmer prison"},
	{"name":"Monique Paffen","review":"Top! Location, staff, service and operation!"},
	{"name":"totaalvoetbal","review":"Nice chill place with good coffee"},
	{"name":"Equipage health en beauty","review":"hidden but oh so cool"},
	{"name":"Simen Grootjans","review":"Good food in an interesting location"},
	{"name":"marjan de lang","review":"Tasty!!!"},
	{"name":"Hella","review":"Delicious food!"},
	{"name":"Jort Broekhuijsen","review":"A table full of love"},
	{"name":"Emanuel Muris","review":"Very pleasant atmosphere"},
	{"name":"Jordanoes","review":"Great place!"}
    ];
    
	

function fetchReviewsData(numReviews = 3) {
	const uniqueReviews = [];
  const reviewIndices = new Set();

  while (uniqueReviews.length < numReviews && reviewIndices.size < mockReviews.length) {
       const randomIndex = Math.floor(Math.random() * mockReviews.length);
       if (!reviewIndices.has(randomIndex)) {
                reviewIndices.add(randomIndex);
           uniqueReviews.push(mockReviews[randomIndex]);
       }
  }
  return uniqueReviews;
}

// Define the getReviews function as before
function getReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');

    // Clear existing reviews in the container
    reviewsContainer.innerHTML = '';

    reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');


        reviewDiv.innerHTML = `
            <h3>${review.comment}</h3>
            <h5>${review.name}</h5>
        `;

        reviewsContainer.appendChild(reviewDiv); // Append new review to the container
    });
}

// Function to update reviews every 5 seconds
function updateReviewsPeriodically() {
		var reviews = fetchReviewsData(3); // Fetch 3 unique reviews
    getReviews(reviews);
}

// Call updateReviewsPeriodically initially and then every 5 seconds
updateReviewsPeriodically(); // Call immediately upon page load
setInterval(updateReviewsPeriodically, 5000); // 
    
    
});
