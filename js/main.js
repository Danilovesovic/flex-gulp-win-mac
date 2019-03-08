let hamburger = document.querySelector('.nav-button');
let mainNav = document.querySelector('.main-nav');


hamburger.addEventListener('click',showHideNavigation);

function showHideNavigation() {
    if(mainNav.classList.contains('navigation-hide')){
        mainNav.classList.remove('navigation-hide');
        mainNav.classList.add('navigation-show');
    }else{
        mainNav.classList.remove('navigation-show');
        mainNav.classList.add('navigation-hide');
    }
}


