// =========================
// MOBILE MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    }, 1500);

});

// =========================
// TYPED JS
// =========================

if(document.querySelector("#typed")){

new Typed("#typed", {

    strings: [

        "Build Smarter with MainCrafts",
        "Modern Web Solutions",
        "Responsive Digital Experiences",
        "Transforming Ideas Into Reality"

    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

}

// =========================
// AOS ANIMATION
// =========================

if(typeof AOS !== "undefined"){

AOS.init({

    duration: 1000,
    once: true

});

}

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle =
document.querySelector(".theme-toggle");

if(themeToggle){

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    const icon =
    themeToggle.querySelector("i");

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    }

    else{

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});

if(
    localStorage.getItem("theme")
    === "light"
){

    document.body.classList.add(
        "light-mode"
    );

    themeToggle
    .querySelector("i")
    .classList.replace(
        "fa-moon",
        "fa-sun"
    );

}

}

// =========================
// SERVICES SWITCHER
// =========================

const serviceContent =
document.getElementById(
    "serviceContent"
);

const serviceItems =
document.querySelectorAll(
    ".dropdown-menu li"
);

const services = {

web: `
<h3>Web Development</h3>
<p>
We create responsive and modern websites
using HTML, CSS, JavaScript and the latest
web technologies. Perfect for startups,
businesses and portfolios.
</p>
`,

app: `
<h3>App Development</h3>
<p>
Cross-platform mobile applications with
powerful performance, smooth user experience
and scalable backend integration.
</p>
`,

ui: `
<h3>UI / UX Design</h3>
<p>
Beautiful interfaces, user-centered designs,
wireframes, prototypes and modern design
systems that enhance engagement.
</p>
`

};

serviceItems.forEach(item => {

    item.addEventListener("click", () => {

        const service =
        item.getAttribute(
            "data-service"
        );

        if(serviceContent){

            serviceContent.style.opacity =
            "0";

            setTimeout(() => {

                serviceContent.innerHTML =
                services[service];

                serviceContent.style.opacity =
                "1";

            },250);

        }

    });

});

// =========================
// TESTIMONIAL CAROUSEL
// =========================

const testimonials =
document.querySelectorAll(
    ".testimonial"
);

if(testimonials.length > 0){

let currentTestimonial = 0;

function showTestimonial(index){

    testimonials.forEach(item => {

        item.classList.remove(
            "active"
        );

    });

    testimonials[index]
    .classList.add("active");

}

setInterval(() => {

    currentTestimonial++;

    if(
        currentTestimonial >=
        testimonials.length
    ){

        currentTestimonial = 0;

    }

    showTestimonial(
        currentTestimonial
    );

},4000);

}

// =========================
// CONTACT FORM VALIDATION
// =========================

const form =
document.getElementById(
    "contactForm"
);

const error =
document.getElementById(
    "error"
);

if(form){

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const name =
        document
        .getElementById("name")
        .value.trim();

        const email =
        document
        .getElementById("email")
        .value.trim();

        const message =
        document
        .getElementById("message")
        .value.trim();

        if(
            name === "" ||
            email === "" ||
            message === ""
        ){

            error.style.color =
            "#ef4444";

            error.innerText =
            "Please fill all fields.";

            return;

        }

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(
            !emailPattern.test(
                email
            )
        ){

            error.style.color =
            "#ef4444";

            error.innerText =
            "Please enter a valid email.";

            return;

        }

        error.style.color =
        "#22c55e";

        error.innerText =
        "Message sent successfully!";

        form.reset();

        setTimeout(() => {

            error.innerText = "";

        },3000);

    }

);

}

// =========================
// AUTO CLOSE MOBILE MENU
// =========================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if(navLinks){

                navLinks.classList.remove(
                    "active"
                );

            }

        }
    );

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn =
document.getElementById("topBtn");

if(topBtn){

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 300){

            topBtn.style.display =
            "flex";

        }

        else{

            topBtn.style.display =
            "none";

        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);

}