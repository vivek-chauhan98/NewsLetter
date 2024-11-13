const clickMe = document.querySelector('.click-me')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const closeTab = document.querySelector('.close-tab') 
const subscribeBtn = document.querySelector('.subscribe-btn')


clickMe.addEventListener('click', () => {
    card.classList.add('popup')
    container.classList.add('open')
})


closeTab.addEventListener('click', () => {
    card.classList.remove('popup')
    container.classList.remove('open')
})

container.addEventListener('click', () => {
    card.classList.remove('popup')
    container.classList.remove('open')
})


card.addEventListener('click', (e) => {
    e.stopPropagation()
})


