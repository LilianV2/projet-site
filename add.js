
//                 --------- PROJET-PERSO : E-Commerce --------

let menu = document.getElementById('menuIcon')
let burgerMenu = document.getElementById('navigation')

menu.addEventListener('click', function(){
        burgerMenu.style.visibility = "visible";
        burgerMenu.style.animationName = "animMenu"
        burgerMenu.style.animationDuration = "350ms";
})

