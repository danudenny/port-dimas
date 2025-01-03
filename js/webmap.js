// Initialize the map
const map = L.map('map').setView([-1.6144, 113.593], 6);

// Add basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let geojsonLayer;

// Fetch GeoJSON data from external file
fetch('data/kalimantan.geojson')
    .then(response => response.json())
    .then(geojsonData => {
        geojsonLayer = L.geoJSON(geojsonData, {
            style: function (feature) {
                return {
                    color: feature.properties.name === "Deforestation Area 1" ? "red" : "orange",
                    weight: 2
                };
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
            }
        });
    })
    .catch(error => console.error('Error loading GeoJSON data:', error));

// Toggle GeoJSON layer visibility
document.getElementById('toggle-layer').addEventListener('change', function (e) {
    if (e.target.checked) {
        geojsonLayer.addTo(map);
    } else {
        map.removeLayer(geojsonLayer);
    }
});

// Add Forest JRC WMS layer
const forestJRC = L.tileLayer('https://geoserver-development.koltivaapi.com/geoserver/gwc/service/tms/1.0.0/koltiva_gis_internal%3Agis_int_eudr_jrc_wms@EPSG%3A900913@png/{z}/{x}/{-y}.png', {
    attribution: "© Koltiva GIS"
});

// Toggle Forest JRC WMS layer visibility
document.getElementById('toggle-forest-layer').addEventListener('change', function (e) {
    if (e.target.checked) {
        forestJRC.addTo(map);
    } else {
        map.removeLayer(forestJRC);
    }
});
