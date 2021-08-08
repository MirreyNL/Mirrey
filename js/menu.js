const ham = document.querySelector('.ham')
const menu = document.querySelector('.menu-navegacion')


ham.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') &&
        e.target != menu && e.target != ham) {
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})