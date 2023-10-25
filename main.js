/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactStaff: () => (/* binding */ contactStaff),\n/* harmony export */   headings: () => (/* binding */ headings),\n/* harmony export */   homeHoursLocation: () => (/* binding */ homeHoursLocation),\n/* harmony export */   homeIntro: () => (/* binding */ homeIntro),\n/* harmony export */   menuItems: () => (/* binding */ menuItems)\n/* harmony export */ });\n// headings object with three headings/keys, each with a different set of icons\nconst headings = {\n    'home': { 'heading': \"Fuzhou Eats\", 'icon1': \"scallions-left\", 'icon2': \"noodles-right\" },\n    'menu': { 'heading': \"Food Menu\", 'icon1': \"dumplings-left\",'icon2': \"cabbage-right\" },\n    'contact': { 'heading': \"Contact Info\", 'icon1': \"noodles-left\", 'icon2': \"dumplings-right\" }\n}\n\n// home page intro array\nconst homeIntro = [\n    {\n        'image': \"./img/fuzhou_map.jpg\",\n        'alt': \"map of china with fuzhou highlighted\",\n        'text': \"Fuzhou cuisine, hailing from China's Fujian province, emphasizes fresh seafood, mountainous ingredients, and a delicate balance of umami and sweetness. Broths are intricate, often brewed with bone stock and seafood. Soups, stews, and braised dishes showcase its depth, while the use of fermented products enhances complexity and flavor.\"\n    }\n]\n\n// default time object to spread into the days\nconst defaultHours = { 'open': '9', 'close': '9' };\n\n/* home page object with two cards/keys, one key whose value is an hours info object (overiding the days \nthat differ from the default time object) and the other key whose value is a location info object */\nconst homeHoursLocation = {\n    'hours': {\n        'sunday': { ...defaultHours, 'close': '4' },\n        'monday': { ...defaultHours },\n        'tuesday': { ...defaultHours },\n        'wednesday': { ...defaultHours },\n        'thursday': { ...defaultHours },\n        'friday': { ...defaultHours, 'close': '3' }, \n        'saturday': { ...defaultHours }\n    },\n    'location': {\n        'street': \"888 Arch St\",\n        'city': \"Philadelphia\",\n        'state': \"Pennsylvania\",\n        'image': \"./img/fuzhou_eats.png\",\n        'alt': \"map of restaurant location\"\n    }\n}\n\n// contact page array of three staff member objects\nconst contactStaff = [\n    {\n        'name': \"Alice Zhu\",\n        'position': \"Back of House Operations\",\n        'phone': \"987-654-3210\",\n        'email': \"alice@fuzhou-eats.com\",\n        'image': './img/wok_spatula.jpg',\n        'alt': \"wok with food and spatula\" \n    },\n    {\n        'name': \"Byron Yee\",\n        'position': \"Back of House Support\",\n        'phone': \"987-654-3211\",\n        'email': \"byron@fuzhou-eats.com\",\n        'image': './img/knife_board.jpg',\n        'alt': \"knife and board with vegetables\" \n    },\n    {\n        'name': \"Claire Xiang\",\n        'position': \"Front of House Operations\",\n        'phone': \"987-654-3212\",\n        'email': \"claire@fuzhou-eats.com\",\n        'image': './img/place_setting.jpg',\n        'alt': \"place setting\" \n    }\n]\n\n// menu page array of 16 objects, 4 subheadings and 12 menu item\nconst menuItems = [\n    {\n        'item': false,\n        'subheading': 'Snacks'\n    },\n    {\n        'item': true,\n        'name': \"Oyster Pancake / Taro Cake / Fuzhou Pancake\",\n        'description': \"Round, made with pork, oyster, spring onion, grated cabbage, and rice flour / Triangular, made of ground taro, first steamed and then deep-fried / Snack with a hole, made with sausage, spring onion, and rice flour\",\n        'price': \"$3 / $2 / $3\",\n        'image': \"./img/pancakes_cake.jpg\",\n        'alt': \"image of oyster pancake, taro cake, and fuzhou pancake\"\n    },\n    {\n        'item': true,\n        'name': \"Fried Dough\",\n        'description': \"deep-fried strip of wheat flour dough\",\n        'price': '$1',\n        'image': \"./img/fried_dough.jpg\",\n        'alt': \"image of fried dough\"\n    },\n    {\n        'item': true,\n        'name': \"Pan-Fried Buns\",\n        'description': \"wheat buns with a center of seasoned pork, pan-fried\",\n        'price': '$6',\n        'image': \"./img/pan_fried_buns.jpg\",\n        'alt': \"image of pan-fried buns\"\n    },\n    {\n        'item': false,\n        'subheading': 'Soups'\n    },\n    {\n        'item': true,\n        'name': \"Pork Dumpling Soup\",\n        'description': \"minced pork, ginger, garlic, and spring onion in glutinous rice wrappers in pork broth\",\n        'price': '$4',\n        'image': \"./img/pork_dumpling_soup.jpg\",\n        'alt': \"image of prok dumpling soup\"\n    },    \n    {\n        'item': true,\n        'name': \"Fuzhou Wonton Soup\",\n        'description': \"minced pork and shrimp, mushrooms, ginger, and spring onion in silky wheat wrappers in pork broth\",\n        'price': '$5',\n        'image': \"./img/fuzhou_wonton_soup.jpg\",\n        'alt': \"image of fuzhou wonton soup\"\n\n    },\n    {\n        'item': true,\n        'name': \"Fishball Soup\",\n        'description': \"balls made of ground fish paste with a filling of seasoned pork in chicken broth\",\n        'price': '$5',\n        'image': \"./img/fishball_soup.jpg\",\n        'alt': \"image of fishball soup\"\n    },\n    {\n        'item': false,\n        'subheading': 'Noodle Soups'\n    },\n    {\n        'item': true,\n        'name': \"Clam Noodle Soup\",\n        'description': \"clams, dried shrimp, day lily, spring onion, and flat rice noodles in chicken broth\",\n        'price': '$6',\n        'image': \"./img/clam_noodle_soup.jpg\",\n        'alt': \"image of clam noodle soup\"\n    },\n    {\n        'item': true,\n        'name': \"Longevity Duck Noodle Soup\",\n        'description': \"stewed duck, dried razor clam, shitake mushrooms, rice vermicelli noodles, and a hard-boiled egg in duck broth\",\n        'price': '$9',\n        'image': \"./img/longevity_duck_noodle_soup.jpg\",\n        'alt': \"image of longevity duck noodle soup\"\n    },\n    {\n        'item': true,\n        'name': \"Duck Gizzard Noodle Soup\",\n        'description': \"stewed duck gizzard, napa cabbage, shanghai bok choy, spring onion, rice vermicelli noodles in duck broth\",\n        'price': '$9',\n        'image': \"./img/duck_gizzard_noodle_soup.jpg\",\n        'alt': \"image of duck gizzard noodle soup\"\n    },\n    {\n        'item': false,\n        'subheading': 'Stir-Fried Noodles'\n    },\n    {\n        'item': true,\n        'name': \"Vermicelli with Vegetables & Egg\",\n        'description': \"scrambled egg, napa cabbage, celery, onion, and spring onion stir fried with rice vermicelli noodles\",\n        'price': '$6',\n        'image': \"./img/vermicelli_veg_egg.jpg\",\n        'alt': \"image of vermicelli with vegetables & egg\"\n    },\n    {\n        'item': true,\n        'name': \"Noodles with Peanut Sauce\",\n        'description': \"ramen noodles over sauce with peanut butter, soy sauce, and sesame oil\",\n        'price': '$5',\n        'image': \"./img/noodles_peanut_sauce.jpg\",\n        'alt': \"image of noodles with peanut sauce\"\n    },\n    {\n        'item': true,\n        'name': \"Rice Noodles with Pork Intestines\",\n        'description': \"pork intestines, scrambled egg, napa cabbage stir fried with thick rice noodles\",\n        'price': '$8',\n        'image': \"./img/noodles_pork_intestines.jpg\",\n        'alt': \"image of rice noodles with pork intestines\"\n    }\n]\n\n\n\n//# sourceURL=webpack://restaurant-page-draft/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _init_page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init_page_load.js */ \"./src/init_page_load.js\");\n\n\n\n\n// lists the IDs of the different tab options on the webpage\nconst tabOptions = ['home', 'menu', 'contact'];\n\nconst currentTab = tabOptions[0];\n\nconst pageInfo = document.getElementById('content');\n\n// initially load the content for the home page using the homeIntro and homeHoursLocation data\n(0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadContent)(currentTab, pageInfo, _config_js__WEBPACK_IMPORTED_MODULE_0__.homeIntro, _config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation);\n\n// iterate over each tab option in the array\ntabOptions.forEach(tabOption => {\n    var tab = document.getElementById(tabOption);\n\n    // error handling for the tab element\n    if (!tab) {\n        console.error(`Element for tab ${tabOption} not found.`);\n        return;\n    } \n    \n    // adds a click event listener to the tab\n    tab.addEventListener('click', () => {\n\n        // checks which tab was clicked and calls 'loadContent' to load the corresponding content\n        if (tab.id == 'home') {\n            (0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadContent)(tab.id, pageInfo, _config_js__WEBPACK_IMPORTED_MODULE_0__.homeIntro);\n        } else if (tab.id == 'menu') {\n            (0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadContent)(tab.id, pageInfo, _config_js__WEBPACK_IMPORTED_MODULE_0__.menuItems);\n        } else {\n            (0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadContent)(tab.id, pageInfo, _config_js__WEBPACK_IMPORTED_MODULE_0__.contactStaff);\n        }\n    });\n});\n\n\n//# sourceURL=webpack://restaurant-page-draft/./src/index.js?");

