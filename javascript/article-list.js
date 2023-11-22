const aListTitles = document.querySelectorAll(".article-list-item-inner-title-inner span");
const aListTitleWrappers = document.querySelectorAll(".article-list-item-inner-title-inner");
const aListBackgrounds = document.querySelectorAll(".article-list-item-background");
const toArticle = document.querySelectorAll(".to-article")[0];
const aListAnimationDuration = ".65s";
const aListAnimationDetails = "cubic-bezier(.175, .685, .32, 1) forwards";

for (let i = 0; i < aListTitleWrappers.length; i++) {
    let titleClicked = false;

    aListTitleWrappers[i].addEventListener("mouseover", function(event) {
        aListBackgrounds[i].style.transform = 'scale(1.1, 1.1)';
    });
    aListTitleWrappers[i].addEventListener("click", function(event) {
        event.preventDefault();

        titleClicked = true;
        aListBackgrounds[i].style.transform = 'scale(1.1, 1.1)';
        toArticle.style.animation = `navbarOut .35s ${aListAnimationDetails}`;

        const targetSectionId = aListTitleWrappers[i].getAttribute("data-target");
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const scrollOptions = {
                top: targetSection.offsetTop,
                behavior: 'smooth',
            };
            window.scrollTo(scrollOptions);
            aListBackgrounds[i].style.transform = 'scale(1.1, 1.1)';
            setTimeout(() => {
                aListBackgrounds[i].style.transform = 'scale(1.1, 1.1)';
                setTimeout(() => {
                    window.location.href = aListTitleWrappers[i].getAttribute("href");
                }, 500);
            }, 500);
        }
    });
    aListTitleWrappers[i].addEventListener("mouseout", function(event) {
        if (titleClicked === false) {
            aListBackgrounds[i].style.transform = 'scale(1, 1)';
        } else {
            aListBackgrounds[i].style.transform = 'scale(1.1, 1.1)';
        }
    });
}

window.addEventListener("load", function() {
    for (let i = 0; i < aListTitles.length; i++) {
        const delay = 0.8 + i * 0.15;
        aListTitles[i].style.animation = `aListTitle ${aListAnimationDuration} ${delay}s ${aListAnimationDetails}`;
    }
});