const navBar = document.querySelector('.navbar');
const navButton = document.querySelector('.navbutton');

navButton.addEventListener('click', () => {
    const visibility = navBar.getAttribute('data-visible')
    console.log(visibility)
    if (visibility === "false") {
        navBar.setAttribute('data-visible', true)
        navButton.setAttribute('aria-expanded', true)
    }
    else {
        navBar.setAttribute('data-visible', false)
        navButton.setAttribute('aria-expanded', false)
    }
})