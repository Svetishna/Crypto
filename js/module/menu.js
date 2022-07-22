const headerNavBtn = document.querySelector('.header__nav-btn');

headerNavBtn.addEventListener('click', () => {
    const headerNavigation = document.querySelector('.header__navigation');
    headerNavigation.classList.toggle('header__navigation__open');
})