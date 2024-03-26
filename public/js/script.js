var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// card slider without loop

var swiper = new Swiper(".slide-contain", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".ri-arrow-right-s-line",
    prevEl: ".ri-arrow-left-s-line",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// combos

document.addEventListener("DOMContentLoaded", function () {
  let buttons1 = document.querySelector(".button1");
  let buttons2 = document.querySelector(".button2");
  let buttons3 = document.querySelector(".button3");
  let buttons4 = document.querySelector(".button4");
  let card1 = document.querySelector("#card1");
  let card2 = document.querySelector("#card2");

  buttons1.addEventListener("click", function () {
    card1.classList.remove("d-none");
    card2.classList.add("d-none");
  });

  buttons2.addEventListener("click", function () {
    card1.classList.add("d-none");
    card2.classList.remove("d-none");
  });

  buttons3.addEventListener("click", function () {
    card1.classList.remove("d-none");
    card2.classList.add("d-none");
  });

  buttons4.addEventListener("click", function () {
    card1.classList.add("d-none");
    card2.classList.remove("d-none");
  });
});

// dropdown js

var dropdown = document.getElementsByClassName("sec");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
