'use strict'
//add event on element
const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

//navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const navLinks = document.querySelectorAll("[data-nav-link]")

const toggleNavbar = function () {
    navbar.classList.toggle("active")
}

addEventOnElement(navTogglers, "click", toggleNavbar)

//back to top
// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]")
//
// window.addEventListener("scroll", function () {
//     if (window.scrollY >= 100) {
//         header.classList.add("active");
//         backTopBtn.classList.add("active")
//     } else {
//         header.classList.remove("active");
//         backTopBtn.classList.remove("active")
//     }
// })


//tab
function openTab(evt, tabName) {
    let tabContent, tabLinks;

    //tab link
    tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", '')
    }

    //tab content
    tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
    }


    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.className += " active"

}