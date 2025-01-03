
# Land Use Tracker Dashboard

This project implements a **Land Use Tracker Dashboard** that utilizes the Leaflet.js map library and Chart.js for displaying dynamic map layers and statistical visualizations.

## Features
- Interactive **Leaflet** map with multiple basemap options: **Light**, **Dark**, and **Satellite**.
- Overlay filters for land use categories (e.g., **Forest Area**, **Deforestation**).
- Switchable basemaps using an elegant button interface.
- Responsive statistics panel with bar charts generated using **Chart.js**.

## File Structure
```
|-- index.html  # Main dashboard file
|-- styles.css  # (If applicable) External styling
|-- scripts.js  # (If applicable) External JavaScript logic
```

## How to Run
1. Open the `index.html` file in your browser to launch the dashboard.
2. Interact with the map to change the basemap, toggle filters, or view statistics.

## Technologies Used
- **HTML5** for layout and structure.
- **CSS3** for styling, with an orange color theme for visual uniformity.
- **JavaScript** for dynamic interactions and charts.
- **Leaflet.js** for the interactive map.
- **Chart.js** for displaying statistical data as bar charts.

## Customization
- You can update the bar chart data by modifying the corresponding `datasets` arrays in the `Chart.js` scripts.
- To change the basemap options, modify the tile layers in the `Leaflet.js` configuration.

## Example Bar Chart Data
```javascript
new Chart(document.getElementById('deforestationChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['2001', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: 'Deforestation Area (ha)',
            data: [5000, 10000, 15000, 20000, 25000],
            backgroundColor: 'rgba(255, 165, 0, 0.7)',  // Orange theme
            borderColor: 'rgba(255, 140, 0, 1)',
        }]
    }
});
```

## Known Issues
- If the dashboard does not display as expected, ensure that your browser supports JavaScript and the included libraries.
- If the basemaps do not load, check your network connectivity.

## Future Improvements
- Add download options for statistical reports.
- Implement more interactive charts (e.g., pie charts and line charts).
- Add more filter categories based on user feedback.

## License
This project is licensed under the MIT License.
