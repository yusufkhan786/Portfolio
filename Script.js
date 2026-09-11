/* =========================================================
   MOHD YUSUF KHAN — PORTFOLIO JS
   ========================================================= */


/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

function handleHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("open");
    nav.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("open");
        nav.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === `#${sectionId}`
                ) {
                    link.classList.add("active");
                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* ================= REVEAL ON SCROLL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .stat-card, .skill-card, .project-card, .service, .education-card, .contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* ================= BACK TO TOP ================= */

const backTop = document.getElementById("back-top");

function toggleBackTop() {

    if (window.scrollY > 600) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }

}

window.addEventListener("scroll", toggleBackTop);

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SMOOTH ANCHOR SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ================= TILT EFFECT ================= */

const profileCard = document.querySelector(".profile-card");

if (profileCard && window.innerWidth > 900) {

    profileCard.addEventListener("mousemove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "rotate(2deg)";

    });

}


/* ================= MOUSE GLOW ================= */

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth) * 100;

        const y =
            (event.clientY / window.innerHeight) * 100;

        hero.style.setProperty(
            "--mouse-x",
            `${x}%`
        );

        hero.style.setProperty(
            "--mouse-y",
            `${y}%`
        );

    });

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cMohd Yusuf Khan — Portfolio",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "Data Entry | Excel | TallyPrime | Basic Bookkeeping"
);