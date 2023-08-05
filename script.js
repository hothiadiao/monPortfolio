
 // Header
 let MenuBtn = document.getElementById('MenuBtn')

 MenuBtn.addEventListener('click', function(e) {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     this.classList.toggle('fa-xmark')
 })
 //Typing Effect
 let typed = new Typed(".auto-input",{
    strings: ['Développeur Fulstack!','Formateur en Informatique!','Maintenancier Informatique'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:100,
    loop:true,
})
// Active Link State On Scroll 
//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let Sections = document.querySelectorAll('section')
window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(Link => {
                Link.classList.remove('active');
                if(section.getAttribute('id') === Link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})
