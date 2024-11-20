let menuItem = document.querySelector('.menu');
let menuDivElem = document.querySelector('.profile');
console.log(menuItem);

menuDivElem.addEventListener('click',() => {
    menuItem.classList.toggle('active');
});
