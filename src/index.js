const menuEl = document.querySelector('#menu')
const openEl = document.querySelector('#open')
const closeEl = document.querySelector('#close')


menuEl.addEventListener('click', () => {
   if(openEl.classList.contains('open')) {
        openEl.classList.remove('open')
   }
})

closeEl.addEventListener('click', () => {
    if(!openEl.classList.contains('open')) {
        openEl.classList.add('open')
    }
})

