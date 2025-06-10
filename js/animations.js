// SCRIPT FOR ALL ANIMATIONS WITH/WITHOUT GSAP

// Plugins
gsap.registerPlugin(ScrollTrigger);

// Event listener for loading content
document.addEventListener('DOMContentLoaded', () => {
    
    // FUNCTIONS
    // Function to display menu
    function menuDrop() {
        if (document.getElementById('line-1').classList.contains('line-1-active')) {
            document.getElementById('line-1').classList.remove('line-1-active')
            document.getElementById('line-2').classList.remove('line-2-active')

            // Hiding Menu
            gsap.to("#menu-section", {opacity: 0, duration: 0.5})
            setTimeout(() => {
                document.getElementById('menu-section').style.display = "none"

                // Enabling scroll
                document.body.style.overflow = '';
            }, 600)
        }
        else {
            document.getElementById('line-1').classList.add('line-1-active')
            document.getElementById('line-2').classList.add('line-2-active')

            // Displaying Menu
            document.getElementById('menu-section').style.display = "grid"
            gsap.to("#menu-section", {opacity: 1, duration: 0.5})

            // Hiding scroll
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to scroll a div of selection
    function scroll(element, times) {
        const scroll = window.scrollY;
        gsap.to(element, { y: scroll * times, ease: 'none', overwrite: 'auto', duration: 0.1})
    }

    // Event listener to display menu
    document.getElementById('navbar-btn').addEventListener('click', menuDrop)

    // Smooth Fade animations 
    gsap.from("#navigation-bar", {opacity: 0, duration: 1, delay: 4})
    gsap.from("#name", {opacity: 0, duration: 1, delay: 4})
    gsap.from(".desc", {opacity: 0, duration: 1, delay: 4})

    // Scrolling effects
    window.addEventListener('scroll', () => scroll('#name', 0.15))
    window.addEventListener('scroll', () => scroll('#desc-short', 0.1))

    // Animation for Empty divs and pseudo element based border
    // Empty divs are used for border
    gsap.from('.empty-div', {opacity: 0, duration: 1, delay: 4})
    gsap.from('.name-div', {'--pseudo-border-opacity':0, duration: 1, delay: 4})

    // SCROLLTRIGGER EFFECTS

    // About
    gsap.from(".about-section", {scrollTrigger: {trigger: ".about-section", start: "top 90%",end: "top 30%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#about-desc-1", {scrollTrigger: {trigger: "#about-desc-1", start: "top 90%",end: "top 30%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#about-desc-2", {scrollTrigger: {trigger: "#about-desc-2", start: "top 90%",end: "top 50%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#about-desc-3", {scrollTrigger: {trigger: "#about-desc-3", start: "top 90%",end: "top 80%",scrub: true}, opacity: 0, duration: 1})
    
    // Works
    gsap.from(".work-section", {scrollTrigger: {trigger: ".work-section", start: "top 90%",end: "top 30%",scrub: true}, opacity: 0, duration: 1})
    gsap.from(".work-heading", {scrollTrigger: {trigger: ".work-heading", start: "top 90%",end: "top 50%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#work-1", {scrollTrigger: {trigger: "#work-1", start: "top 90%",end: "top 50%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#work-2", {scrollTrigger: {trigger: "#work-2", start: "top 90%",end: "top 50%",scrub: true}, opacity: 0, duration: 1})
    gsap.from("#work-3", {scrollTrigger: {trigger: "#work-3", start: "top 90%",end: "top 50%",scrub: true}, opacity: 0, duration: 1})

    // Contacts
    gsap.from(".contact-section", {scrollTrigger: {trigger: ".contact-section", start: "top 90%",end: "top 30%",scrub: true}, opacity: 0, duration: 1})
    gsap.from(".contact-heading", {scrollTrigger: {trigger: ".contact-heading", start: "top 90%",end: "top 60%",scrub: true}, opacity: 0, duration: 1})
    gsap.from(".social", {scrollTrigger: {trigger: ".social", start: "top 90%",scrub: false}, opacity: 0, duration: 2})
    gsap.from(".copyright", {scrollTrigger: {trigger: ".copyright", start: "top 100%",scrub: false}, opacity: 0, duration: 1})

    // Pinning
    ScrollTrigger.create({trigger: ".work-section", start: "top top", end: "+=300%", pin: true, scrub: true, pinSpacing: false});

})