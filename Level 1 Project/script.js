"use strict";
const menuBar = document.querySelector(".menu");
const nav = document.querySelector(".navbar");

menuBar.addEventListener("click", function () {
  nav.classList.toggle("navb");
});
