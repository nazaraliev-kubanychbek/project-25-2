
const burgerBtn = document.getElementById('burger-btn');
const nav = document.getElementById('header-nav');

const burgerFunc = () =>{
    if(nav.className.includes('header-nav-show')){
        nav.className = 'header-nav'
    } else {
        nav.className ='header-nav header-nav-show'
    }
};

burgerBtn.onclick = burgerFunc;

document.querySelectorAll('.header-nav-link').forEach(item =>{
    item.onclick = burgerFunc;
});
