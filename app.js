/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.querySelector('nav');
const  frag=document.createDocumentFragment();
const ul=document.querySelector('ul');
const mainHeader =document.querySelector('h1');
const sec =document.querySelectorAll('section');
const mylis =document.querySelectorAll('select-active-li');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
nav.style.color = 'black';
nav.style.backgroundColor = "#79bb2e"; 
nav.style.padding = "20px";
nav.style.marrgine = "20px";
mainHeader.style.color = "#ffeb3b";

//build the ul of nav bar
let count = 1;
for (const mysec of sec ){
    const newli = document.createElement('li');
    newli.innerText = 'section' + count ;
    newli.addEventListener("click" , () => {
        mysec.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    });
    count += 1 ;
    newli.classList.add('your-active-class');
    newli.style.marrgine='10px' ;
    newli.style.padding ='20px' ;
    frag.appendChild(newli);
    
}
nav.appendChild(frag)
document.body.appendChild(frag);




// Add class 'active' to section when near top of viewport
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
 };
 let observer = new IntersectionObserver(callback, options);
    
     sec.forEach(  (mysec)=>{
         observer.observe(mysec);
     });
 

     let options2 = {
        root: document.querySelector('.select-active-list'),
        rootMargin: '0px',
        threshold: 1.0,
        color: 'red'
     };

     let observer2 = new IntersectionObserver(callback2, options2);
     
     
     mylis.forEach( (myLi)=>{
         observer.observe(myLi);
     });

     let myList = document.querySelector('#navbar__list');
     observer.observe(myList);
     
     
     


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
 
function callback(_entries){
    _entries.forEach( (y) => {
            if (y.isIntersecting) {
                sec.forEach ( (theSec)=>{
                    if(theSec.classList.contains("your-active-class")){
                        theSec.classList.remove("your-active-class");
                    };
                    
                    y.target.classList.add("your-active-class");
                    let active =y.target.getAttribute('data-nav');
                    



                } );
                
                




                
            }
        });
};

//sets the navbar to active
function callback2(_entries2){ 

    _entries2.forEach( (entry2) => {
        if (entry2.isIntersecting) {
            
            mylis.forEach( (theLi)=>{
                if(theLi.classList.contains("your-active-class")){
                    theLi.classList.remove("your-active-class");
                };
            });
            
            
            entry2.target.classList.add("your-active-class");
            let myList = document.querySelector('#navbar__list');
            observer.observe(myList);

            
            
            
            
        }
    });        
};


