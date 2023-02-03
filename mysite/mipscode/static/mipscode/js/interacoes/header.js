'use strict'
let button_menu = document.getElementById('button-menu-mobile');
let button_close = document.getElementById('button-close-mobile');

button_menu.addEventListener('click', () => {    
    menu = document.getElementById('menu-mobile-div').style.display = "flex";
});

button_close.addEventListener('click', () => {    
    menu = document.getElementById('menu-mobile-div').style.display = "none";
});