document.addEventListener("DOMContentLoaded", function () {
    const { jsPDF } = window.jspdf;
    const exportButton = document.getElementById("export-btn");

    // Bar Chart: Emissions and Energy Usage
    Highcharts.chart('barChart', {
        chart: { type: 'column' },
        title: { text: 'Emissions and Energy Usage per Process Stage (2019-2023)' },
        xAxis: { categories: ['Planting', 'Growing', 'Harvesting', 'Processing', 'Packaging', 'Distribution'] },
        yAxis: { title: { text: 'Emissions (tCO2e) / Energy (kWh)' } },
        series: [
            { name: 'CO2 Emissions', data: [120, 180, 110, 90, 60, 100], color: '#007bff' },
            { name: 'Energy Usage (kWh)', data: [1000, 1200, 900, 700, 500, 800], color: '#ff9800' },
            { name: 'Waste Generation (kg)', data: [300, 500, 200, 100, 400, 300], color: '#e91e63' }
        ]
    });

    Highcharts.chart('lineChart', {
        chart: { type: 'line' },
        title: { text: 'Emission Trend (2019-2023)' },
        xAxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
        yAxis: { title: { text: 'Total Emissions (tCO2e)' } },
        series: [
            { name: 'Farm A', data: [150, 140, 130, 145, 160], color: '#4caf50' },
            { name: 'Farm B', data: [180, 200, 190, 210, 220], color: '#2196f3' },
            { name: 'Farm C', data: [100, 90, 95, 85, 80], color: '#ff5722' }
        ]
    });

    Highcharts.chart('pieChartEnergy', {
        chart: { type: 'pie' },
        title: { text: 'Energy Consumption by Section' },
        series: [{
            name: 'Energy Usage',
            data: [
                { name: 'Planting', y: 20, color: '#4caf50' },
                { name: 'Growing', y: 30, color: '#ff9800' },
                { name: 'Harvesting', y: 25, color: '#f44336' },
                { name: 'Processing', y: 15, color: '#03a9f4' },
                { name: 'Packaging', y: 10, color: '#9e9e9e' }
            ]
        }]
    });

    Highcharts.chart('stackedChartEmissions', {
        chart: { type: 'bar' },
        title: { text: 'GHG Emissions Types per Process Stage' },
        xAxis: { categories: ['Planting', 'Growing', 'Harvesting', 'Processing', 'Packaging', 'Distribution'] },
        yAxis: { min: 0, title: { text: 'Total GHG Emissions (tCO2e)' } },
        plotOptions: { series: { stacking: 'normal' } },
        series: [
            { name: 'CO2', data: [100, 150, 120, 80, 50, 70], color: '#4caf50' },
            { name: 'CH4', data: [30, 40, 20, 15, 10, 15], color: '#ff5722' },
            { name: 'N2O', data: [10, 15, 10, 8, 5, 7], color: '#9c27b0' }
        ]
    });

    Highcharts.chart('yearlyEmissionChart', {
        chart: { type: 'column' },
        title: { text: 'Total Emissions Per Year' },
        xAxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
        yAxis: { title: { text: 'Total Emissions (tCO2e)' } },
        series: [
            { name: 'Farm A', data: [150, 160, 170, 180, 190], color: '#007bff' },
            { name: 'Farm B', data: [200, 210, 220, 230, 240], color: '#ff9800' },
            { name: 'Farm C', data: [100, 110, 115, 120, 125], color: '#e91e63' }
        ]
    });

    Highcharts.chart('yearlyEnergyChart', {
        chart: { type: 'line' },
        title: { text: 'Energy Usage Per Year' },
        xAxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
        yAxis: { title: { text: 'Energy Usage (kWh)' } },
        series: [
            { name: 'Farm A', data: [5000, 5200, 5400, 5500, 5700], color: '#4caf50' },
            { name: 'Farm B', data: [6000, 6200, 6400, 6600, 6800], color: '#2196f3' },
            { name: 'Farm C', data: [3000, 3200, 3400, 3500, 3600], color: '#f44336' }
        ]
    });

    exportButton.addEventListener("click", () => {
        const pdfUrl = "https://drive.google.com/uc?export=download&id=1MG8m499kLQmj1blEvPgMxefSqTkNiims";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Agriculture_Emission_Report_1.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
