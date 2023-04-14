const navBar = document.querySelector('.navbar');
const navButton = document.querySelector('.navbutton');

navButton.addEventListener('click', () => {
    const visibility = navBar.getAttribute('data-visible')
    console.log(visibility)
    if (visibility === "false") {
        navBar.setAttribute('data-visible', true)
    }
    else {
        navBar.setAttribute('data-visible', false)
    }
})