//capturar elementos
const menuList = document.getElementById('menu-list');

// array de platos
const menuItems = [
    { title: 'Jabalí con patatas fritas', image: 'jabali.png', price: '$20.00', description: 'Delicioso jabalí con crujientes patatas fritas.' },
    { title: 'Unos gansos deliciosos en su propio jugo', image: 'gansos.jpg', price: '$25.00', description: 'Gansos preparados en su jugo, ¡una delicia incomparable!' },
    { title: 'Un rebaño de carneros', image: 'carneros.png', price: '$18.00', description: 'Corderos tiernos y sabrosos, acompañados de finas hierbas.' },
    { title: 'Una tortilla francesa hecha con ocho docenas de huevos', image: 'tortilla francesa.jpg', price: '$15.00', description: 'Tortilla francesa abundante y deliciosa, preparada con 96 huevos.' },
    { title: 'Un cardumen de peces', image: 'peces.jpg', price: '$22.00', description: 'Peces frescos y bien condimentados, ¡una explosión de sabor marino!' },
    { title: 'Un buey', image: 'buey.jpg', price: '$30.00', description: 'Carne de buey tierna y jugosa, asada a la perfección.' },
    { title: 'Una vaca', image: 'vaca.jpg', price: '$28.00', description: 'Filete de vaca de primera calidad, acompañado de guarnición.' },
    { title: 'Unos terneros', image: 'terneros.jpg', price: '$26.00', description: 'Terneros tiernos y suculentos, preparados con la receta secreta de la casa.' },
    { title: 'Una montaña de caviar de grano grueso', image: 'caviar.png', price: '$50.00', description: 'Caviar de alta calidad, presentado en una generosa montaña.' },
    { title: 'Un camello con sus jorobas rellenas', image: 'camello.jpg', price: '$40.00', description: 'Carne de camello exquisitamente sazonada, con jorobas rellenas de sabrosos ingredientes.' },
    { title: 'Un elefante a la aceituna', image: 'elefante.jpg', price: '$100.00', description: 'Plato único y monumental: elefante asado con aceitunas.' },
];

// funcion para crear elemento
function createMenuItem(item) {
    //crear elemento de lista
    const menuItem = document.createElement('li');
    menuItem.className = 'menu-item';

    // foto del plato
    const image = document.createElement('img');
    image.src = item.image;
    menuItem.appendChild(image);

    // contenedor para el nombre y el precio
    const contentContainer = document.createElement('div');
    contentContainer.className = 'menu-content';

    // encabezado para el título
    const title = document.createElement('h2');
    title.textContent = item.title;
    contentContainer.appendChild(title);

    // precio
    const price = document.createElement('p');
    price.textContent = `Precio: ${item.price}`;
    contentContainer.appendChild(price);

    menuItem.appendChild(contentContainer);

    // descripción
    const description = document.createElement('p');
    description.textContent = item.description;
    menuItem.appendChild(description);

    return menuItem;
}

// función que llena el menú con los platos
function fillMenu() {
    
    menuItems.forEach(item => {
        const menuItem = createMenuItem(item);
        menuList.appendChild(menuItem.cloneNode(true));
    });
}

// se llena el menú 
fillMenu();

// se repite la lista con los mismos platos infinitamente
window.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    
    if (windowHeight + scrollTop >= documentHeight) {
        fillMenu();
    }
});

// función crear cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

// verificar si ya hay cookie
function hasCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const parts = cookie.split('=');
        const name = parts[0].trim();
        if (name === 'obelix_cookie') {
            return true;
        }
    }
    return false;
}

// verifica si tiene cookie
if (!hasCookie()) {
    alert('Cookie de Obelix');
    setCookie('obelix_cookie', 'yummy', 7); 
}