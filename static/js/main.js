
/* =====================================
   PORTFOLIO ANIMATIONS
   GSAP + ScrollTrigger + Typed.js
===================================== */

(() => {
    "use strict";

    function initPortfolio() {

        /* =====================================
           CHECK LIBRARIES
        ===================================== */

        if (typeof gsap === "undefined") {
            console.error("GSAP library is not loaded.");
            return;
        }

        gsap.registerPlugin(ScrollTrigger);


        /* =====================================
           TYPED.JS
        ===================================== */

        const typedElement = document.querySelector("#typed");

        if (typedElement && typeof Typed !== "undefined") {

            if (typedElement._typedInstance) {
                typedElement._typedInstance.destroy();
            }

            typedElement._typedInstance = new Typed("#typed", {
                strings: [
                    "Python Developer",
                    "Django Developer",
                    "Web Developer",
                    "Backend Developer",
                    "Problem Solver"
                ],

                typeSpeed: 60,
                backSpeed: 35,
                backDelay: 1200,
                startDelay: 300,
                loop: true,
                showCursor: true
            });
        }


        /* =====================================
           GSAP DEFAULT SETTINGS
        ===================================== */

        gsap.defaults({
            ease: "power3.out",
            duration: 0.8
        });


        /* =====================================
           HERO ANIMATION
        ===================================== */

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        const heroAnimations = [
            [".navbar", { y: -35, opacity: 0, duration: 0.7 }],
            [".hello-badge", { y: 20, opacity: 0, duration: 0.5 }],
            [".hero-title", { y: 35, opacity: 0, duration: 0.7 }],
            [".hero-role", { y: 20, opacity: 0, duration: 0.5 }],
            [".hero-description", { y: 20, opacity: 0, duration: 0.6 }],
            [".hero-buttons", { y: 20, opacity: 0, duration: 0.5 }],
            [".social-links", { y: 15, opacity: 0, duration: 0.5 }],
            [".hero-visual", {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.5)"
            }]
        ];

        heroAnimations.forEach(([selector, animation]) => {

            if (document.querySelector(selector)) {
                heroTimeline.from(
                    selector,
                    animation,
                    selector === ".hero-visual" ? "-=0.5" : undefined
                );
            }

        });


        /* =====================================
           PROFILE FLOAT
        ===================================== */

        if (document.querySelector(".profile-wrapper")) {

            gsap.to(".profile-wrapper", {
                y: -12,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }


        /* =====================================
           ORBIT ANIMATIONS
        ===================================== */

        if (document.querySelector(".orbit-one")) {

            gsap.to(".orbit-one", {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            });

        }

        if (document.querySelector(".orbit-two")) {

            gsap.to(".orbit-two", {
                rotation: -360,
                duration: 24,
                repeat: -1,
                ease: "none"
            });

        }


        /* =====================================
           BACKGROUND GLOW
        ===================================== */

        if (document.querySelector(".glow-one")) {

            gsap.to(".glow-one", {
                x: 100,
                y: 60,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }

        if (document.querySelector(".glow-two")) {

            gsap.to(".glow-two", {
                x: -80,
                y: 70,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }


        /* =====================================
           SCROLL REVEAL
        ===================================== */

        gsap.utils.toArray(".reveal").forEach(element => {

            gsap.fromTo(
                element,
                {
                    y: 35,
                    autoAlpha: 0
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true
                    }
                }
            );

        });


        /* =====================================
           SKILL CARDS
        ===================================== */

        const skillsGrid = document.querySelector(".skills-grid");

        if (skillsGrid) {

            gsap.fromTo(
                skillsGrid.querySelectorAll(".skill-card"),
                {
                    y: 35,
                    autoAlpha: 0
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.65,
                    stagger: 0.12,

                    scrollTrigger: {
                        trigger: skillsGrid,
                        start: "top 85%",
                        once: true
                    }
                }
            );

        }


        /* =====================================
           SERVICE CARDS
        ===================================== */

        const servicesGrid = document.querySelector(".services-grid");

        if (servicesGrid) {

            gsap.fromTo(
                servicesGrid.querySelectorAll(".service-card"),
                {
                    y: 30,
                    scale: 0.96,
                    autoAlpha: 0
                },
                {
                    y: 0,
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.12,

                    scrollTrigger: {
                        trigger: servicesGrid,
                        start: "top 85%",
                        once: true
                    }
                }
            );

        }


        /* =====================================
           PROJECT CARDS
        ===================================== */

        const projectsGrid = document.querySelector(".projects-grid");

        if (projectsGrid) {

            gsap.fromTo(
                projectsGrid.querySelectorAll(".project-card"),
                {
                    y: 40,
                    autoAlpha: 0
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.75,
                    stagger: 0.15,

                    scrollTrigger: {
                        trigger: projectsGrid,
                        start: "top 85%",
                        once: true
                    }
                }
            );

        }


        /* =====================================
           COUNTERS
        ===================================== */

        document.querySelectorAll(".counter").forEach(counter => {

            const target = Number(counter.dataset.target);

            if (!Number.isFinite(target)) return;

            ScrollTrigger.create({

                trigger: counter,
                start: "top 90%",
                once: true,

                onEnter: () => {

                    gsap.fromTo(
                        counter,
                        {
                            innerText: 0
                        },
                        {
                            innerText: target,
                            duration: 1.5,
                            snap: {
                                innerText: 1
                            },
                            ease: "power2.out"
                        }
                    );

                }

            });

        });


        /* =====================================
           MOBILE MENU
        ===================================== */

        const menuBtn = document.getElementById("menuBtn");
        const navMenu = document.querySelector(".nav-menu");

        if (menuBtn && navMenu) {

            menuBtn.addEventListener("click", () => {

                const isOpen = navMenu.classList.toggle("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            });

            navMenu.querySelectorAll("a").forEach(link => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove("open");
                    menuBtn.setAttribute("aria-expanded", "false");

                });

            });

        }


        /* =====================================
           THEME TOGGLE
        ===================================== */

        const themeBtn = document.getElementById("themeBtn");

        if (themeBtn) {

            themeBtn.addEventListener("click", () => {

                const isLight = document.body.classList.toggle("light");

                themeBtn.innerText = isLight ? "☀" : "◐";

                themeBtn.setAttribute(
                    "aria-label",
                    isLight ? "Switch to dark theme" : "Switch to light theme"
                );

                try {
                    localStorage.setItem(
                        "portfolio-theme",
                        isLight ? "light" : "dark"
                    );
                } catch (error) {
                    console.warn("Theme preference could not be saved.");
                }

            });

        }


        /* =====================================
           RESTORE THEME
        ===================================== */

        try {

            const savedTheme = localStorage.getItem("portfolio-theme");

            if (savedTheme === "light") {

                document.body.classList.add("light");

                if (themeBtn) {
                    themeBtn.innerText = "☀";
                }

            }

        } catch (error) {
            console.warn("Saved theme could not be loaded.");
        }


        /* =====================================
           CUSTOM CURSOR
        ===================================== */

        const cursor = document.querySelector(".cursor");
        const cursorRing = document.querySelector(".cursor-ring");

        const supportsHover = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        if (cursor && cursorRing && supportsHover) {

            document.addEventListener("mousemove", event => {

                gsap.set(cursor, {
                    x: event.clientX,
                    y: event.clientY
                });

                gsap.to(cursorRing, {
                    x: event.clientX,
                    y: event.clientY,
                    duration: 0.15,
                    overwrite: "auto"
                });

            });

            document.querySelectorAll(
                "a, button, .project-card"
            ).forEach(element => {

                element.addEventListener("mouseenter", () => {

                    gsap.to(cursorRing, {
                        scale: 1.5,
                        duration: 0.2,
                        overwrite: "auto"
                    });

                });

                element.addEventListener("mouseleave", () => {

                    gsap.to(cursorRing, {
                        scale: 1,
                        duration: 0.2,
                        overwrite: "auto"
                    });

                });

            });

        }


        /* =====================================
           BACK TO TOP
        ===================================== */

        const topBtn = document.getElementById("topBtn");

        if (topBtn) {

            const updateTopButton = () => {

                topBtn.classList.toggle(
                    "show",
                    window.scrollY > 600
                );

            };

            window.addEventListener(
                "scroll",
                updateTopButton,
                { passive: true }
            );

            updateTopButton();

            topBtn.addEventListener("click", () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

        }


        /* =====================================
           ACTIVE NAVIGATION
        ===================================== */

        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-menu a");

        function updateActiveNav() {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.getBoundingClientRect().top + window.scrollY - 160;

                if (window.scrollY >= sectionTop) {
                    current = section.id;
                }

            });

            navLinks.forEach(link => {

                const href = link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    href === "#" + current && current !== ""
                );

            });

        }

        window.addEventListener(
            "scroll",
            updateActiveNav,
            { passive: true }
        );

        updateActiveNav();


        /* =====================================
           REFRESH SCROLLTRIGGER
        ===================================== */

        // Wait until layout and images have settled.
        window.addEventListener("load", () => {

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

        }, { once: true });

        // Handle browser resize and orientation changes.
        let refreshTimer;

        window.addEventListener("resize", () => {

            clearTimeout(refreshTimer);

            refreshTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);

        }, { passive: true });

        // Initial refresh after setup.
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

    }


    /* =====================================
       START AFTER DOM IS READY
    ===================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initPortfolio,
            { once: true }
        );

    } else {

        initPortfolio();

    }

})();

