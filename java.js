// Resume button functionality
function resume() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    alert("Thank you, " + name + "! You'll receive the resume on your email");
}

let resumeButton = document.querySelector("button");
resumeButton.addEventListener("click", resume);

// Typed.js animation
var typed = new Typed('#element', {
    strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});

// Mouse following circles animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
    "#4300bd", "#4300bd", "#0070ff", "#0070ff", "#00acea", "#00acea",
    "#00ddac", "#00ddac", "#4df585", "#4df585", "#89f972", "#89f972",
    "#b8fb63", "#b8fb63", "#e3fc5b", "#e3fc5b", "#00d4d3", "#00d4d3",
    "#00d4d3", "#DAFF62"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();

// Hire me button functionality
function hireme() {
    let name = prompt("What is your name?");
    alert("Thank you, " + name + "! You can connect with me through gmail: ashree2118@gmail.com");
}

let button2 = document.querySelector("a[href='']");
if (button2) {
    button2.addEventListener("click", function(e) {
        e.preventDefault();
        hireme();
    });
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navUl.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// Scroll animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= windowHeight &&
        rect.left <= windowWidth
    );
}

function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    
    fadeElements.forEach(element => {
        if (isElementPartiallyInViewport(element)) {
            element.classList.add('visible');
        }
    });
    
    slideLeftElements.forEach(element => {
        if (isElementPartiallyInViewport(element)) {
            element.classList.add('visible');
        }
    });
    
    slideRightElements.forEach(element => {
        if (isElementPartiallyInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Event listeners for scroll animations
window.addEventListener('scroll', throttle(handleScrollAnimations, 10));
window.addEventListener('load', handleScrollAnimations);
window.addEventListener('resize', handleScrollAnimations);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(33, 33, 33, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.backgroundColor = 'rgb(33, 33, 33)';
        nav.style.backdropFilter = 'none';
    }
});

// Enhanced project cards hover effect
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Fixed lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Set initial styles
                img.style.transition = 'opacity 0.5s ease';
                
                // Check if image is already loaded
                if (img.complete && img.naturalWidth > 0) {
                    // Image is already loaded, show it immediately
                    img.style.opacity = '1';
                } else {
                    // Image is not loaded yet, set to transparent and wait for load
                    img.style.opacity = '0';
                    
                    const showImage = function() {
                        img.style.opacity = '1';
                        img.removeEventListener('load', showImage);
                        img.removeEventListener('error', showImage);
                    };
                    
                    img.addEventListener('load', showImage);
                    img.addEventListener('error', showImage); // Show even if image fails to load
                    
                    // Fallback timeout in case load event doesn't fire
                    setTimeout(() => {
                        if (img.style.opacity !== '1') {
                            img.style.opacity = '1';
                        }
                    }, 1000);
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});