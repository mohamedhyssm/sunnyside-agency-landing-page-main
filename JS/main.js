"use strict";
let header = document.querySelector("header"), burgerIcon = document.getElementById("burgerIcon"), ulNavBar = document.getElementById("ulNavBar"), liNavBar = Array.from(ulNavBar.children), imgLanding = document.querySelector(".landing img"), mainSection = Array.from(document.querySelectorAll("main > div"));
if (window.innerWidth <= 767) {
    // navBar
    liNavBar.forEach((li) => li.addEventListener("click", function () {
        ulNavBar.classList.remove("ul-flex");
    }));
    // image landing
    imgLanding.src = "images/mobile/image-header.jpg";
    // main section
    mainSection[0].setAttribute("style", "order: 2");
    mainSection[1].setAttribute("style", "order: 1");
    for (let i = 2; i < mainSection.length; i++) {
        mainSection[i].setAttribute("style", `order: ${i + 1}`);
    }
}
window.addEventListener("scroll", function () {
    if (this.scrollY >= 700) {
        header.style.background = "#db7f7f";
    }
    else {
        header.style.background = "transparent";
    }
});
window.onresize = function () {
    if (window.innerWidth <= 767) {
        // image
        imgLanding.src = "images/mobile/image-header.jpg";
        // main section
        mainSection[0].setAttribute("style", "order: 2");
        mainSection[1].setAttribute("style", "order: 1");
        for (let i = 2; i > mainSection.length; i++) {
            mainSection[i].setAttribute("style", `order: ${i + 1}`);
        }
    }
    else {
        // image
        imgLanding.src = "images/desktop/image-header.jpg";
        // main section
        for (let i = 0; i < mainSection.length; i++) {
            mainSection[i].setAttribute("style", `order: ${i + 1}`);
        }
    }
};
burgerIcon.onclick = function () {
    ulNavBar.classList.toggle("ul-flex");
    document.addEventListener("click", function (e) {
        if (e.target != ulNavBar && e.target != burgerIcon) {
            ulNavBar.classList.remove("ul-flex");
        }
        this.removeEventListener;
    });
};
//# sourceMappingURL=main.js.map