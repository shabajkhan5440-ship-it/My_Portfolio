/* =====================================
   TYPED.JS
===================================== */

const typed = new Typed("#typed", {

    strings: [
        "Python Developer",
        "Django Developer",
        "Web Developer",
        "Backend Developer",
        "Problem Solver"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true

});


/* =====================================
   GSAP
===================================== */

gsap.registerPlugin(ScrollTrigger);


/* HERO ANIMATION */

const heroTimeline = gsap.timeline();


heroTimeline
    .from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1
    })

    .from(".hello-badge", {
        y: 30,
        opacity: 0,
        duration: .7
    })

    .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: .8
    })

    .from(".hero-role", {
        y: 30,
        opacity: 0,
        duration: .6
    })

    .from(".hero-description", {
        y: 25,
        opacity: 0,
        duration: .6
    })

    .from(".hero-buttons", {
        y: 25,
        opacity: 0,
        duration: .6
    })

    .from(".social-links", {
        y: 20,
        opacity: 0,
        duration: .5
    })

    .from(".hero-visual", {
        scale: .8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=.8");


/* PROFILE FLOAT */

gsap.to(".profile-wrapper", {

    y: -15,

    duration: 2,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


/* ORBIT */

gsap.to(".orbit-one", {

    rotation: 360,

    duration: 15,

    repeat: -1,

    ease: "none"

});


gsap.to(".orbit-two", {

    rotation: -360,

    duration: 20,

    repeat: -1,

    ease: "none"

});


/* GLOW */

gsap.to(".glow-one", {

    x: 150,
    y: 80,

    duration: 8,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


gsap.to(".glow-two", {

    x: -120,
    y: 100,

    duration: 10,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


/* =====================================
   SCROLL REVEAL
===================================== */

gsap.utils.toArray(".reveal").forEach((element) => {

    gsap.from(element, {

        scrollTrigger: {

            trigger: element,

            start: "top 88%",

            toggleActions:
                "play none none reverse"

        },

        y: 50,

        opacity: 0,

        duration: .8,

        ease: "power3.out"

    });

});


/* =====================================
   SKILL CARDS
===================================== */

gsap.from(".skill-card", {

    scrollTrigger: {

        trigger: ".skills-grid",

        start: "top 80%"

    },

    y: 60,

    opacity: 0,

    stagger: .1,

    duration: .7,

    ease: "power3.out"

});


/* =====================================
   SERVICE CARDS
===================================== */

gsap.from(".service-card", {

    scrollTrigger: {

        trigger: ".services-grid",

        start: "top 80%"

    },

    scale: .85,

    opacity: 0,

    stagger: .12,

    duration: .7,

    ease: "back.out(1.4)"

});


/* =====================================
   PROJECT CARDS
===================================== */

gsap.from(".project-card", {

    scrollTrigger: {

        trigger: ".projects-grid",

        start: "top 80%"

    },

    y: 70,

    opacity: 0,

    stagger: .15,

    duration: .8

});


/* =====================================
   COUNTERS
===================================== */

document.querySelectorAll(".counter").forEach(counter => {

    const target =
        Number(counter.dataset.target);

    ScrollTrigger.create({

        trigger: counter,

        start: "top 90%",

        once: true,

        onEnter: () => {

            gsap.to(counter, {

                innerText: target,

                duration: 1.5,

                snap: {
                    innerText: 1
                },

                ease: "power2.out"

            });

        }

    });

});


/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


/* =====================================
   THEME
===================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        themeBtn.innerText = "☀";

    } else {

        themeBtn.innerText = "◐";

    }

});


/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");


document.addEventListener("mousemove", (event) => {

    gsap.to(cursor, {

        x: event.clientX,

        y: event.clientY,

        duration: .05

    });


    gsap.to(cursorRing, {

        x: event.clientX,

        y: event.clientY,

        duration: .15

    });

});


/* =====================================
   HOVER CURSOR
===================================== */

document
    .querySelectorAll("a, button, .project-card")
    .forEach(element => {

        element.addEventListener("mouseenter", () => {

            gsap.to(cursorRing, {

                scale: 1.7,

                duration: .2

            });

        });


        element.addEventListener("mouseleave", () => {

            gsap.to(cursorRing, {

                scale: 1,

                duration: .2

            });

        });

    });


/* =====================================
   BACK TO TOP
===================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================
   ACTIVE NAV
===================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});