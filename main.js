document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});



// cursor code
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function() {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
});

document.addEventListener('mouseup', function() {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'translate(-50%, -50%) scale(3)';
    cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

// cursor code


// gsap code here
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const links = document.querySelectorAll(".links > a");

const leftSideText = document.querySelectorAll(".leftSide > h2,h3");
const rightSideText = document.querySelector(".rightSide > p");
const model = document.querySelector("#model");
const modelText = document.querySelector("#model > h1");
const about = document.querySelector("#about");
const aboutTop = document.querySelector("#about-top");
const socialMedia = document.querySelector(".social-media");
const aboutHeading = document.querySelector("#about-heading");
const aboutpara = document.querySelectorAll(".textParagraph > p");

(function() {

    tl.from(document.querySelector(".logo"), {
        y:-100,
        opacity: 0,
        duration: .5,
        ease: "power2.inOut"
    })
    links.forEach((link) => {
        tl.from(link, {
            y:-100,
            opacity: 0,
            duration: .5,
            ease: "power2.inOut",
            stagger: 0.05
        })
    })
    
    tl.from(socialMedia, {
        x:100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    })
    tl.from(document.querySelector("#hero-heading"), {
        y:100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    })
    leftSideText.forEach((headings) => {
       tl.from(headings, {
            y:100,
            opacity: 0,
            duration:.5,
            ease: "power2.inOut"
        })
    })
    tl.from(document.querySelectorAll(".btns"),{
        y:100,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut"
    })
    tl.from(rightSideText,{
        y:100,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut"
    })
    tl.from(aboutTop,{
        x:-2100,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: aboutTop,
            start: "top 80%",
            end: "top 10%",
            // markers: true,
            scrub: 2,
            // pin: true,
            toggleActions: "play pause pause reverse",

        },
    })
    aboutpara.forEach((para) => {
        tl.from(para, {
            y:100,
            opacity: 0,
            duration: .5,
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: para,
                start: "top 60%",
                end: "top 10%",
                scrub: true,
                toggleActions: "play pause pause reverse",
            }
        })
    })
    tl.from(document.querySelector("#servicesImg"),{
        y:100,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        scrollTrigger: {
                        trigger: document.querySelector("#servicesImg"),
                        start: "top 80%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })
    tl.from(document.querySelectorAll(".card"),{
        y:100,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        stagger: .5,
        scrollTrigger: {
                        trigger: document.querySelectorAll(".card"),
                        start: "top 90%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })
    tl.from(document.querySelector("#technologiesworkingwith"),{
        y:100,
        opacity: 0,
        duration:1,
        ease: "power2.inOut",
        scrollTrigger: {
                        trigger: document.querySelector("#technologiesworkingwith"),
                        start: "top 60%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })
    tl.from(document.querySelector("#worksection"),{
        y:200,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        scrollTrigger: {
                        trigger: document.querySelector("#worksection"),
                        start: "top 60%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })
    tl.from(document.querySelector("#workprocess"),{
        y:200,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        scrollTrigger: {
                        trigger: document.querySelector("#workprocess"),
                        start: "top 60%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })
    tl.from(document.querySelector("#contact"),{
        y:200,
        opacity: 0,
        duration:.5,
        ease: "power2.inOut",
        scrollTrigger: {
                        trigger: document.querySelector("#contact"),
                        start: "top 60%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play pause pause reverse",
                    }
    })

}())
