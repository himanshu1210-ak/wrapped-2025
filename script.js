const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* PRELOADER */
let progress = 0;
const loaderFill = document.getElementById("loaderFill");
const preloader = document.getElementById("preloader");
const app = document.getElementById("app");

const loaderInterval = setInterval(() => {
  progress++;
  loaderFill.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(loaderInterval);
    preloader.style.display = "none";
    app.classList.remove("hidden");
    showSlide(0);
  }
}, 30);

/* SLIDE CONTROL */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function restart() {
  showSlide(0);
}

/* PEOPLE DATA */
function savePeople() {
  document.getElementById("peopleResult").innerHTML = `
    Comfort person: <strong>${comfort.value || "—"}</strong><br>
    Chaos contributor: <strong>${chaos.value || "—"}</strong><br>
    Unexpected constant: <strong>${constant.value || "—"}</strong><br>
    Most hateful: <strong>${hateful.value || "—"}</strong><br>
    <strong>Best: Me.</strong>
  `;
  nextSlide();
}
