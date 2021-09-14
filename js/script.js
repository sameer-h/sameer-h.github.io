
// jQuery JS for my navigation bar

const navBtn = document.querySelector('#navbar-toggler');

const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// lets the nav bar work when the window is moved

let timer_Resizer;
window.addEventListener('resize', () => {

    document.body.classList.add('resize-animation-stopper'); // classList manage
    
    clearTimeout(timer_Resizer); // run

    timer_Resizer = setTimeout(() => {

        document.body.classList.remove('resize-animation-stopper');

    }, 420);
});

function change() {
    document.body.classList.toggle("light-mode");
 
    if(document.body.classList.contains('light-mode')){ //when the body has the class 'dark' currently
         localStorage.setItem('lightMode', 'enabled'); //store this data if dark mode is on
     }else{
         localStorage.setItem('lightMode', 'disabled'); //store this data if dark mode is off
     }
 
 };
 
 if(localStorage.getItem('lightMode') == 'enabled'){
     document.body.classList.toggle('light-mode');
 };