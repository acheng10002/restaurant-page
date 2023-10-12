import imageOne from './fuzhou_map.png';

/* initial page-load function is in its own module */
export default function initialPageLoad() {
    /* create the image, headline, and copy by appending each new element to div#content once
       the page is first loaded */
    const content = document.getElementById('content');
    content.style.textAlign = "center";

    const header = document.createElement('header');
    content.appendChild(header);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const main = document.createElement('main');
    content.appendChild(main);

    const homeTitle = document.createElement('h1');
    homeTitle.innerHTML = "Fuzhou Eats";
    main.appendChild(homeTitle);

    const myImageOne = new Image();
    myImageOne.src = imageOne;
    main.appendChild(myImageOne);

    const homeCopy = document.createElement('p');
    homeCopy.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Lacus laoreet non curabitur gravida arcu ac tortor. Urna neque viverra justo nec. Tristique risus nec feugiat in fermentum posuere urna nec. Massa placerat duis ultricies lacus sed turpis tincidunt id. Quis varius quam quisque id diam vel quam. Tincidunt praesent semper feugiat nibh sed.";
    main.appendChild(homeCopy);

    const footer = document.createElement('footer');
    content.appendChild(footer);
}

/* Modules
   webpack transpiles the code so that older browsers can also run it 
   webpack won't alter any code other than import and export statements) */
