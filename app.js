const toggleBtn = document.querySelector('.toggle-btn');


toggleBtn.addEventListener('click', darkModeFunc)

function darkModeFunc (){
    toggleBtn.parentElement.parentElement.parentElement.classList.toggle('dark');

}