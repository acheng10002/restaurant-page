import { homeHeading, menuHeading, contactHeading, homeIntro, homeHoursLocation, contactStaff, menuItems } from './config.js';

import { loadContent } from './init_page_load.js';

let tabOptions = ['home', 'menu', 'contact'];
let currentTab = tabOptions[0];
let pageInfo = document.getElementById('content');

loadContent(currentTab, pageInfo, homeIntro, homeHeading, homeHoursLocation);

tabOptions.forEach(tabOption => {
    var tab = document.getElementById(tabOption);
    tab.addEventListener('click', () => {
        if (tab.id == 'home') {
            loadContent(tab.id, pageInfo, homeIntro, homeHeading, homeHoursLocation);
        } else if (tab.id == 'menu') {
            loadContent(tab.id, pageInfo, menuItems, menuHeading);
        } else {
            loadContent(tab.id,  pageInfo, contactStaff, contactHeading);
        }
    });
})