/***/ }),

/***/ "./src/init_page_load.js":
/*!*******************************!*\
  !*** ./src/init_page_load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n// import two objects \n\n\n// clears content of entire page\nfunction clearContent(pageInfo) {\n    pageInfo.textContent = '';\n    return true;\n}\n\n// DOM manipulation logic for heading elements\nfunction attachHeadingElements(pageHeading, icon1, icon2) {\n    \n    // get the source paths for the icons\n    let [icon1Src, icon2Src] = getIconSrcForHeading(pageHeading);\n    let icon_1 = makeIcon(icon1Src, icon1);\n    let heading = makeHeading(pageHeading);\n    let icon_2 = makeIcon(icon2Src, icon2);\n\n    // create a div element to serve as a container for the heading and icons\n    let headingContainer = document.createElement('div');\n    headingContainer.classList.add('heading-container');\n    headingContainer.appendChild(icon_1);\n    headingContainer.appendChild(heading);\n    headingContainer.appendChild(icon_2);\n\n    return headingContainer;\n}\n\n// DOM manipulation logic for heading elements\nfunction makeIcon(src, className) {\n    let icon = document.createElement('img');\n    // set the source attribute of the img element\n    icon.setAttribute('src', src);\n    icon.classList.add('icons', className);\n    return icon;\n}\n\n// DOM manipulation logic for heading elements\nfunction makeHeading(text) {\n    let heading = document.createElement('h1');\n    heading.textContent = text;\n    heading.classList.add('heading');\n    return heading;\n}\n\n// data manipulation logic for heading elements\nfunction getIconSrcForHeading(pageHeading) {\n\n    // defines a map to associate pageHeadings with icon source paths\n    const iconMap = {\n        'Fuzhou Eats': ['./img/scallions.png', './img/noodles.png'], \n        'Menu Items': ['./img/dumplings.png', './img/cabbage.png'], \n        'default': ['./img/noodles.png', './img/dumplings.png'] \n    };\n\n    // retrieve the array of icon source paths for the given pageHeading. If not found, use the default\n    return iconMap[pageHeading] || iconMap.default;\n\n}\n\n// data manipulation logic for homeIntro; data factory\nfunction makeHomeIntro(aIntro, image, alt) {\n\n    // returns an array of objects that describe the elements to be created\n    return [\n        {\n            // 'type' of content is 'home-intro'\n            'type': 'home-intro'\n        },\n        {\n            'element': 'img',\n            'text': alt,\n            'class': 'intro-image',\n            'source': image\n        },\n        {\n            'element': 'p',\n            'text': aIntro,\n            'class': 'intro-text'\n        }\n    ]\n}\n\n// data manipulation logic for homeInfo; data factory\nfunction makeHomeInfo() {\n\n    // error handling for the global variable, homeHoursLocation\n    if (!_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation || !_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours || !_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location) {\n        console.error('Invalid homeHoursLocation data.');\n        return null;\n    }\n\n    // returns an array of two arrays that describe the hours and location information for the home page\n    return [[\n\n        // first array describes 'home-hours' and has 8 objects describing elements for the hours for each day of the week\n        {\n            'type': 'home-hours'\n        },\n        {\n            'element': 'h3',\n            'text': 'Hours',\n            'class': 'hours'\n        },\n        {\n            'element': 'p',\n            'text': `Sunday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.sunday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.sunday.close}pm`,\n            'class': 'sunday'\n        },\n        {\n            'element': 'p',\n            'text': `Monday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.monday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.monday.close}pm`,\n            'class': 'monday'\n        },\n        {\n            'element': 'p',\n            'text': `Tuesday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.tuesday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.tuesday.close}pm`,\n            'class': 'tuesday'\n        },\n        {\n            'element': 'p',\n            'text': `Wednesday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.wednesday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.wednesday.close}pm`,\n            'class': 'wednesday'\n        },\n        {\n            'element': 'p',\n            'text': `Thursday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.thursday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.thursday.close}pm`,\n            'class': 'thursday'\n        },\n        {\n            'element': 'p',\n            'text': `Friday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.friday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.friday.close}pm`,\n            'class': 'sunday'\n        },\n        {\n            'element': 'p',\n            'text': `Saturday: ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.saturday.open}am - ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.hours.saturday.close}pm`,\n            'class': 'saturday'\n        }],\n\n        // second array describes 'home-location' and has 3 objects describing elements for the location\n        [{\n            'type': 'home-location'\n        },\n        {\n            'element': 'h3',\n            'text': 'Location',\n            'class': 'location'\n        },\n        {\n            'element': 'p',\n            'text': `${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location.street}, ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location.city}, ${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location.state}`,\n            'class': 'address'\n        },\n        {\n             'element': 'img',\n             'text': `${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location.alt}`,\n             'class': 'location-image',\n             'source': `${_config_js__WEBPACK_IMPORTED_MODULE_0__.homeHoursLocation.location.image}`\n        }]\n    ]\n}\n\n// DOM manipulation logic for InfoCards; utility function\nfunction attachInfoCardsToDOM(infoCard, element) {\n    infoCard.appendChild(element);\n}\n\n// DOM manipulation logic for infoCards/ all content\nfunction makeInfoCards(info) {\n\n    // error handling for 'info'\n    if (!info || !info.length) {\n        console.error('Invalid or empty info data.');\n        return null;\n    }\n\n    let infoCard = document.createElement('div');\n    infoCard.classList.add(info[0]['type']);\n\n    // iterate through the 'info' array starting from index 1\n    for (let i = 1; i < info.length; i++) {\n\n       // variable to store the new DOM element \n       let element;\n\n       // variable to store the text node\n       let elementText;\n\n       // create elements based on the 'element' field in each object\n       switch (info[i]['element']) {\n           case 'p': \n               element = document.createElement('p');\n               elementText = document.createTextNode(info[i]['text']);\n               element.appendChild(elementText);\n               break;\n           case 'h3':\n               element = document.createElement('h3');\n               elementText = document.createTextNode(info[i]['text']);\n               element.appendChild(elementText);\n               break;\n           case 'img':\n               element = document.createElement('div');\n               element.style.backgroundImage = `url(${info[i]['source']})`;\n               element.setAttribute('title', info[i]['text']);\n               break;\n           default:\n               element = document.createElement('div');\n               break;\n       }\n\n       element.classList.add(info[i]['class']);\n\n       // add the newly create element to the infoCard container\n       attachInfoCardsToDOM(infoCard, element);\n    }\n\n    // return the full populated infoCard container\n    return infoCard;\n}\n\n// DOM manipulation logic for menu subheadings; constructs their DOm structure\nfunction makeSubheadingElements(subheading) {\n    let subheadingContainer = document.createElement('div');\n    subheadingContainer.classList.add('heading-container');\n    subheadingContainer.classList.add('subheading-container');\n\n    let subHeading = document.createElement('h2');\n    subHeading.textContent = subheading;\n\n    subheadingContainer.appendChild(subHeading);\n\n    return subheadingContainer;\n}\n\n// data manipulation for menuItems; data factory\nfunction makeMenuInfo(name, description, price, image, alt) {\n\n    // returns an array of 5 objects\n     return [\n\n         // first object, 'type' is 'menu-info'\n         {\n             'type': 'menu-info'\n         },\n\n         // next 4 objects describe elements related to the menu item\n         {\n             'element': 'h3',\n             'text': name,\n             'class':'item-name'\n         },\n         {\n             'element': 'p',\n             'text': description,\n             'class':'item-description'\n         },\n         {\n             'element': 'p',\n             'text': price,\n             'class':'item-price'\n         },\n         {\n             'element': 'img',\n             'text': alt,\n             'class':'item-image',\n             'source': image\n         }\n     ]\n}\n\n// data manipulation for contactStaff; data factory\nfunction makeContactInfo(name, position, phone, email, image, alt) {\n\n    // returns an array of 6 objects \n    return [\n        {\n            'type': 'contact-info'\n        },\n\n        // last 5 objects describe elements related to each staff member\n        {\n            'element': 'h3',\n            'text': name,\n            'class':'person'\n        },\n        {\n            'element': 'p',\n            'text': position,\n            'class':'position'\n        },\n        {\n            'element': 'p',\n            'text': phone,\n            'class':'phone'\n        },\n        {\n            'element': 'p',\n            'text': email,\n            'class':'email'\n        },\n        {\n            'element': 'img',\n            'text': alt,\n            'class':'contact-image',\n            'source': image\n        }\n    ]\n}\n\n// DOM manipulation logic for main headings; utility function\nfunction attachHeadingToDOM(headingInfo, pageInfo) {\n    let headingElements = attachHeadingElements(headingInfo.heading, headingInfo.icon1, headingInfo.icon2); \n    pageInfo.appendChild(headingElements);\n    return true;\n}\n\n// data manipulation logic for main headings\nfunction loadHeading(tab, pageInfo) {\n    let headingInfo = _config_js__WEBPACK_IMPORTED_MODULE_0__.headings[tab];\n\n    // error handling for headingInfo\n    if (!headingInfo) {\n        console.error(`Heading info for tab ${tab} not found.`);\n        return false;\n    }\n    attachHeadingToDOM(headingInfo, pageInfo);\n}\n\n// data manipulation logic for homeInfo\nfunction loadHomeInfo(pageInfo, homeHoursLocation) {\n    let hoursLocation = makeHomeInfo(homeHoursLocation);\n\n    // iterates through each section in 'hoursLocation' and calls makeInfoCards to generate a DOM element for the info in each section\n    hoursLocation.forEach(section => {\n        let infoSection = makeInfoCards(section);\n        attachInfoCardsToDOM(pageInfo, infoSection);\n    });\n\n    return true;\n}\n\n// DOM manipulation logic for all content; utility function\nfunction attachContentToDOM(contentFormat, pageInfo) {\n    let contentCard = makeInfoCards(contentFormat);\n    pageInfo.appendChild(contentCard);\n}\n\n// data manipulation logic for all content contents being the homeIntro, menuItems, contactStaff arrays \nfunction loadContent(tab, pageInfo, contents) {\n\n    // clears the page content\n    clearContent(pageInfo);\n\n    // loads the main heading\n    loadHeading(tab, pageInfo);\n\n    // iterates through each object in the 'contents' array (either homeIntro, menuItems, and contactStaff)\n    contents.forEach(content => {\n\n        // variable stores the now formatted content\n        let contentFormat;\n        if (tab === 'home') {\n\n            // formats homeIntro content\n            contentFormat = makeHomeIntro(content.text, content.image, content.alt);\n        } else if (tab === 'menu') {\n            if (content.item) {\n\n                // formats menuItems content\n                contentFormat = makeMenuInfo(content.name, content.description, content.price, content.image, content.alt);\n            } else {\n\n                // logic for appending subheadings\n                let sectionHeading = makeSubheadingElements(content.subheading);\n                pageInfo.appendChild(sectionHeading);\n                return;\n            }\n        } else {\n\n            // formats contactStaff content\n            contentFormat = makeContactInfo(content.name, content.position, content.phone, content.email, content.image, content.alt);\n        }\n\n        // attaches formatted content to the DOM\n        attachContentToDOM(contentFormat, pageInfo);\n    })\n\n    if (tab === 'home') {\n\n        // loads the additional home page content, homeHoursLocation \n        loadHomeInfo(pageInfo);\n    } \n    return true;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page-draft/./src/init_page_load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;