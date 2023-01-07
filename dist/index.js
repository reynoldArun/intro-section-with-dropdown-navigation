const menuEl = document.querySelector('#menu')
const openEl = document.querySelector('#open')
const closeEl = document.querySelector('#close')
const featuresEl = document.querySelector('#features')
const companyEl = document.querySelector('#company')
const hideEl = document.querySelector('#hide')
const hide1El = document.querySelector('#hide1')


featuresEl.addEventListener('click', () => {
    if(hideEl.classList.contains('hide')) {
        hideEl.classList.remove('hide')
   } else {
        hideEl.classList.add('hide')
   }
})

companyEl.addEventListener('click', () => {
    if(hide1El.classList.contains('hide1')) {
        hide1El.classList.remove('hide1')
   } else {
        hide1El.classList.add('hide1')
   }
})


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

