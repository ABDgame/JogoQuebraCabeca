
window.addEventListener("load", () => {

/* Animação */  
  
});
/* mobile menu */

const menuBtn = document.querySelector(".header .menu-btn");
const menu = document.querySelector(".header .menu-btn");
const menuLinks = menu.querySelectorAll("a");

function toggleMenu(){
  menuBtn.classList.toggle("active");
  menu.classList.toggle("open");
  
}
menuBtn.addEventListener("click", toggleMenu);

// Fecha o menu quando um link é clicado
function menuLinkAction(){
  if(window.innerWidth <= 991 && menu.classList.contains("open")){
    toggleMenu();
  }
}
menuLinks.forEach((a) => {
  a.addEventListener("click", menuLinkAction);
});
/* header bg */
window.addEventListener("scroll", function() {
  if(this.scrollY > 0){
    document.querySelector(".header").classList.add("header-bg");
  }
  else{
    document.querySelector(".header").classList.remove("header-bg");
  }
});

/* tabs */

function tabs(tabsSelector){
  const tabsContainer = document.querySelector(tabsSelector);
  const tabsList = tabsContainer.querySelector(".tabs-list");

  tabsList.addEventListener("click", (event) => {
    const clickedTab = event.target.closest(".tabs-btn");
    if(!clickedTab || clickedTab.classList.contains("active")){
      return;
    }
    switchTab(clickedTab);
  });
  function switchTab(clickedTab){
    const activeTab = tabsContainer.querySelector(".tabs-btn.active");
    const activePanel = tabsContainer.querySelector(".tabs-panel.active");
    activeTab.classList.remove("active");
    activePanel.classList.remove("active");
    clickedTab.classlist.add("active");
    const target = clickedTab.getAttribute("data-target");
    tabsContainer.querySelector(target).classList.add("active");
    
  }
}

tabs(".rest-menu-tabs");

/* testimonials slider */

const testimonialsSlider = new Swiper('.testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.testimonials-pagination',
    clickable: true
  }
});
