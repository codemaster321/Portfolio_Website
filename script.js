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
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
