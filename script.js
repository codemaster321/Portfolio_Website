var map = L.map("map").setView([26.4144904, 80.3992543], 19);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([26.4144904, 80.3992543]).addTo(map).bindPopup("Kanpur").openPopup();

const portFolioBtn = document.querySelector(".portfolio");
const portfolio = document.querySelector(".portfolioSection");
const contactBtn = document.querySelector(".contact");
const contact = document.querySelector(".contactSection");

const portFolioBtn1 = document.querySelector(".btn--2");

portFolioBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hii");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

portFolioBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hii");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");

  sectionObserver.unobserve(section);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const openModal = document.querySelector(".show-modal");

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      document.querySelector(".modal").classList.remove("hidden");
      document.querySelector(".overlay--contact").classList.remove("hidden");
    })
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
// openModal.addEventListener("click", (e) => {
//   document.querySelector(".modal").classList.remove("hidden");
//   document.querySelector(".overlay--contact").classList.remove("hidden");
// });

document.querySelector(".close-modal").addEventListener("click", (e) => {
  closeModal();
});

function closeModal() {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay--contact").classList.add("hidden");
}

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
