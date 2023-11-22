const toIndexInner = document.querySelectorAll(".to-index .navbar-inner")[0];
const toIndex = document.querySelectorAll(".to-index")[0];
const pageOverlay = document.querySelectorAll(".page-overlay")[0];
const navbarLink = document.querySelectorAll(".navbar-inner-logo-link")[0];
const navbarAnimationDuration = ".35s";
const navbarAnimationDetails = "cubic-bezier(.175, .685, .32, 1) forwards";

navbarLink.addEventListener("click", function(event) {
    event.preventDefault();

    toIndexInner.style.animation = 'none';
    toIndexInner.style.animation = `navbarInOut ${navbarAnimationDuration} ${navbarAnimationDetails}`;
    toIndex.style.animation = `navbarTopInOut ${navbarAnimationDuration} ${navbarAnimationDetails}`;
    pageOverlay.style.animation = `pageOverlay ${navbarAnimationDuration} ${navbarAnimationDetails}`;

    setTimeout(() => {
        window.location.href = navbarLink.getAttribute("href");
    }, 500);
});

window.addEventListener("load", function() {
    setTimeout(() => {
        toIndexInner.style.animation = `navbarIn ${navbarAnimationDuration} ${navbarAnimationDetails}`;
    }, 350);
});