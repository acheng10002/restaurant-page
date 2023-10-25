// headings object with three headings/keys, each with a different set of icons
const headings = {
    'home': { 'heading': "Fuzhou Eats", 'icon1': "scallions-left", 'icon2': "noodles-right" },
    'menu': { 'heading': "Food Menu", 'icon1': "dumplings-left",'icon2': "cabbage-right" },
    'contact': { 'heading': "Contact Info", 'icon1': "noodles-left", 'icon2': "dumplings-right" }
}

// home page intro array
const homeIntro = [
    {
        'image': "./img/fuzhou_map.jpg",
        'alt': "map of china with fuzhou highlighted",
        'text': "Fuzhou cuisine, hailing from China's Fujian province, emphasizes fresh seafood, mountainous ingredients, and a delicate balance of umami and sweetness. Broths are intricate, often brewed with bone stock and seafood. Soups, stews, and braised dishes showcase its depth, while the use of fermented products enhances complexity and flavor."
    }
]

// default time object to spread into the days
const defaultHours = { 'open': '9', 'close': '9' };

/* home page object with two cards/keys, one key whose value is an hours info object (overiding the days 
that differ from the default time object) and the other key whose value is a location info object */
const homeHoursLocation = {
    'hours': {
        'sunday': { ...defaultHours, 'close': '4' },
        'monday': { ...defaultHours },
        'tuesday': { ...defaultHours },
        'wednesday': { ...defaultHours },
        'thursday': { ...defaultHours },
        'friday': { ...defaultHours, 'close': '3' }, 
        'saturday': { ...defaultHours }
    },
    'location': {
        'street': "888 Arch St",
        'city': "Philadelphia",
        'state': "Pennsylvania",
        'image': "./img/fuzhou_eats.png",
        'alt': "map of restaurant location"
    }
}

// contact page array of three staff member objects
const contactStaff = [
    {
        'name': "Alice Zhu",
        'position': "Back of House Operations",
        'phone': "987-654-3210",
        'email': "alice@fuzhou-eats.com",
        'image': './img/wok_spatula.jpg',
        'alt': "wok with food and spatula" 
    },
    {
        'name': "Byron Yee",
        'position': "Back of House Support",
        'phone': "987-654-3211",
        'email': "byron@fuzhou-eats.com",
        'image': './img/knife_board.jpg',
        'alt': "knife and board with vegetables" 
    },
    {
        'name': "Claire Xiang",
        'position': "Front of House Operations",
        'phone': "987-654-3212",
        'email': "claire@fuzhou-eats.com",
        'image': './img/place_setting.jpg',
        'alt': "place setting" 
    }
]

// menu page array of 16 objects, 4 subheadings and 12 menu item
const menuItems = [
    {
        'item': false,
        'subheading': 'Snacks'
    },
    {
        'item': true,
        'name': "Oyster Pancake / Taro Cake / Fuzhou Pancake",
        'description': "Round, made with pork, oyster, spring onion, grated cabbage, and rice flour / Triangular, made of ground taro, first steamed and then deep-fried / Snack with a hole, made with sausage, spring onion, and rice flour",
        'price': "$3 / $2 / $3",
        'image': "./img/pancakes_cake.jpg",
        'alt': "image of oyster pancake, taro cake, and fuzhou pancake"
    },
    {
        'item': true,
        'name': "Fried Dough",
        'description': "deep-fried strip of wheat flour dough",
        'price': '$1',
        'image': "./img/fried_dough.jpg",
        'alt': "image of fried dough"
    },
    {
        'item': true,
        'name': "Pan-Fried Buns",
        'description': "wheat buns with a center of seasoned pork, pan-fried",
        'price': '$6',
        'image': "./img/pan_fried_buns.jpg",
        'alt': "image of pan-fried buns"
    },
    {
        'item': false,
        'subheading': 'Soups'
    },
    {
        'item': true,
        'name': "Pork Dumpling Soup",
        'description': "minced pork, ginger, garlic, and spring onion in glutinous rice wrappers in pork broth",
        'price': '$4',
        'image': "./img/pork_dumpling_soup.jpg",
        'alt': "image of prok dumpling soup"
    },    
    {
        'item': true,
        'name': "Fuzhou Wonton Soup",
        'description': "minced pork and shrimp, mushrooms, ginger, and spring onion in silky wheat wrappers in pork broth",
        'price': '$5',
        'image': "./img/fuzhou_wonton_soup.jpg",
        'alt': "image of fuzhou wonton soup"

    },
    {
        'item': true,
        'name': "Fishball Soup",
        'description': "balls made of ground fish paste with a filling of seasoned pork in chicken broth",
        'price': '$5',
        'image': "./img/fishball_soup.jpg",
        'alt': "image of fishball soup"
    },
    {
        'item': false,
        'subheading': 'Noodle Soups'
    },
    {
        'item': true,
        'name': "Clam Noodle Soup",
        'description': "clams, dried shrimp, day lily, spring onion, and flat rice noodles in chicken broth",
        'price': '$6',
        'image': "./img/clam_noodle_soup.jpg",
        'alt': "image of clam noodle soup"
    },
    {
        'item': true,
        'name': "Longevity Duck Noodle Soup",
        'description': "stewed duck, dried razor clam, shitake mushrooms, rice vermicelli noodles, and a hard-boiled egg in duck broth",
        'price': '$9',
        'image': "./img/longevity_duck_noodle_soup.jpg",
        'alt': "image of longevity duck noodle soup"
    },
    {
        'item': true,
        'name': "Duck Gizzard Noodle Soup",
        'description': "stewed duck gizzard, napa cabbage, shanghai bok choy, spring onion, rice vermicelli noodles in duck broth",
        'price': '$9',
        'image': "./img/duck_gizzard_noodle_soup.jpg",
        'alt': "image of duck gizzard noodle soup"
    },
    {
        'item': false,
        'subheading': 'Stir-Fried Noodles'
    },
    {
        'item': true,
        'name': "Vermicelli with Vegetables & Egg",
        'description': "scrambled egg, napa cabbage, celery, onion, and spring onion stir fried with rice vermicelli noodles",
        'price': '$6',
        'image': "./img/vermicelli_veg_egg.jpg",
        'alt': "image of vermicelli with vegetables & egg"
    },
    {
        'item': true,
        'name': "Noodles with Peanut Sauce",
        'description': "ramen noodles over sauce with peanut butter, soy sauce, and sesame oil",
        'price': '$5',
        'image': "./img/noodles_peanut_sauce.jpg",
        'alt': "image of noodles with peanut sauce"
    },
    {
        'item': true,
        'name': "Rice Noodles with Pork Intestines",
        'description': "pork intestines, scrambled egg, napa cabbage stir fried with thick rice noodles",
        'price': '$8',
        'image': "./img/noodles_pork_intestines.jpg",
        'alt': "image of rice noodles with pork intestines"
    }
]

export { headings, homeIntro, homeHoursLocation, contactStaff, menuItems };