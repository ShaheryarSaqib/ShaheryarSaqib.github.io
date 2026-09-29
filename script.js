const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

let mouseX = -1000;
let mouseY = -1000;

// Mouse position
window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// 🌊 Liquid background follows mouse

const liquid1 = document.querySelector(".liquid1");
const liquid2 = document.querySelector(".liquid2");
const liquid3 = document.querySelector(".liquid3");

window.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 60;
    const y = (event.clientY / window.innerHeight - 0.5) * 60;

    if (liquid1) liquid1.style.transform = `translate(${x}px, ${y}px)`;
    if (liquid2) liquid2.style.transform = `translate(${-x}px, ${-y}px)`;
    if (liquid3) liquid3.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
});

// Create stars
for (let i = 0; i < 50; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 1,
        speed: Math.random() * 0.5 + 0.1
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        const dx = star.x - mouseX;
        const dy = star.y - mouseY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150 && distance > 0) {

            const force = (150 - distance) / 150;

            star.x += (dx / distance) * force * 2;
            star.y += (dy / distance) * force * 2;
        }

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "blue";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

// Resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ================= NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

});

// ================= ABOUT SECTION ANIMATION =================

const aboutHeading = document.querySelector("#about .section-heading");
const aboutBoxes = document.querySelectorAll("#about .info-box");
const aboutSection = document.querySelector("#about");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (aboutHeading) {
                    aboutHeading.classList.add("show");
                }

                aboutBoxes.forEach((box, index) => {

                    setTimeout(() => {
                        box.classList.add("show");
                    }, index * 150);

                });

                aboutObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// ================= SKILLS SECTION ANIMATION =================

const skillsHeading = document.querySelector("#skills .section-heading");
const skillCards = document.querySelectorAll("#skills .skill-card");
const skillsSection = document.querySelector("#skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (skillsHeading) {
                    skillsHeading.classList.add("show");
                }

                skillCards.forEach((card, index) => {

                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 150);

                });

                skillsObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ================= EDUCATION SECTION ANIMATION =================

const educationHeading = document.querySelector("#education .section-heading");
const educationBoxes = document.querySelectorAll("#education .timeline-content");
const educationSection = document.querySelector("#education");

const educationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (educationHeading) {
                    educationHeading.classList.add("show");
                }

                educationBoxes.forEach((box, index) => {

                    setTimeout(() => {
                        box.classList.add("show");
                    }, index * 150);

                });

                educationObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (educationSection) {
    educationObserver.observe(educationSection);
}
// ================= PROJECTS SECTION ANIMATION =================

const projectsHeading = document.querySelector("#projects .section-heading");
const projectCards = document.querySelectorAll("#projects .project-card");

// ---------- PROJECTS HEADING ----------

if (projectsHeading) {

    const headingObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.3
        }
    );

    headingObserver.observe(projectsHeading);
}


// ---------- INDIVIDUAL PROJECT CARDS ----------

projectCards.forEach(card => {

    const cardObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    cardObserver.observe(card);

});