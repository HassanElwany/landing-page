
/**
 * Define Global Variables
 * 
*/
const navigationList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

/**
 * End Global Variables
 */
// function to creating daynamic list items 


function createListItem(){
    for (sec of sections) {
        listItem = document.createElement('li');
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link"> ${sec.dataset.nav}</a></li>`
        navigationList.appendChild(listItem);
    }
}
createListItem();

// the real viewport section function
/*function activeSection(element){
    let section = element.getBoundingClientRect();
    return (sectionPo.top >= 0);
}*/


function theActiveClass() {
    for (sec of sections){
        if (sectionInViewPort(sec)) {
            if (!sec.classList.contains ('your-active-class')){
                sec.classList.add('your-active-class');
            }
        }else {
            sec.classList.remove('your-active-class');
        }
    }
}

document.addEventListener('scroll',theActiveClass);

// specify the View port section
 function sectionInViewPort (element){
     let sectionPostion = element.getBoundingClientRect();
     return (sectionPostion.top >= 0);
 
 

 // nested function for apply the active class on the real view port section

 function theActiveClass () {
     for (sec of sections) {
         if (sectionInViewPort(section)){
             if(!sec.classList.contains('your-active-clas')){
                 sec.classList.add('your-active-clas');
             }
         }else {
             sec.classList.remove('your-active-clas');
         }
     }
 }
}
 document.addEventListener('scroll',  sectionInViewPort);