const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
  console.log(window.scrollY); // test
  if (window.scrollY > 50) {
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
