///LIGHT MODE DARK MOOD TOGGLE EFFECT
var mode = localStorage.getItem("dark-mode");
var toggle = document.querySelector(".toggle-icon");
var bulb = document.querySelector(".bulb");
var moon = document.querySelector(".moon");

function hideMoon() {
  bulb.classList.remove("bStyle");
  bulb.classList.add("bShow");
  moon.classList.remove("mShow");
  moon.classList.add("mStyle");
}
function hideBulb() {
  moon.classList.remove("mStyle");
  moon.classList.add("mShow");
  bulb.classList.remove("bShow");
  bulb.classList.add("bStyle");
}

function darkMode() {
  //   //Body
  var body = document.querySelector(".body");
  body.classList.add("dark");
  //   // //nav
  var nav = document.querySelector(".nav");
  nav.classList.add("dark");
  //   // //container2
  var container = document.querySelector(".container2");
  container.classList.add("dark");

  hideMoon();

  localStorage.setItem("dark-mode", "enabled");
}

function lightMode() {
  //   //Body
  var body = document.querySelector(".body");
  body.classList.remove("dark");
  //   // //nav
  var nav = document.querySelector(".nav");
  nav.classList.remove("dark");
  //   // //container2
  var container = document.querySelector(".container2");
  container.classList.remove("dark");

  hideBulb();

  localStorage.setItem("dark-mode", null);
}

if (mode === "enable") {
  darkMode();
}
toggle.addEventListener("click", () => {
  mode = localStorage.getItem("dark-mode");
  if (mode !== "enabled") {
    darkMode();
  } else {
    lightMode();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  mode = localStorage.getItem("dark-mode");
  if (mode === "enabled") {
    hideMoon();
    darkMode();
  } else {
    hideBulb();
    lightMode();
  }
});

// END OF LIGHT MOOD & DARK MODE TOGGLE EFFECT

//// NAVBAR SCROLL ANIMATION

let oldValue = 0;
let newValue = 0;
let nav = document.querySelector(".nav");
let article = document.querySelector(".article");
let con1 = document.querySelector(".container1");
let aside = document.querySelector(".sideBar");

window.addEventListener("scroll", (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    nav.classList.add("navUp");
    con1.classList.add("up");
    aside.classList.add("up");
    article.classList.add("upper");
  } else if (oldValue > newValue) {
    nav.classList.remove("navUp");
    con1.classList.remove("up");
    aside.classList.remove("up");
    article.classList.remove("upper");
  }
  oldValue = newValue;
});
//END OF NAVBAR SCROLL ANIMATION

// SIDEBAR  EFFECT
var bars = document.querySelector(".bars");
var body = document.querySelector(".body");

bars.addEventListener("click", () => {
  aside.classList.toggle("showSideBar");
  con1.classList.toggle("opacity");
});

con1.addEventListener("click", () => {
  con1.classList.remove("opacity");
  aside.classList.remove("showSideBar");
});
//END OF SIDEBAR EFFECT

//CATEGORY TOGGLE EFFECT
const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
  btn = tag.querySelector(".caret");

  tag.addEventListener("click", () => {
    tags.forEach((item) => {
      if (item !== tag) {
        item.classList.remove("display");
      }
    });
    tag.classList.toggle("display");
  });
});

const closeLink = document.querySelector(".nav-link");
const closeIt = document.querySelector(".closeIt");
closeIt.addEventListener("click", () => {
  console.log("working");
  closeLink.classList.toggle("close-link");
});

//END OF CATEGORY TOGGLE EFFECT

// body.onload = () => {
//   mode = localStorage.getItem("dark-mode");
//   if (mode === "enabled") {
//     hideMoon();
//     darkMode();
//   } else {
//     hideBulb();
//     lightMode();
//   }
// };

// search icon toggle function
const menu = document.querySelector(".menu");
const searchBar = document.querySelector(".searchBar");
const input = document.getElementById("input");
const exist = document.querySelector(".arrow");
const names = document.querySelector(".webName");

function change() {
  menu.classList.add("hide");
  names.classList.add("hide");
  exist.classList.add("show");
  searchBar.classList.add("show");
  input.focus();
}
var glass = document.querySelector(".glass");

glass.addEventListener(
  "click",
  () => {
    change();
  },
  false
);

function back() {
  // var menu = document.querySelector(".menu");
  // var searchBar = document.querySelector(".searchBar");
  // var exist = document.querySelector(".arrow");
  // var namez = document.querySelector(".webName");
  menu.classList.remove("hide");
  exist.classList.remove("show");
  searchBar.classList.remove("show");
  names.classList.remove("hide");
}

exist.addEventListener("click", back, false);

//   click effect

var eye = document.querySelector(".eyes");
var num = 1;
var views = document.querySelector(".views");

eye.addEventListener("click", () => {
  let number = num++;
  views.textContent = `${number} views`;
});

var hand = document.querySelector(".hand");
var num = 1;
var clap = document.querySelector(".clapping");

hand.addEventListener("click", () => {
  let number = num++;
  clap.textContent = `${number} apploud`;
});

//bookmark

var bookmark = document.querySelector(".fa-bookmark");

bookmark.onclick = () => {
  bookmark.classList.add("clicked");
};
