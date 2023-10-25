// import two objects 
import { headings, homeHoursLocation } from './config.js';

// clears content of entire page
function clearContent(pageInfo) {
    pageInfo.textContent = '';
    return true;
}

// DOM manipulation logic for heading elements
function attachHeadingElements(pageHeading, icon1, icon2) {
    
    // get the source paths for the icons
    let [icon1Src, icon2Src] = getIconSrcForHeading(pageHeading);
    let icon_1 = makeIcon(icon1Src, icon1);
    let heading = makeHeading(pageHeading);
    let icon_2 = makeIcon(icon2Src, icon2);

    // create a div element to serve as a container for the heading and icons
    let headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    headingContainer.appendChild(icon_1);
    headingContainer.appendChild(heading);
    headingContainer.appendChild(icon_2);

    return headingContainer;
}

// DOM manipulation logic for heading elements
function makeIcon(src, className) {
    let icon = document.createElement('img');
    // set the source attribute of the img element
    icon.setAttribute('src', src);
    icon.classList.add('icons', className);
    return icon;
}

// DOM manipulation logic for heading elements
function makeHeading(text) {
    let heading = document.createElement('h1');
    heading.textContent = text;
    heading.classList.add('heading');
    return heading;
}

// data manipulation logic for heading elements
function getIconSrcForHeading(pageHeading) {

    // defines a map to associate pageHeadings with icon source paths
    const iconMap = {
        'Fuzhou Eats': ['./img/scallions.png', './img/noodles.png'], 
        'Menu Items': ['./img/dumplings.png', './img/cabbage.png'], 
        'default': ['./img/noodles.png', './img/dumplings.png'] 
    };

    // retrieve the array of icon source paths for the given pageHeading. If not found, use the default
    return iconMap[pageHeading] || iconMap.default;

}

// data manipulation logic for homeIntro; data factory
function makeHomeIntro(aIntro, image, alt) {

    // returns an array of objects that describe the elements to be created
    return [
        {
            // 'type' of content is 'home-intro'
            'type': 'home-intro'
        },
        {
            'element': 'img',
            'text': alt,
            'class': 'intro-image',
            'source': image
        },
        {
            'element': 'p',
            'text': aIntro,
            'class': 'intro-text'
        }
    ]
}

// data manipulation logic for homeInfo; data factory
function makeHomeInfo() {

    // error handling for the global variable, homeHoursLocation
    if (!homeHoursLocation || !homeHoursLocation.hours || !homeHoursLocation.location) {
        console.error('Invalid homeHoursLocation data.');
        return null;
    }

    // returns an array of two arrays that describe the hours and location information for the home page
    return [[

        // first array describes 'home-hours' and has 8 objects describing elements for the hours for each day of the week
        {
            'type': 'home-hours'
        },
        {
            'element': 'h3',
            'text': 'Hours',
            'class': 'hours'
        },
        {
            'element': 'p',
            'text': `Sunday: ${homeHoursLocation.hours.sunday.open}am - ${homeHoursLocation.hours.sunday.close}pm`,
            'class': 'sunday'
        },
        {
            'element': 'p',
            'text': `Monday: ${homeHoursLocation.hours.monday.open}am - ${homeHoursLocation.hours.monday.close}pm`,
            'class': 'monday'
        },
        {
            'element': 'p',
            'text': `Tuesday: ${homeHoursLocation.hours.tuesday.open}am - ${homeHoursLocation.hours.tuesday.close}pm`,
            'class': 'tuesday'
        },
        {
            'element': 'p',
            'text': `Wednesday: ${homeHoursLocation.hours.wednesday.open}am - ${homeHoursLocation.hours.wednesday.close}pm`,
            'class': 'wednesday'
        },
        {
            'element': 'p',
            'text': `Thursday: ${homeHoursLocation.hours.thursday.open}am - ${homeHoursLocation.hours.thursday.close}pm`,
            'class': 'thursday'
        },
        {
            'element': 'p',
            'text': `Friday: ${homeHoursLocation.hours.friday.open}am - ${homeHoursLocation.hours.friday.close}pm`,
            'class': 'sunday'
        },
        {
            'element': 'p',
            'text': `Saturday: ${homeHoursLocation.hours.saturday.open}am - ${homeHoursLocation.hours.saturday.close}pm`,
            'class': 'saturday'
        }],

        // second array describes 'home-location' and has 3 objects describing elements for the location
        [{
            'type': 'home-location'
        },
        {
            'element': 'h3',
            'text': 'Location',
            'class': 'location'
        },
        {
            'element': 'p',
            'text': `${homeHoursLocation.location.street}, ${homeHoursLocation.location.city}, ${homeHoursLocation.location.state}`,
            'class': 'address'
        },
        {
             'element': 'img',
             'text': `${homeHoursLocation.location.alt}`,
             'class': 'location-image',
             'source': `${homeHoursLocation.location.image}`
        }]
    ]
}

// DOM manipulation logic for InfoCards; utility function
function attachInfoCardsToDOM(infoCard, element) {
    infoCard.appendChild(element);
}

