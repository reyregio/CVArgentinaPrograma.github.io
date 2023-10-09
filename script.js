// ========================== SHOW MENU ===================
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

// ==========MENU SHOW=================
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// ==========MENU HIDDEN=================
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
    emailjs.sendForm('service_day3w4d', 'template_g9or6od', '#contact-form', 'SIOObORQn9rPWgtdq')
    .then(() => {
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅';
        
        //remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        
        //clear inputs fields
        contactForm.reset();
    }, () => {
        //show error
        contactMessage.textContent = 'Message not sent (service error) ❌';
    });
}

contactForm.addEventListener('submit', sendEmail);
