const navMobile = document.querySelector( '.nav-mobile' ) ;
const btnMenu = document.querySelector( '.btn-menu' );

btnMenu.onclick = function() {
    navMobile.classList.toggle( 'hide' );
};