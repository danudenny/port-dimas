// Fungsi untuk menyamakan tinggi map dengan konten sebelah kanan
function syncMapHeight() {
  var mapElement = document.getElementById('map');
  var infoElement = document.querySelector('.scroll-container');
  mapElement.style.height = infoElement.offsetHeight + 'px';
}
// Jalankan fungsi ketika halaman dimuat
window.onload = syncMapHeight;
// Jalankan fungsi ketika ukuran jendela diubah (untuk responsif)
window.onresize = syncMapHeight;
// Inisialisasi Leaflet Map
var map = L.map('map').setView([-5.1406, 119.4221], 13);  // Koordinat Bone, Sulawesi

// Tambahkan basemap OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Polygon 1 - Version 1 (Verified)
var polygon1 = L.polygon([
  [-5.1396, 119.4211],
  [-5.1406, 119.4221],
  [-5.1416, 119.4215],
  [-5.1405, 119.4205]
], {color: 'green'}).addTo(map);
polygon1.bindPopup("Version 1 (Verified)");

// Polygon 2 - Version 2 (Not Verified)
var polygon2 = L.polygon([
  [-5.1390, 119.4210],
  [-5.1400, 119.4220],
  [-5.1410, 119.4210],
  [-5.1400, 119.4200]
], {color: 'orange'}).addTo(map);
polygon2.bindPopup("Version 2 (Not Verified)");

// Initialize Leaflet Draw
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: editableLayers,
        poly: {
            allowIntersection: false
        }
    },
    draw: false
});
map.addControl(drawControl);

// Function to enable editing of polygon
function enablePolygonEditing(polygon) {
    editableLayers.addLayer(polygon);
    polygon.editing.enable();
    document.getElementById('save-button').style.display = 'block';
}

// Add event listeners for "Edit" actions
document.querySelectorAll('.edit-polygon').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const badgeText = this.closest('.dropdown').previousElementSibling.querySelector('.badge').textContent;
        if (badgeText.includes('Pair 1')) {
            enablePolygonEditing(polygon1);
        } else if (badgeText.includes('Pair 2')) {
            enablePolygonEditing(polygon2);
        }
    });
});

// Function to check for overlaps
function checkForOverlaps(polygon) {
    // Dummy function to simulate overlap check
    // Replace this with actual logic to check for overlaps
    return false; // Assume no overlap for demonstration
}

// Save button functionality
document.getElementById('save-button').addEventListener('click', function() {
    console.log('Save button clicked');
    // Show loading animation
    var loadingAnimation = document.getElementById('loading-animation');
    loadingAnimation.style.display = 'block';

    setTimeout(function() {
        editableLayers.eachLayer(function(layer) {
            if (layer.editing && layer.editing.enabled()) {
                layer.editing.disable();
                // Save the edited polygon data
                var editedData = layer.toGeoJSON();
                console.log('Edited Polygon Data:', editedData);
                // You can send the editedData to your server here

                // Check for overlaps
                var hasOverlap = checkForOverlaps(layer);
                if (!hasOverlap) {
                    // Update issue field to No issue and change color to green
                    var issueField = document.getElementById('issue-field');
                    issueField.textContent = 'No issue';
                    issueField.classList.remove('issue-field');
                    issueField.classList.add('no-issue');

                    // Update the issue fields for Pair 1 and Pair 2
                    document.getElementById('issue-pair-1').textContent = 'No issue';
                    document.getElementById('issue-pair-1').classList.remove('data-type-nonverified');
                    document.getElementById('issue-pair-1').classList.add('no-issue');
                    document.getElementById('issue-pair-2').textContent = 'No issue';
                    document.getElementById('issue-pair-2').classList.remove('data-type-nonverified');
                    document.getElementById('issue-pair-2').classList.add('no-issue');

                    // Remove the badges for Pair 1 and Pair 2
                    document.getElementById('badge-pair-1').style.display = 'none';
                    document.getElementById('badge-pair-2').style.display = 'none';
                }
            }
        });
        document.getElementById('save-button').style.display = 'none';
        // Hide loading animation
        loadingAnimation.style.display = 'none';
    }, 500);
});

// Toggle Detail Information visibility
document.getElementById('toggle-detail-button').addEventListener('click', function() {
    const detailInfo = document.getElementById('detail-information');
    const mapContainer = document.querySelector('.map-container');
    const mapElement = document.getElementById('map');
    if (detailInfo.style.display === 'none') {
        detailInfo.style.display = 'block';
        mapContainer.classList.remove('col-md-12');
        mapContainer.classList.add('col-md-8');
        this.textContent = 'Hide Detail Information';
    } else {
