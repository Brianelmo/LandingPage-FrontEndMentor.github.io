const menuBars = document.querySelector(".fa-bars"); 
const header = document.querySelector(".header-hero");
const navMobile = document.querySelector(".toggle-nav"); 
const closeBtn = document.querySelector(".fa-xmark");




menuBars.addEventListener("click", () =>  {
  navMobile.style.display = 'flex';  
  header.classList.add("header-relative");
})  


closeBtn.addEventListener("click" , () => {
  navMobile.style.display = 'none';
  header.classList.remove("header-relative");
})


