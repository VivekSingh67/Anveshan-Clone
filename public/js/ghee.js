var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const readMoreBtn = document.getElementById("read-more-btn");
const readLessBtn = document.getElementById("read-less-btn");
const hiddenContent = document.querySelector(".ellipsis .hidden");
const spanContent = document.querySelector(".ellipsis span");

readMoreBtn.addEventListener("click", function () {
  hiddenContent.classList.remove("hidden");
  spanContent.classList.add("hidden");
  readMoreBtn.classList.add("hidden");
  readLessBtn.classList.remove("hidden");
});

readLessBtn.addEventListener("click", function () {
  hiddenContent.classList.add("hidden");
  spanContent.classList.remove("hidden");
  readMoreBtn.classList.remove("hidden");
  readLessBtn.classList.add("hidden");
});
