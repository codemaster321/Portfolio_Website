var map = L.map("map").setView([26.4144904, 80.3992543], 40);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([26.4144904, 80.3992543]).addTo(map).bindPopup("Kanpur").openPopup();
