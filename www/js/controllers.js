angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  /* With the new view caching in Ionic, Controllers are only called
   when they are recreated or on app start, instead of every page change.
  To listen for when this page is active (for example, to refresh data),
  listen for the $ionicView.enter event:
  */
	
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
 $ionicModal.fromTemplateUrl('templates/modalImage.html', {
	 
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
	{
    $scope.modal = modal;
  });
	
  $scope.openModal = function(src,details,name) {
	  $scope.imgsrc = src;
	  $scope.name = name;
	  $scope.detail = details;
	  
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
	
   $timeout(function() {
      $scope.closeModal();
    }, 1000);
	
	//=================================================================================================
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails=false;

	//FUNCTION THAT CONTROLS TAB SELECTION
	  $scope.select = function(setTab) 
	  {
		$scope.tab = setTab;
	/*THIS FUNCTION WORKS WITH THE ng-repeat TO FILTER OUT EACH
	CATEGORY AND DISPLAY THE ITEMS BASED ON THEIR CATEGORIES
	WITH THIS IF STATEMENT*/
		  if (setTab === 1)
		   {
			 $scope.filtText = '';
		   }
		  
		  else if (setTab === 2)
		   {
			 $scope.filtText = "Mammal";
		   }
		  
		else if (setTab === 3)
			{
			 $scope.filtText = "Reptile";
			}
		else if (setTab === 4)
		 {
			$scope.filtText = "Bird";
		 }
		  		
		  else if (setTab === 5)
		 {
			$scope.filtText = "Crustacean";
		 }
		  		
		  else if (setTab === 6)
		 {
			$scope.filtText = "RealFish";
		 }		  		
		  else if (setTab === 7)
		 {
			$scope.filtText = "";
		 }		  		
		  else if (setTab === 8)
		 {
			$scope.filtText = "";
		 }
		else
		{
			$scope.filtText = "";  
		}
	};//END OF select FUNCTION

		$scope.isSelected = function (checkTab)
		{
		  return ($scope.tab === checkTab);

	   };//END OF isSelected FUNCTION
	
	
	//TOGGLE DETAILS FUNCTION
	$scope.toggleDetails = function()
	{
       $scope.showDetails = !$scope.showDetails;
     };	
	
	
	//ANIMAL  OBJECT
	   $scope.animals=[
		{
		  idNo:0,
		  name:'African Wild Dog',
          image:'img/african_wild_dog.jpg',
		  group:'Mammal',
	      detail:"The African Wild Dog also known as the Painted Dog and the Cape Hunting Dog, is a medium sized species of canine found across sub-Saharan Africa. The African Wild Dog is most easily identified from both domestic and other wild Dogs by their brightly mottled fur, with it's name in Latin aptly meaning painted wolf. The African Wild Dog is said to be the most sociable of all the canines, living in packs of around 30 individuals."	
		},
		 {
		   idNo:1,
		   name:'Adelie Penguin',
		   image:'img/adelie_penguin.jpg',
		   group:'Bird',
		   detail:"The Adelie Penguin is the smallest and most widely distributed species of Penguin in the Southern Ocean and is one of only two species of Penguin found on the Antarctic mainland (the other being the much larger Emperor Penguin). The Adelie Penguin was named in 1840 by French explorer Jules Dumont d'Urville who named the Penguin for his wife, Adelie. Adelie Penguins have adapted well to life in the Antarctic as these migratory Birds winter in the northern pack-ice before returning south to the Antarctic coast for the warmer summer months."
			   
		 },
	    {
		   idNo:2,
		   name:'Baboon',
		   image:'img/baboon.jpg',
		   group:'Mamamal',
		   detail:"The Baboon is a medium to large sized species of Old World Monkey that is found in a variety of different habitats throughout Africa and in parts of Arabia. There are five different species of Baboon which are the Olive Baboon, the Guinea Baboon, the Chacma Baboon, the Yellow Baboon and the Hamadryas Baboon which differs most from the others wide it's bright red face and cliff-dwelling lifestyle (the other four species are collectively known as Savanna Baboons). Baboons are incredibly sociable and intelligent animals that are known to form close bonds with other members of the troop that often last for life. "
			   
		 },
		 {
		   idNo:3,
		   name:'Black Rhinoceros',
		   image:'img/black_rhinoceros.jpg',
		   group:'Mamamal',
		   detail:"The black rhinoceros (also known as the hook-lipped rhinoceros) is a large species of rhinoceros native to Africa. Despite it's name, the black rhinoceros is actually fairly light in colour with most black rhinoceros individuals having either white or grey skin.Historically, the black rhinoceros had a vast range across central and eastern Africa in countries including Kenya, Tanzania, Cameroon, South Africa, Namibia, Zimbabwe, and Angola. Although the black rhinoceros is still found in these countries today, their numbers are very few. "
			   
		 },
		 {
		   idNo:4,
		   name:' Caiman Lizard',
		   image:'img/caiman_lizard.jpg',
		   group:'Reptile',
		   detail:" The caiman lizard (also called Dracaena Guianensis) is a medium sized species of lizard. natively found in the jungles of South America. The caiman lizard is one of the largest lizard species on the American continent.The rainforest and swampland areas of South America in the countries of Brazil, Colombia, Ecuador and Peru is where the Dracaena Guianensis can be found. They are most commonly spotted in areas that contains a large amount of water because they are very aquatic creatures."
			   
		 },
		 {
		   idNo:5,
		   name:'Chamaeleonidae',
		   image:'img/chameleon.jpg',
		   group:'Reptile',
		   detail:" The Chamaeleonidae (also called chameleon) is a very distinctive lizard, due to the large eyes and curled tail of the chameleon. Chameleons are found throughout jungle and desert alike, in Africa, Asia and parts of Southern Europe and chameleons have also been introduced to parts of North America."
			   
		 },
		 {
		   idNo:6,
		   name:'Desert Tortoise',
		   image:'img/desert_tortoise.jpg',
		   group:'Reptile',
		   detail:"The desert tortoise lives in tunnel underground and is found in the south-western desert regions of Northern America, and parts of northern Mexico. The desert tortoise is most commonly known for its high, patterned shell. The desert tortoise is found inhabiting the vast sandy plains and rocky foothills that are in and surround both the Mojave and Sonoran deserts. When temperatures get too high for the desert tortoise it simply digs itself a hole into the sand where it can remain cool until the heat dies down. "
			   
		 },
		 {
		   idNo:7,
		   name:'Dusky Dolphin',
		   image:'img/dusky_dolphin.jpg',
		   group:'Mammal',
		   detail:" The Dusky Dolphin is a small species of dolphin that is found inhabiting the cooler waters along continental shelves throughout the southern hemisphere. This distinctive looking mammal is closely related to other large marine animals but despite their fish-like appearance Dusky Dolphins are true mammals that both breathe air in and out of their lungs and also suckle their young on milk produced by the mother's mammary glands. "
			   
		 },
		 {
		   idNo:8,
		   name:'Egyptian Mau',
		   image:'img/egyptian_mau.jpg',
		   group:'Mammal',
		   detail:"The Egyptian Mau is an old breed of Egyptian cat believe to be at least 3,000 years old. The Egyptian Mau is a medium-sized, short-haired cat and the Egyptian Mau is one of the only cats to be naturally spotted, with longer back legs than most cats.They are the fastest of all the domestic cats and has been known to reach speeds of 30 mph, making the Egyptian Mau a keen predator. "
			   
		 },
		 {
		   idNo:9,
		   name:'Eskimo Dog',
		   image:'img/eskimo_dog.jpg',
		   group:'Mammal',
		   detail:"Eskimo Dog's usual attitude reflects its original work and environment. It is loyal, tough, brave, intelligent, and alert. It is affectionate and gentle, and develops a deep bond with its owner and is intensely loyal. They are best suited for adults than children because they can be over excited. Canadian Eskimo Dogs takes delight in the cold climate and rather to sleep outside where it is cold. "
			   
		 },
		 {
		   idNo:10,
		   name:'Falconiforme',
		   image:'img/falcon.jpg',
		   group:'Bird',
		   detail:"Falconiforme (also known as Falcons) are medium sized birds of prey found all across the world although falcons tend to prefer the more temperate regions of the Northern Hemisphere. Falcons are best known for their ruthlessness and their incredible flying abilities. Falcons have tapered wings that allow the falcon to change direction extremely quickly especially when compared to other birds. Falcons have been recorded diving at speeds of up to 200mph, meaning they are the fastest creatures on the planet! "
			   
		 },
		 {
		   idNo:11,
		   name:'Frigatebird ',
		   image:'img/frigatebird.jpg',
		   group:'Bird',
		   detail:"The frigatebird (also called the man of war bird and the pirate bird) is a species of sea-bird found in warmer, tropical regions.The frigatebird is a large species of sea-bird that has an gigantic wingspan that often greater than two 2m in length. During mating season the male frigatebirds use their red throat pouch to attract female frigatebirds. "
			   
		 }	,
		 {
		   idNo:12,
		   name:'Giant Schauzer',
		   image:'img/giant_schauzer.jpg',
		   group:'Mammal',
		   detail:"The Giant Schnauzer is a large, loyal, powerful, dominant dog which needs a firm, consistent but friendly handler. Unnecessary harshness will only do harm.It is very important to train the Giant Schnauzers from early because they tend to be very willful and highly intelligent dogs. Their ability to understand commands does not always result in obedience. "
			   
		 }	,
		 {
		   idNo:13,
		   name:'Gharial',
		   image:'img/gharial.jpg',
		   group:'Reptile',
		   detail:"The gharial is a large-sized reptile found in the murky waters of Northern India and the surrounding countries. `The gharial is most commonly found in the calmer areas of the deep, fast-flowing rivers of the North Indian subcontinent. The gharial spends most of its time in the water as it is not well suited for a life on the land, due to its short legs. The elongated snout of the gharial is ideal for catching fish in the water, and contains more than 50 sharp teeth."
			   
		 }	,
		 {
		   idNo:14,
		   name:'Hippopotamus',
		   image:'img/hippo.jpg',
		   group:'Mammal',
		   detail:"The Hippopotamus is a large semi-aquatic mammal that is found wallowing in the rivers and lakes across sub-Saharan Africa. Despite it's appearance, the Hippopotamus is believed to be most closely related to Whales as the two are thought to have had a common ancestor that existed roughly 54 million years ago. The Hippopotamus has an enormous grey barrel-shaped body that can measure up to five meters in length and weigh more than four tonnes, and which is held up by short and stocky legs."
			   
		 }	,
		 {
		   idNo:15,
		   name:'Heron',
		   image:'img/heron.jpg',
		   group:'Bird',
		   detail:" The heron is a large species of bird that inhabits wetlands and areas that are close to lakes, ponds and rivers. Some species of heron are also known as egrets and bitterns instead of being called herons. These birds fly with their necks in rather than outstretched.There are 64 different species of heron found inhabiting the wetlands around the world. Herons are commonly found in Europe and North America along with the more temperate regions of Africa, Asia and Australia."
			   
		 }	,
		 {
		   idNo:16,
		   name:'Ibis',
		   image:'img/ibis.jpg',
		   group:'Bird',
		   detail:"Ibis are a group of birds that are found all over the world, but more commonly in the more temperate regions of the southern hemisphere. Ibis are most well known for their long necks and beaks which help them to get food out of the water. The ibis is found inhabiting areas where there are large amounts of water. There are roughly 30 different species of ibis found around the world that vary in size and colour depending on the species"
			   
		 }	,
		 {
		   idNo:17,
		   name:'Indochinese Tiger',
		   image:'img/indochinese_tiger.jpg',
		   group:'Mammal',
		   detail:"The Indochinese tiger (also known as the Corbett's tiger) is a subspecies, medium sized species of tiger, found throughout south-east Asia. The Indochinese tiger is now an endangered species and actually thought to be extinct in the Chinese wild today.The Indochinese tiger is found throughout Cambodia, Laos, Thailand, Burma and Vietnam, although the Indochinese tiger's range is much smaller now than it once was and no Indochinese tigers have been seen in the wild in China since 2007. Due to the size and power of the Indochinese tiger, it has no natural predators in its native environment."
			   
		 }	,
		 {
		   idNo:18,
		   name:'Japanese Chin',
		   image:'img/japanese_chin.jpg',
		   group:'Mammal',
		   detail:"The Japanese chin is considered one of the most cat-like of the dog breeds in attitude: it is alert, intelligent, and independent, and it uses its paws to wash its face. Other cat-like traits include their preference for resting on high surfaces such as the backs of sofas and chairs, their ability to walk across a coffee table without disturbing an item "
			   
		 }	,
		 {
		   idNo:19,
		   name:'Juguar',
		   image:'img/jaguar.jpg',
		   group:'Mammal',
		   detail:"The Jaguar is an enormous and muscular animal that has a heavier and sturdier body than that of a Leopard who they are closely related to. They have a large, broad head with jaws that comes with a powerful bite. The Jaguar is the third biggest Cat in the world behind the Tiger and the Lion. They are well known for their immense power and agility. In fact, the name Jaguar is said to come from the Native American word yaguar which means 'he who kills with one leap'. Despite their incredible power however, Jaguars have been hunted through the ages mainly for their staggeringly beautiful fur. "
			   
		 }	,
		 {
		   idNo:20,
		   name:'Kiwi',
		   image:'img/kiwi.jpg',
		   group:'Bird',
		   detail:"The kiwi is a brown, fuzzy, flightless bird native to the forests and jungles of New Zealand. Due to the predators like dogs, cats, rats, ferrets and weasels, Kiwi has become endanger because these predators hunt and eat the Kiwi egg’s. The kiwi is almost helpless against these predators. There are many different species of kiwi, but all of them can only be found inhabiting the forests of New Zealand."
			   
		 }	,
		 {
		   idNo:21,
		   name:'King Crab',
		   image:'img/king_crab.jpg',
		   group:'Crustacean',
		   detail:"King Crabs are known for their sheer size but only a couple of species get really big. King crabs are mainly found in the Southern Hemisphere where the waters are warmer. Red king crabs can have a leg span of up to 1.8m, blue king crabs often weigh over 8kg! Small fish and plankton are King crab’s prey. "
			   
		 }	,
		 {
		   idNo:22,
		   name:'Leaf-Tailed Gecko',
		   image:'img/leaf-tailed_gecko.jpg',
		   group:'Reptile',
		   detail:"The leaf-tailed gecko (also known as the flat-tailed gecko) is a group of geckos that are found only on the African island of Madagascar and on a number of the small islands that surround it. There are eight different species of leaf-tailed gecko all of which are endemic to the island. Leaf-tailed geckos are found in both the primary and secondary tropical forests of Madagascar where they are either found attached vertically to the tree trunks or resting amongst the twigs, depending on the species. Due to drastic deforestation gecko are threatened. "
			   
		 }	,
		 {
		   idNo:23,
		   name:'Lobster',
		   image:'img/lobster.jpg',
		   group:'Crustacean',
		   detail:"The lobster is one of the largest types of crustacean with some lobster species known to get to weigh over 20 kg. Lobsters live on rocky, sandy, or muddy bottoms close to the shoreline to beyond the edge of the continental shelf as the lobster prefers the shallower ocean water. The lobster is generally found to live by itself, where the lobster hides in crevices and in burrows under rocks. Lobsters have been known to live to over 100 years old, the lobster continues to grow in size throughout as a result the adult lobsters grow large in size."
			   
		 }	,
		 {
		   idNo:24,
		   name:'Masked Palm Civet ',
		   image:'img/masked_palm_civet.jpg',
		   group:'Mammal',
		   detail:"The masked palm civet (also known as the Himalayan Palm Civet) is a smaller species of civet found throughout the jungles of south-east Asia and across the Indian sub-continent. The masked palm civet is found inhabiting the tropical jungles and rainforests throughout much of south-east Asia, and throughout India and China. The masked palm civet is also found on a number of the tropical islands surrounding the Asian continent The masked palm civet are losing their habitat due to deforestation."
			   
		 }	,
		 {
		   idNo:25,
		   name:'Markhor',
		   image:'img/markhor.jpg',
		   group:'Mammal',
		   detail:" The markhor is an endangered species of wild goat that is natively found in the mountainous regions of western and central and Asia. The markhor.The markhor is a very distinctive species of wild goat, easily identified by it's long, white winter hair and huge spiralled horns that can grow to more than 1.5 meters in length on the males. The horns of the females are, although still large for goats, generally less than 50cm in length.The markhor is most commonly found inhabiting the high-altitude monsoon forests that litter these areas."
			   
		 },
		 {
		   idNo:26,
		   name:'Nightingale',
		   image:'img/nightingale.jpg',
		   group:'Bird',
		   detail:"The nightingale is a small species of bird thought to be formally members of the thrush family. The nightingale is often mistaken for the robin, as the nightingale is about the same size and the female robin is very similar in appearance to the nightingale.The nightingale is a morning bird and the nightingale can often be heard singing it's loud song at dawn. In urban areas, the nightingale will sing even louder at dawn to make up for the extra background noise."
			   
		 },
		 {
		   idNo:27,
		   name:'Nurse Shark',
		   image:'img/nurse_shark.jpg',
		   Fishgroup:'RealFish',
		   group:'Fish',
		   detail:"The nurse shark is most commonly found in the waters around central America.  The nurse shark can also be found around the Caribbean Islands and from southern California to Peru on the American west coast. The nurse shark preys on fish, shrimp, sea urchins. Nurse sharks commonly habitat reefs, channels between mangrove islands and sand flats, where food is in a large amount. "
			   
		 },
		 {
		   idNo:28,
		   name:'Ocelot',
		   image:'img/ocelot.jpg',
		   group:'Mammal',
		   detail:"The Ocelot is a medium-sized small cat that is native to the jungles of South America. The Ocelot is also known as the Painted Leopard due to the beautifully distinctive markings on it's fur as it displays dark rosettes, along with spots and stripes. Similar in colouration to the much smaller but closely related Margay, the Ocelot was nearly driven to extinction in the 20th century as they were commonly hunted for their fur. Today however, national protection throughout much of their natural range has meant that the Ocelot population has been able to recover somewhat. The Ocelot is a strong and agile cat that can not only climb and run well but they are also good swimmers as they are not afraid of water like numerous other cat species."
			   
		 },
		 {
		   idNo:29,
		   name:'Okapi',
		   image:'img/okapi.jpg',
		   group:'Mammal',
		   detail:"The Okapi is an elusive herbivore that is found in a small pocket of tropical mountain forest in central Africa. Despite it's Deer-like appearance the Okapi is actually one of the last remaining ancestors of the Giraffe, which is the tallest animal on Earth. Along with having a relatively long neck compared to it's body size, the most striking feature of the Okapi is the horizontal stripes that are particularly visible on their behinds and give this animal an almost Zebra-like appearance. The Okapi is very shy and secretive, so much so in fact that they were not recognised as a distinct species by western science until the earth 20th century. Although they are seldom seen by people, the Okapi is not an endangered species as they are thought to be fairly common in their remote habitats."
			   
		 },
		 {
		   idNo:30,
		   name:'Pekingese',
		   image:'img/pekingese.jpg',
		   group:'Mammal',
		   detail:"The Pekingese dog is over 2000 years old and has hardly changed in all that time. One exception is that modern breeders and dog-show judges seem to prefer the long-haired type over the more-traditional spaniel-type coat.The Pekingese, when lifted, is surprisingly heavy for its size. It has a stocky, muscular body. All weights are correct within the limit of 14 pounds. Disqualification: Weight over 14 pounds. Proportion - Overall balance is of utmost importance. The head is large in proportion to the body. The Pekingese is slightly longer than tall when measured from the forechest to the buttocks. The overall outline is an approximate ratio of 3 high to 5 long"
			   
		 },
		 {
			idNo:31,
			 name:'Puffer Fish',
			 image:'img/puffer_fish.jpg',
			 Fishgroup:'RealFish',
			 group:'Fish',
			 detail:"The puffer fish (also known as the blowfish and the toadfish) is a medium-sized species of fish that inhabits warmer, coastal waters around the world. The puffer fish is most well known for it's unique and distinctive adaptations that the puffer fish has to defend itself.There are around 120 known species of puffer fish, the second most poisonous creature on the planet after the Golden Poison Frog. The puffer fish is found in tropical waters worldwide, but they rarely go into the cooler waters.The puffer fish has the remarkable ability to expand its body extremely quickly when faced with danger, unavailing it's long poisonous spikes that cover its body. If a fisherman catches a puffer fish, they will never touch the spikes as they are highly toxic to humans and animals."
		 },
		 {
		   idNo:32,
		   name:'Quetzal',
		   image:'img/quetzal.jpg',
		   group:'Bird',
		   detail:"The Quetzal is a medium sized bird that is found inhabiting the moist, tropical rainforests of Central America from southern Mexico right down into Panama. There are six sub-species of Quetzal that are found in varying geographic locations including the Crested Quetzal, the Golden-headed Quetzal, the White-tipped Quetzal, the Pavonine Quetzal, the Eared Quetzal and the most famously known Resplendent Quetzal, all of which belong to the Trogon family of birds. The Quetzal is an immensely coloured animal with metallic plumage and is widely considered to be one of the most strikingly-beautiful birds in the world. They are most well known for the long tail feathers of the males.The Quetzal is an incredibly coloured bird with males displaying a bright metallic green or blue on most of their bodies besides the deep red of the chest and belly. The male Quetzal also has a distinctive tuft of golden green feathers that form a crest on top of their heads and immensely long twin tail feathers that can grow up to a meter in length"
			   
		 },
		 {
		   idNo:33,
		   name:'Quokka',
		   image:'img/quokka.jpg',
		   group:'Mammal',
		   detail:"The Quokka is a small marsupial that is natively found in parts of the south-west of Australia and on only two islands off the south-west coast. The Quokka is one of the smallest Wallaby species in the world, and most distinctively differs from other Wallabies with their short and barely-furred tail and small hind legs. Out of the roughly 50 known Kangaroo and Wallaby (and other marsupial) species on the continent however, the Quokka is one of three whose ancestry is still fairly hazy today. The fact that the Quokka browses for food rather than simply grazing makes it quite different to other species, but despite all this, many agree that they are most closely related to the Rock Wallaby. The Quokka is a small species of Wallaby that has a rounded and compact body. Their hind legs and tail are much shorter in comparison to those of many Wallaby species, but allow the Quokka to hop through the thick vegetation and tall grasses with immense speed. "
			   
		 },
		 {
		   idNo:34,
		   name:'Red Panda',
		   image:'img/red-panda.jpg',
		   group:'Mammal',
		   detail:"The Red Panda is a cat-sized species of carnivorous mammal that is found inhabiting the temperate mountain forests on the slopes of the Himalayas. As their name suggests, they are related to the larger and more famous Giant Panda (although the exact closeness of their connection still remains uncertain to science), along with also sharing a number of characteristics with the Raccoon and so Red Pandas are classified in a family of their own. The Red Panda is also known by a number of different names in their native regions including the Lesser Panda, the Red Cat-Bear and as the Fire Fox in Nepal. Like their much larger cousin, the Red Panda relies on bamboo to feed and with rapid deforestation of these unique areas there is less and less for these animals to eat, which has ultimately led to the Red Panda being listed as being an endangered species."
			   
		 },
		 {
		   idNo:35,
		   name:'Red-handed Tamarin',
		   image:'img/Red-handedTamarin.jpg',
		   group:'Mammal',
		   detail:"The red-handed tamarin (also known as the Golden-handed Tamarin and the Midas Tamarin) is a New World monkey named for the reddish hair on it's hands and feet. The red-handed tamarin is native to the moist woodland areas along the Amazon river in South America.The red-handed tamarin is found inhabiting the forest alongside the Amazon throughout Brazil, Guyana, French Guiana, Suriname, and Venezuela. Although once quite large, the natural territory of the red-handed tamarin has rapidly decreased today due to deforestation.The red-handed tamarin is an exceptional climber and spends most of it's time among the vines and branches of the trees. Red-handed tamarins are quick and agile and are superb jumpers known to jump distances of over 60 feet (18 m) from a tree to the ground when needed."
			   
		 },
		 {
		   idNo:36,
		   name:'Sabre-Toothed Tiger',
		   image:'img/saber-tooth-tigers.jpg',
		   group:'Mammal',
		   detail:"The sabre-toothed tiger is one of the most well-known prehistoric animals along with giants such as the woolly mammoth. Sabre-toothed tigers roamed the mid-western US and parts of both North and South America and were named for the enormous canines which skeletons show, protruded quite far out of their mouths.It became extinct in the Quanternary period(the end of the dinosaur period) and during the ice age.Despite it's name, the sabre-toothed tiger was not actually related to the modern tigers that are found throughout the jungles of Asia. It is thought that the sabre-toothed tiger would have roamed across the grassland plains and open woodlands throughout both North and South America where individuals would of varied slightly depending on the area which they inhabited.The sabre-toothed tiger is one of the best known ice-age animals but little is really known about them as they are thought to have become extinct around 10,000BC which is a long time ago. The sabre-toothed tiger was named for the canines that could grow to more than 7 inches in length and were capable of fatally wounding their prey with one bite."
			   
		 },
		 {
		   idNo:37,
		   name:'Scorpion Fish',
		   image:'img/scorpion-fish.jpg',
		   Fishgroup:'RealFish',
		   group:'Fish',
		   detail:"A scorpion fish is a group of predatory, marine fish that are found amongst coral reefs and in shallow waters in the more temperate oceans. The scorpion fish is most closely related to the lionfish and is most commonly found in the Indian and South Pacific oceans.here are more than 200 recognised species of scorpion fish, hiding amongst the ocean reefs and in artificial aquariums around the world. Scorpion fish are kept in tanks by numerous people because of their interesting appearance and behaviour.The body of the scorpion fish is often cover in feathery fins that help the scorpion fish to camouflage itself into the surrounding coral. The colours and markings of the scorpion fish are also used to help the scorpion fish to hide."
			   
		 },
		 {
		   idNo:38,
		   name:'Tasmanian Devil',
		   image:'img/tasmanian-devil.jpg',
		   group:'Mammal',
		   detail:"The  Tasmanian devil is a carnivorous marsupial and the Tasmanian devil is therefore distantly related to kangaroos and wombats. Although the Tasmanian devil's closest relative is a kangaroo, the Tasmanian devil has the appearance of a wild dog The Tasmanian devil is only found on the Australian island state of Tasmania.The Tasmanian devil is characterized by their black fur and the offensive odour the Tasmanian devil secretes when stressed. The Tasmanian devil is also known to making a horrible, loud screeching sound when the Tasmanian devil is distressed or feels threatened.Since the late 1990s, a nasty facial mutation disease has caused the Tasmanian devil population to decline, meaning that the Tasmanian devil is now an endangered species. The facial mutation disease is thought to be a type of cancer and ends in fatality about a year after it is contracted."
			   
		 },
		 {
		   idNo:39,
		   name:'Tiffany Cat',
		   image:'img/tiffany.jpg',
		   group:'Mammal',
		   detail:"The Tiffany cat is a feline with a semi-foreign body style and a full semi-long coat. The coat is silky, soft and smooth; the lack of undercoat usually makes grooming simpler than that of cats with an undercoat. Somewhat a late bloomer, the Tiffany is slow to mature and usually does not come into its full stature until about two years old. The eye colour of the feline intensifies with age.The head should be a broad, modified wedge with gentle curves. It should have a medium length nose and a strong, broad, short and softly squared muzzle, and defined but not obvious whisker pads"
			   
		 },
		 {
		   idNo:40,
		   name:'Uguisu',
		   image:'img/uguisu.jpg',
		   group:'Bird',
		   detail:"The Uguisu is a small species of bird that is natively found throughout Japan, China and Taiwan, along with a number of other regions of the far east. The Uguisu is also commonly known as the Japanese Bush-Warbler, as it is named for it's beautifully distinctive song. The Uguisu is most closely related to other small songbirds including Bushtits and Nightingales which they are similar in appearance too, although the Uguisu is generally very slightly larger. Although they do not sing at night, the beauty of the Uguisu's song is said to have led to them also being known as the Japanese Nightingale. The Uguisu was first described as a documented species by Heinrich von Kittlitz in 1830.The Uguisu is a small-sized bird that is known for it's fairly dull colouration, particularly in comparison with the beauty of it's song. They tend to be olive-green or light brown in colour with darker plumage towards the tips of their wings and tail. "
			   
		 },
		 {
		   idNo:41,
		   name:'Umbrellabird',
		   image:'img/umbrellabird.jpg',
		   group:'Bird',
		   detail:"The Umbrellabird is a large, tropical species of bird that is found inhabiting the rainforests of Central and South America. There are three different species of Umbrellabird which are the Long-Wattled Umbrellabird, the Amazonian Umbrellabird and the Bare-Necked Umbrellabird all of which live in slightly different areas. All three species are relatively similar in appearance with an umbrella-like crest on the top of their heads (for which they were named) and a pendant-shaped inflatable pouch on their throats. They are the largest species of perching bird (Passerine) in South America but populations are currently falling mainly due to habitat loss.The most distinctive feature of the Umbrellabird is the large crest on the top of it's head. During mating, the males fan their crest out so that it nearly covers the whole of their head and they then begin to make rumbling sounds to attract a female. The long, curved feathers are then retracted, making the Umbrellabird more discreet the rest of the time."
			   
		 },
		 {
		   idNo:42,
		   name:'Vervet Monkey',
		   image:'img/vervetmonkey.jpg',
		   group:'Mammal',
		   detail:"The Vervet Monkey is a medium to large sized monkey that is primarily found in Eastern Africa. The Vervet Monkey is thought to be a species of Grivet, another tree-dwelling African monkey that has very similar characteristics to the Vervet, along with the Malbrouck which is considered by some to be a sub-species of Vervet Monkey. These three animals are very closely related but they tend to inhabit territories in slightly different locations and are thought to rarely come into contact with one another. There are currently six recognised sub-species of the Vervet Monkey that are generally classified depending on their location, although there is some difference in colouration between them.The Vervet Monkey grows to an average of 50cm tall, with a tail that is often longer than the body itself and has a black tip. Their fur tends to be grey or olive in colour (depending on the species) and is lighter on their underside. "
			   
		 },
		 {
		   idNo:43,
		   name:"Vulture",
		   image:"img/vulture.jpg",
		   group:"Bird",
		   detail:"The vulture is a large, carnivorous bird that is most well known for its scavenging nature. The vulture is one of the few types of bird that is found distributed so widely around the world, as vultures are found on every continent excluding the Antarctic and Australia and the islands that surround it.Different species of vultures of firstly classified into two groups, the old world vultures and the new world vultures. There are thought to be nearly 30 different species of vulture that are found worldwide.The old world vultures are found in Asia, Europe and Africa with these species of vulture thought to be most closely related to eagles and hawks. The old world vulture is not thought to be closely related to the new world vulture and the old world vulture uses its spectacular sight alone in order to find food."
			   
		 },
		 {
		   idNo:44,
		   name:'Whale Shark',
		   image:'img/whaleshark.jpg',
		   group:'Fish',
		   Fishgroup:'RealFish',
		   detail:"The whale shark is the largest species of fish with some adult whale sharks growing to nearly 50ft long! The whale shark is thought to have developed around 60 million years ago making the whale shark one of the oldest species on Earth today.The whale shark spends it's life swimming through the open oceans in search of fish and squid. Unlike many other species of shark, the whale shark is known to feed on large shoals of tiny fish rather than hunting bigger fish and sea mammals. This makes the whale shark a filter feeder similar to whales and smaller sea animals.The whale shark inhabits the warm, tropical waters around the equator and despite often being found close to coastlines, the whale shark is also known to dive to depths of up to 700 meters (that over 2,000ft deep). In this part of the ocean, food is more scarce and the whale shark will therefore only venture to such depths if hunting in the shallower waters is not possible."
			   
		 },
		 {
		   idNo:45,
		   name:'Wolverine',
		   image:'img/wolverine.jpg',
		   group:'Mammal',
		   detail:"The wolverine is a medium sized mammal that despite it's bear-like appearance (and it's name) is most closely related to the weasel. The wolverine is known to be strong and vicious and is said to have immense strength in comparison to it's size.The wolverine is found throughout Canada, Europe, parts of North America and the Arctic Circle where the wolverines inhabit mountainous regions and dense forests. Wolverines are also known to venture into more open areas such as plains and farmland when they are in search of food.The wolverine generally eats mice, rats and other small mammals. During the summer months when these small animals are in abundance. During the bitter winter however, when snow covers the ground, the wolverine tends to hunt larger animals such as reindeer (caribou), sheep and moose. Despite the fact that the wolverine is known to be capable of hunting down and killing animals that are so much bigger than itself, the wolverine tends to prefer to scavenge the kills of other animals such as wolves and bears. The wolverine will let the larger predators hunt the prey down and the wolverine then chases the hunter away by showing its teeth and growling fiercely. Then the wolverine is left to eat the kill. "
			   
		 },
		 {
		   idNo:46,
		   name:'X-Ray Tetra',
		   image:'img/X-Ray-Tetra.jpg',
		   group:'Fish',
		   Fishgroup:'RealFish',
		   detail:"X-Ray Tetra Classification and EvolutionThe X-Ray Tetra is a small species of schooling Fish that is naturally found in the Amazon River's coastal waters in South America. The X-Ray Tetra is also known as the Golden Pristella Tetra and the Water Goldfinch due to the faint golden colouration of their translucent skin. They were first described by Ulrey in 1894 and have since become one of the most popular freshwater Fish kept in artificial aquariums today. Although the X-Ray Tetra is the only known species in it's genus, it is closely related to other small and colourful South American Fish, including the nearly 100 other Tetra species.The most distinctive feature of the X-Ray Tetra is the translucent layer of skin that covers it's small body, allowing the Fish's backbone to be clearly seen. The scales of the X-Ray Tetra are a silvery-yellowish colour that is very faint, looking almost golden in some lights. "
			   
		 },
		 {
		   idNo:51,
		   name:'Xenops',
		   image:'img/xenops.jpg',
		   group:'Bird',
		   detail:"The Xenops (Xenops minutus) is a small, solitary rain forest bird. It is found from southern Mexico down to northern Argentina at altitudes from sea level up to 5,000 feet. Xenops roosts in tree holes and has a fast, sharp-sounding song. There are other species of Xenops.The Plain Xenops is about 5 inches (12.5 cm) long. Unlike other types of Xenops, its back is deep brown and unstreaked. The wing and tail feathers are mostly cinnamon-colored. There is a pale stripe above and behind the eyes. Its underbelly is olive-colored and it has gray legs. The bill is dark, short, and pointed. "
			   
		 },
		 {
		   idNo:47,
		   name:'Yellow-Eyed Penguin',
		   image:'img/yellow-eyedpenguin.jpg',
		   group:'Bird',
		   detail:"The yellow-eyed penguin is one of the few penguin species found north of the Antarctic Ocean, and as it's name suggests, this species of penguin is easily idenitfied by it's yellow coloured eyes and bright yellow band that runs from it's eyes round the back of the yellow-eyed penguin's head.The yellow-eyed penguin is found off the coast of the south island of New Zealand where this species gathers in colonies along the beaches and boulder fields. The yellow-eyed penguin is also found on a few of the islands of the main island including Stewart, Auckland and the Campbell Islands.The yellow-eyed penguin generally searches for food up 10 miles offshore, and travels (on average) around 15 miles away from the colonies nesting site. The yellow-eyed penguin leaves the colony at dawn and returns the same evening during chick rearing."
			   
		 },
		 {
		   idNo:48,
		   name:'Yak',
		   image:'img/yak.jpg',
		   group:'Mammal',
		   detail:"The yak is a herd animal found in the mountainous regions of central Asia. The yak tend to gather in herds from 10 yaks to 100 yaks, most of which are female. There are only a few male yaks per herd.Although there is a large domestic population of yak, there are only a few wild yak remaining . The yak is still used in many parts of central Asia, for pulling heavy farm machines and transporting large loads through the mountain passes.The average male yak can grow to about 2meters tall, with the female yak being about 1/3 the size of the male yak. All yak have very long hair to keep them warm.The yak belongs to the same cow family as the Asian water buffalo, the African buffalo and the American bison. However, the yak is slightly more like the American bison in appearance as both the yak and the bison have long hair in order to withstand the colder climates, the bison of the North American winters and the yak of the mid-Asian mountains."
			   
		 },
		 {
		   idNo:49,
		   name:'Zebra Shark',
		   image:'img/zebrashark.jpg',
		   Fishgroup:'RealFish',
		   group:'Fish',
		   detail:"The zebra shark is a medium-sized species of shark, that is found in the warmer coastal waters and around tropical coral reefs. Zebra sharks are most commonly found in the Indian and South Pacific oceans.Zebra sharks can grow to nearly 3 meters in length and can get to be 30 years old in the wild. Zebra sharks that are kept in captivity generally do not exceed 15 years of age. Zebra sharks can be identified by the yellow spots that are present on the back of the zebra shark.Zebra sharks have a long, flattened body which helps them to remain unnoticed on the seabed. The zebra shark also has a long tail which allows it to be more agile in the water. Zebra sharks move their tails from side to side when they swim, in an eel-like manner."
			   
		 },
		 {
		   idNo:50,
		   name:'Zorse',
		   image:'img/zorse.jpg',
		   group:'Mammal',
		   detail:"The Zorse is one of a number of equine hybrids that are known as Zebroids, which is the name given to an equine hybrid that has Zebra ancestry. The Zorse is the result of cross-breeding a generally male Zebra (stallion) with a female Horse (mare) to produce an animal that looks more like a Horse than a Zebra, but one that has stripes. The Zebra part also gives the Zorse resistance to certain pests and diseases that normally affect both Horses and Donkeys, meaning that they are not only sturdy but also very hardy animals. Due to the fact that there are not only three different sub-species of Zebra but also nearly 300 different breeds of domestic Horse, the Zorse can vary quite dramatically particularly in size and colour, depending on it's parents. The Zorse is very Horse-like in appearance as it inherits it's shape, size, colour and temperament from it's mother. One of the Zorse's most notable features is the dark stripes that are boldest on their legs and rear, along with also commonly being found on the rest of the body, neck and head."
			   
		 }
		 
		   
		   
		   
		   
		   
	];	
	
	
	

	
	
	
	
	
});

//============================================================


