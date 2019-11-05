
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
