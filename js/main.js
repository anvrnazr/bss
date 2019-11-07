
var body = document.querySelector('body');

document.querySelector('.menubtn').onclick = function() {
    body.classList.toggle("menu-active");            
}
var x = document.getElementsByClassName('qua-btn');
console.log(x);

 function openQua(e) {

    
e.currentTarget.classList.add("active"); 
e.currentTarget.previousSibling.classList.remove("active");

}

function openExp(e) {


    e.currentTarget.classList.add("active"); 
    e.currentTarget.nextSibling.classList.remove("active");
    
    }


    function showSection(sectionIndex){
        event.preventDefault();
        var sections = document.querySelectorAll(".staff-pane");
        var sectionButton =  document.querySelectorAll(".stafftabbtn");
    
        sectionButton.forEach(function(node){
            node.classList.remove("active");
        });
        sections.forEach(function(node){
            node.classList.remove("active");
        });
        sectionButton[sectionIndex].classList.add("active");
        sections[sectionIndex].classList.add("active");
    
    }


    var swip = new Swiper('.tabswiper', {
        slidesPerView: 'auto',
            spaceBetween: 10,
        freeMode: true,
    
      });



  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

    var menu = document.querySelector('.tabul')
    var ts = document.querySelector('.tab-section')

    var menuPosition = menu.getBoundingClientRect().top;
    var menuPositionB = menu.getBoundingClientRect().bottom;
    var tsb = ts.getBoundingClientRect().bottom;
console.log(tsb);

    // console.log(menu.getBoundingClientRect().top);
    
    // window.addEventListener('scroll', function() {
    //     if (window.pageYOffset+160 >= menuPosition) {
    //         menu.style.position = 'fixed';
    //         menu.style.top = '160px';
    //         menu.style.bottom = 'auto';

    //     } else {
    //         menu.style.position = 'static';
    //         menu.style.top = '';
    //     }
    //     if (window.pageYOffset+242 >= tsb) {
    //         menu.style.position = 'absolute';
    //         menu.style.top = 'auto';
    //         menu.style.bottom = '0px';
            
    //     }

        // if (window.pageYOffset+100 >= menuPositionB) {
        //     menu.style.position = 'fixed';
        //     menu.style.top = '100px';
        // } else {
        //     menu.style.position = 'static';
        //     menu.style.top = '';
        // }

        

        
    // });