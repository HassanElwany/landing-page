// variabal for nav bar to handel it

const navbarList = document.getElementById("navbar__list");
// variabl for section and make it an array

const sections  = Array.from (document.getElementsByTagName('section'));

// function forEach to deal with every section from sections tags
sections.forEach(function(sec){

  let listItem = document.createElement('li');
  navbarList.appendChild(listItem);
  listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link"> ${sec.dataset.nav}</a></li>`
  
});



//variable to handel the active class

let activeClass = 'your-active-class';
// function for apllying the activeClass

function activation (){
  // looping throw sections
  for (sec of sections){
    // determine the current viewport section 
    
    if (window.scrollY + window.innerHeight >= sec.offsetTop) { 
      //check if it has an active class or not if it hasn't the function adds it to the section while it is on the current viewport. 
      if (!sec.classList.contains(activeClass))
        sec.classList.add(activeClass)
    } else {
      sec.classList.remove(activeClass);
    }
  }
}
window.addEventListener('scroll',  activation);