// DOM manipulation logic for infoCards/ all content
function makeInfoCards(info) {

    // error handling for 'info'
    if (!info || !info.length) {
        console.error('Invalid or empty info data.');
        return null;
    }

    let infoCard = document.createElement('div');
    infoCard.classList.add(info[0]['type']);

    // iterate through the 'info' array starting from index 1
    for (let i = 1; i < info.length; i++) {

       // variable to store the new DOM element 
       let element;

       // variable to store the text node
       let elementText;

       // create elements based on the 'element' field in each object
       switch (info[i]['element']) {
           case 'p': 
               element = document.createElement('p');
               elementText = document.createTextNode(info[i]['text']);
               element.appendChild(elementText);
               break;
           case 'h3':
               element = document.createElement('h3');
               elementText = document.createTextNode(info[i]['text']);
               element.appendChild(elementText);
               break;
           case 'img':
               element = document.createElement('div');
               element.style.backgroundImage = `url(${info[i]['source']})`;
               element.setAttribute('title', info[i]['text']);
               break;
           default:
               element = document.createElement('div');
               break;
       }

       element.classList.add(info[i]['class']);

       // add the newly create element to the infoCard container
       attachInfoCardsToDOM(infoCard, element);
    }

    // return the full populated infoCard container
    return infoCard;
}

// DOM manipulation logic for menu subheadings; constructs their DOm structure
function makeSubheadingElements(subheading) {
    let subheadingContainer = document.createElement('div');
    subheadingContainer.classList.add('heading-container');
    subheadingContainer.classList.add('subheading-container');

    let subHeading = document.createElement('h2');
    subHeading.textContent = subheading;

    subheadingContainer.appendChild(subHeading);

    return subheadingContainer;
}

// data manipulation for menuItems; data factory
function makeMenuInfo(name, description, price, image, alt) {

    // returns an array of 5 objects
     return [

         // first object, 'type' is 'menu-info'
         {
             'type': 'menu-info'
         },

         // next 4 objects describe elements related to the menu item
         {
             'element': 'h3',
             'text': name,
             'class':'item-name'
         },
         {
             'element': 'p',
             'text': description,
             'class':'item-description'
         },
         {
             'element': 'p',
             'text': price,
             'class':'item-price'
         },
         {
             'element': 'img',
             'text': alt,
             'class':'item-image',
             'source': image
         }
     ]
}

// data manipulation for contactStaff; data factory
function makeContactInfo(name, position, phone, email, image, alt) {

    // returns an array of 6 objects 
    return [
        {
            'type': 'contact-info'
        },

        // last 5 objects describe elements related to each staff member
        {
            'element': 'h3',
            'text': name,
            'class':'person'
        },
        {
            'element': 'p',
            'text': position,
            'class':'position'
        },
        {
            'element': 'p',
            'text': phone,
            'class':'phone'
        },
        {
            'element': 'p',
            'text': email,
            'class':'email'
        },
        {
            'element': 'img',
            'text': alt,
            'class':'contact-image',
            'source': image
        }
    ]
}

// DOM manipulation logic for main headings; utility function
function attachHeadingToDOM(headingInfo, pageInfo) {
    let headingElements = attachHeadingElements(headingInfo.heading, headingInfo.icon1, headingInfo.icon2); 
    pageInfo.appendChild(headingElements);
    return true;
}

// data manipulation logic for main headings
function loadHeading(tab, pageInfo) {
    let headingInfo = headings[tab];

    // error handling for headingInfo
    if (!headingInfo) {
        console.error(`Heading info for tab ${tab} not found.`);
        return false;
    }
    attachHeadingToDOM(headingInfo, pageInfo);
}

// data manipulation logic for homeInfo
function loadHomeInfo(pageInfo, homeHoursLocation) {
    let hoursLocation = makeHomeInfo(homeHoursLocation);

    // iterates through each section in 'hoursLocation' and calls makeInfoCards to generate a DOM element for the info in each section
    hoursLocation.forEach(section => {
        let infoSection = makeInfoCards(section);
        attachInfoCardsToDOM(pageInfo, infoSection);
    });

    return true;
}

// DOM manipulation logic for all content; utility function
function attachContentToDOM(contentFormat, pageInfo) {
    let contentCard = makeInfoCards(contentFormat);
    pageInfo.appendChild(contentCard);
}

// data manipulation logic for all content contents being the homeIntro, menuItems, contactStaff arrays 
function loadContent(tab, pageInfo, contents) {

    // clears the page content
    clearContent(pageInfo);

    // loads the main heading
    loadHeading(tab, pageInfo);

    // iterates through each object in the 'contents' array (either homeIntro, menuItems, and contactStaff)
    contents.forEach(content => {

        // variable stores the now formatted content
        let contentFormat;
        if (tab === 'home') {

            // formats homeIntro content
            contentFormat = makeHomeIntro(content.text, content.image, content.alt);
        } else if (tab === 'menu') {
            if (content.item) {

                // formats menuItems content
                contentFormat = makeMenuInfo(content.name, content.description, content.price, content.image, content.alt);
            } else {

                // logic for appending subheadings
                let sectionHeading = makeSubheadingElements(content.subheading);
                pageInfo.appendChild(sectionHeading);
                return;
            }
        } else {

            // formats contactStaff content
            contentFormat = makeContactInfo(content.name, content.position, content.phone, content.email, content.image, content.alt);
        }

        // attaches formatted content to the DOM
        attachContentToDOM(contentFormat, pageInfo);
    })

    if (tab === 'home') {

        // loads the additional home page content, homeHoursLocation 
        loadHomeInfo(pageInfo);
    } 
    return true;
}

export { loadContent };