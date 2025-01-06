// Initialize the map
const map = L.map('map').setView([-2.6835, 119.5712], 6);

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker for West Sulawesi
const marker = L.marker([-2.6835, 119.5712]).addTo(map);
marker.bindPopup("<b>West Sulawesi, Indonesia</b><br>Coordinates: -2.6835, 119.5712").openPopup();

// Interactivity for AOI list
const aoiItems = document.querySelectorAll("#aoiList li");
aoiItems.forEach((item) => {
    item.addEventListener("click", () => {
        alert(`Selected AOI: ${item.innerText}`);
    });
});

// Upload AOI button
document.getElementById("uploadAOI").addEventListener("click", () => {
    alert("Upload AOI feature coming soon!");
});
