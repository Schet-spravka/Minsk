





const menuAll = document.querySelectorAll('.menu'),
      price = document.querySelector('.price'),
      close = document.querySelector('.close');



let index = 3;

const showInfo = () => {
    price.classList.add('active');

};     

const closeInfo = () => {
    price.classList.remove('active');
};


menuAll[index].addEventListener('click', showInfo);
close.addEventListener('click', closeInfo);






for ( i = 0; i < menuAll.length ; i++) {
    console.log(i);
} ;