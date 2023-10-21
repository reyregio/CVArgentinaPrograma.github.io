// ========================== SHOW MENU ===================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ==========MENU SHOW=================
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*===========================REMOVE MENU MOBILE========================= */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=========================== CHANGE BACKGROUND HEADER ========================= */
const shadowHeader = () => {
    const header = document.getElementById("header");
    
    if (window.scrollY >= 50) {
        header.classList.add("shadow-header");
    } else {
        header.classList.remove("shadow-header");
    }
};

window.addEventListener("scroll", shadowHeader);

/*===========================Email js======================== */
const contactForm = document.getElementById("contact-form"),
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();
    
    //serviceI-templateÇI form- pùblickey
    emailjs
    .sendForm(
        "service_day3w4d",
        "template_g9or6od",
        "#contact-form",
        "SIOObORQn9rPWgtdq"
        )
        .then(
            () => {
                //show sent message
                contactMessage.textContent = "Message sent successfully ✅";
                
                //remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
                
                //clear inputs fields
                contactForm.reset();
            },
            () => {
                //show error
                contactMessage.textContent = "Message not sent (service error) ❌";
            }
            );
        };
        
        contactForm.addEventListener("submit", sendEmail);
        
        // =========================== SHOW SCROLL UP ================================
        const scrollUp = () => {
            const scrollUp = document.getElementById("scroll-up");
            
            this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
            : scrollUp.classList.remove("show-scroll");
        };
        
        window.addEventListener("scroll", scrollUp);
        
        //   ==================  SCROLL SECTIONS ACTIVE LINK      ==================
        const sections = document.querySelectorAll("section[id]");
        
        const scrollActive = () => {
            const scrollDown = window.scrollY;
            
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58;
                const sectionId = current.getAttribute('is');
                const sectionClass = document.querySelector(' .nav__menu a[href*=' + sectionId + ']');
                
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionClass.classList.add('active-link');
                } else {
                    sectionClass.classList.remove('active-link');
                }
            });
        }
        
        // ======================== DARK LIGTH THEME ============================
        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme= 'ri-sun-line'
        
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
        
        if(selectedTheme){
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
        }
        
        themeButton.addEventListener('click',()=>{
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            localStorage.setItem('selected-theme',getCurrentTheme())
            localStorage.setItem('selected-icon',getCurrentIcon())
        })
        
        // SCROLL REVEAL ANIMATION
        
        const sr =scrollReveal({
            origin: 'top',
            distance:'60px',
            duration:2500,
            delay:400,
        })
        
        sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin:'right'})
        sr.reveal(`.home__name, .home__info,
        .about__container, .section__title-1, .about__info,
        .contact__social, .contact__data`,  {origin:'left'})
        
        sr.reveal(`.services__card , .projects__card`, {interval:100})
        