

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

function tabs(){
  
}

tabs(".rest-menu-tabs");
