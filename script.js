const searchBar = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click', ()=>{
      searchBar.classList.toggle('active')
      input.focus()
})



