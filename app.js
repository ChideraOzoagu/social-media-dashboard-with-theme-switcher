const toggleBtn = document.querySelector('.toggle-btn');


toggleBtn.addEventListener('click', darkModeFunc)

function darkModeFunc (){
    const dark = toggleBtn.parentElement.parentElement.parentElement.parentElement.classList.toggle('dark');
}