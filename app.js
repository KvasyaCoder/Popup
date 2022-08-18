const close = document.querySelector('.popup_close')
const open = document.querySelector('.open_popup')
const popup = document.querySelector('.popup');
const hero = document.querySelector('.hero');
const callme = document.querySelector('.callme');
open.addEventListener('click',() => {
    console.log('click');
    popup.classList.remove('clear');
})


close.addEventListener('click',() =>{
    console.log('close window');
    popup.classList.add('clear');
    
})

callme.addEventListener('click',() =>{
    console.log('well done');
    popup.classList.add('clear');
    
})