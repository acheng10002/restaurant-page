import { homeIntro, homeHoursLocation, contactStaff, menuItems } from './config.js';

import { loadContent } from './init_page_load.js';

// lists the IDs of the different tab options on the webpage
const tabOptions = ['home', 'menu', 'contact'];

const currentTab = tabOptions[0];

const pageInfo = document.getElementById('content');

// initially load the content for the home page using the homeIntro and homeHoursLocation data
loadContent(currentTab, pageInfo, homeIntro, homeHoursLocation);

// iterate over each tab option in the array
tabOptions.forEach(tabOption => {
    var tab = document.getElementById(tabOption);

    // error handling for the tab element
    if (!tab) {
        console.error(`Element for tab ${tabOption} not found.`);
        return;
    } 
    
    // adds a click event listener to the tab
    tab.addEventListener('click', () => {

        // checks which tab was clicked and calls 'loadContent' to load the corresponding content
        if (tab.id == 'home') {
            loadContent(tab.id, pageInfo, homeIntro);
        } else if (tab.id == 'menu') {
            loadContent(tab.id, pageInfo, menuItems);
        } else {
            loadContent(tab.id, pageInfo, contactStaff);
        }
    });
});
