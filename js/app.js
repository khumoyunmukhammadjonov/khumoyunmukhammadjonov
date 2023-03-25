const logo = document.querySelector("#logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML +=
    '<span class="letter" style="opacity: 0">' + letter + "</span>";
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5, stagger: 0.05, ease: "back.out(3)" }
);

// Arrow and scroll function
const arrow = document.querySelector("#scroll-down-arrow");
const section = document.querySelector(".vh-100");

window.addEventListener("scroll", () => {
  const sectionHeight = section.getBoundingClientRect().height;
  const scrollPosition = window.scrollY;

  if (scrollPosition > sectionHeight) {
    arrow.classList.add("d-none");
  } else {
    arrow.classList.remove("d-none");
  }
});

arrow.addEventListener("click", function () {
  arrow.style.display = "none";
});
// Arrow and scroll function
