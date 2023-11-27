let navbar = document.querySelectorAll(".navbar")[0];
let timeline = document.querySelectorAll(".article-timeline")[0];
let timelineInner = document.querySelectorAll(".article-timeline-inner")[0];
let timelineInnerBC = document.querySelectorAll(".article-timeline-inner-image")[0];
let timelineTitle = document.querySelectorAll(".article-timeline-inner-title")[0];
let timelineOverlay = document.querySelectorAll(".article-timeline-inner-overlay")[0];
const timelineAnimationDetails = "cubic-bezier(.175, .685, .32, 1) forwards";
let timelineLine = document.querySelectorAll(".article-timeline-line")[0];
let timelineBack = document.querySelectorAll(".article-timeline-back")[0];
let timelineBackButton = document.querySelectorAll(".article-timeline-back-button")[0];

let timelineOpen = false;

let tliarticle1 = document.querySelector("#tliarticle1");
let tliarticle2 = document.querySelector("#tliarticle2");
let tliarticle3 = document.querySelector("#tliarticle3");
let tliarticle4 = document.querySelector("#tliarticle4");
let tliarticle5 = document.querySelector("#tliarticle5");

let tlarticle1 = document.querySelector("#tlarticle1");
let tlarticle2 = document.querySelector("#tlarticle2");
let tlarticle3 = document.querySelector("#tlarticle3");
let tlarticle4 = document.querySelector("#tlarticle4");
let tlarticle5 = document.querySelector("#tlarticle5");

timelineInner.addEventListener("mouseover", function(event) {
    event.preventDefault();

    if (timelineOpen === false) {
        timelineInnerBC.style.transform = "scale(1.1, 1.1)";
    } else {
        timelineInnerBC.style.transform = "scale(1, 1)";
    }
});

timelineInner.addEventListener("mouseout", function(event) {
    event.preventDefault();

    timelineInnerBC.style.transform = "scale(1, 1)";
});

timelineInner.addEventListener("click", function(event) {
    event.preventDefault();

    if (timelineOpen === true) {

    } else {
        timelineInner.style.cursor = "default";
        navbar.style.animation = `none`;
        timelineBack.style.animation = `none`;
        timelineInner.style.animation = `none`;
        timelineInnerBC.style.transform = "scale(1.1, 1.1)";

        setTimeout(() => {
            document.querySelector("body").style.overflow = "hidden";
            navbar.style.animation = `timelineNavbarOut 1s 1s ${timelineAnimationDetails}`;
            timelineBack.style.animation = `timelineBackOut 1s 1.5s ${timelineAnimationDetails}`;
            timelineInner.style.animation = `timelineIn 1s 1s ${timelineAnimationDetails}`;
            timeline.scrollIntoView({ behavior: 'smooth', block: 'start' });
            timelineLine.style.opacity = "1";
            timelineLine.style.pointerEvents = "auto";
            timelineOpen = true;
        }, 200);
    }
});

timelineBackButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (timelineOpen === true) {
        navbar.style.animation = `none`;
        timelineBack.style.animation = `none`;
        timelineInner.style.animation = `none`;
        document.querySelector("body").style.overflow = "auto";
        navbar.style.animation = `timelineNavbarOut 1s ${timelineAnimationDetails} reverse`;
        timelineBack.style.animation = `timelineBackOut 1s ${timelineAnimationDetails} reverse`;
        timelineInner.style.animation = `timelineIn 1s ${timelineAnimationDetails} reverse`;
        timeline.scrollIntoView({ behavior: 'smooth', block: 'start' });
        timelineLine.style.opacity = "0";
        timelineLine.style.pointerEvents = "none";
        tlarticle1.style.display = "none";
        tlarticle2.style.display = "none";
        tlarticle3.style.display = "none";
        tlarticle4.style.display = "none";
        tlarticle5.style.display = "none";
        timelineInnerBC.style.transform = "scale(1, 1)";

        setTimeout(() => {
            timelineInner.style.height = "60vh";
            timelineInner.style.cursor = "pointer";
            timelineOpen = false;
        }, 200);
    } else {

    }
});

tliarticle1.addEventListener("click", function(event) {
    event.preventDefault();

    tlarticle1.style.display = "flex";
    tlarticle2.style.display = "none";
    tlarticle3.style.display = "none";
    tlarticle4.style.display = "none";
    tlarticle5.style.display = "none";
});

tliarticle2.addEventListener("click", function(event) {
    event.preventDefault();

    tlarticle1.style.display = "none";
    tlarticle2.style.display = "flex";
    tlarticle3.style.display = "none";
    tlarticle4.style.display = "none";
    tlarticle5.style.display = "none";
});

tliarticle3.addEventListener("click", function(event) {
    event.preventDefault();

    tlarticle1.style.display = "none";
    tlarticle2.style.display = "none";
    tlarticle3.style.display = "flex";
    tlarticle4.style.display = "none";
    tlarticle5.style.display = "none";
});

tliarticle4.addEventListener("click", function(event) {
    event.preventDefault();

    tlarticle1.style.display = "none";
    tlarticle2.style.display = "none";
    tlarticle3.style.display = "none";
    tlarticle4.style.display = "flex";
    tlarticle5.style.display = "none";
});

tliarticle5.addEventListener("click", function(event) {
    event.preventDefault();

    tlarticle1.style.display = "none";
    tlarticle2.style.display = "none";
    tlarticle3.style.display = "none";
    tlarticle4.style.display = "none";
    tlarticle5.style.display = "flex";
});