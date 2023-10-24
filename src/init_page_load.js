// import imageOne from './dist/img/fuzhou_map.png';

function clearContent(pageInfo) {
    pageInfo.textContent = '';
    return true;
}

function makeHeadingElements(pageHeading, icon1, icon2) {
    let headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');

    let icon_1 = document.createElement('img');
    icon_1.classList.add('icons', icon1);
    if (pageHeading == 'Fuzhou Eats') {
        icon_1.setAttribute('src', './img/scallions.png');
    } else if (pageHeading == 'Menu Items') {
        icon_1.setAttribute('src', './img/dumplings.png');
    } else {
        icon_1.setAttribute('src', './img/noodles.png');
    }

    let heading = document.createElement('h1');
    heading.textContent = pageHeading;
    heading.classList.add('heading');

    let icon_2 = document.createElement('img');
    icon_2.classList.add('icons', icon2);
    if (pageHeading == 'Fuzhou Eats') {
        icon_2.setAttribute('src', './img/noodles.png');
    } else if (pageHeading == 'Menu Items') {
        icon_2.setAttribute('src', './img/cabbage.png');
    } else {
        icon_2.setAttribute('src', './img/dumplings.png');
    }

    headingContainer.appendChild(icon_1);
    headingContainer.appendChild(heading);
    headingContainer.appendChild(icon_2);

    return headingContainer;
}

function loadHeading(tab, pageInfo, heading) {
    if (tab == "home") {
        var headingElements = makeHeadingElements(heading.heading, heading.icon1, heading.icon2);
    } else if (tab == "contact") {
        var headingElements = makeHeadingElements(heading.heading, heading.icon1, heading.icon2);
    } else if (tab == "menu") {
        var headingElements = makeHeadingElements(heading.heading, heading.icon1, heading.icon2);
    }

    pageInfo.appendChild(headingElements);

    return true;
}

function makeInfoCards(info) {
    let infoCard = document.createElement('div');
    infoCard.classList.add(info[0]['type']);

    for (let i = 1; i < info.length; i++) {
        if (info[i]['element'] == 'p') {
            var element = document.createElement('p');
            let elementText = document.createTextNode(info[i]['text']);
            element.appendChild(elementText);

        } else if (info[i]['element'] == 'h3') {
            var element = document.createElement('h3');
            let elementText = document.createTextNode(info[i]['text']);
            element.appendChild(elementText);

        } else {
            var element = document.createElement('div');
            element.style.backgroundImage = `url(${info[i]['source']})`;
            element.setAttribute('title', info[i]['text']);
        }

        element.classList.add(info[i]['class']);

        infoCard.appendChild(element);
    }
    
    return infoCard;
}


function makeHomeInfo(homeHoursLocation) {
    return [[
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

function makeHomeIntro(aIntro, image, alt) {
    return [
        {
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

function makeSubheadingElements(subheading) {
    let subheadingContainer = document.createElement('div');
    subheadingContainer.classList.add('heading-container');
    subheadingContainer.classList.add('subheading-container');

    let subHeading = document.createElement('h2');
    subHeading.textContent = subheading;

    subheadingContainer.appendChild(subHeading);

    return subheadingContainer;
}

function makeMenuInfo(name, description, price, image, alt) {
    return [
        {
            'type': 'menu-info'
        },
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

function makeContactInfo(name, position, phone, email, image, alt) {
    return [
        {
            'type': 'contact-info'
        },
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

function loadHomeInfo(pageInfo, homeHoursLocation) {
    let hoursLocation = makeHomeInfo(homeHoursLocation);

    hoursLocation.forEach(section => {
        let infoSection = makeInfoCards(section);
        pageInfo.appendChild(infoSection);
    });

    return true;
}

function loadContent(tab, pageInfo, contents, heading, homeHoursLocation) {
    clearContent(pageInfo);
    loadHeading(tab, pageInfo, heading);

    contents.forEach(content => {
        if (tab == 'home') {
            var contentFormat = makeHomeIntro(content.text, content.image, content.alt);
        } else if (tab == 'menu') {
            if (content.item) {
                var contentFormat = makeMenuInfo(content.name, content.description, content.price, content.image, content.alt);
            } else {
                var sectionHeading = makeSubheadingElements(content.subheading);
                pageInfo.appendChild(sectionHeading);
                return;
            }
        } else {
            var contentFormat = makeContactInfo(content.name, content.position, content.phone, content.email, content.image, content.alt);
        }

        let contentCard = makeInfoCards(contentFormat);

        pageInfo.appendChild(contentCard);
    })

    if (tab == 'home') {
        loadHomeInfo(pageInfo, homeHoursLocation);
    } 
    return true;
}

export { loadContent };