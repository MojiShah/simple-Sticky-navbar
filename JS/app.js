const mainNav = document.getElementById('mainNav');
const logoImg = document.querySelector('img');

document.addEventListener('scroll',()=>{
    if (document.documentElement.scrollTop){
        logoImg.style.height= '60px';
        mainNav.classList.add('bg-black');
        mainNav.classList.add('txt-white');
    }else{
        logoImg.style.height = '84px';
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove('txt-white');
    }
})