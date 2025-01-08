document.addEventListener("DOMContentLoaded", function () {
    const { jsPDF } = window.jspdf;
    const exportButton = document.getElementById("export-btn");

    const vcsLogo = document.getElementById("logo-vcs");
    const ghgLogo = document.getElementById("logo-ghg");
    const ipccLogo = document.getElementById("logo-ipcc");

    exportButton.addEventListener("click", async function () {
        const pdf = new jsPDF('p', 'mm', 'a4'); // PDF format: portrait (p), mm units, A4 size
        const marginX = 10; // Left margin
        let currentY = 20; // Initial Y position

        // Tambahkan judul laporan
        pdf.setFontSize(18);
        pdf.setTextColor(40);
        pdf.text("Manufacture Emission Dashboard Report", 105, currentY, { align: "center" });
        currentY += 20;

        // Tambahkan logo VCS, GHG, IPCC
        const vcsImg = await getBase64Image(vcsLogo);
        const ghgImg = await getBase64Image(ghgLogo);
        const ipccImg = await getBase64Image(ipccLogo);

        pdf.addImage(vcsImg, "JPEG", marginX, currentY, 30, 30); // Logo VCS
        pdf.addImage(ghgImg, "PNG", marginX + 40, currentY, 30, 30); // Logo GHG Protocol
        pdf.addImage(ipccImg, "PNG", marginX + 80, currentY, 30, 30); // Logo IPCC
        currentY += 40;

        // Tambahkan deskripsi laporan
        pdf.setFontSize(12);
        pdf.text("This report summarizes the emission and energy usage for the selected period.", marginX, currentY);
        currentY += 10;

        // Ambil dan tambahkan semua grafik ke dalam PDF
        const charts = document.querySelectorAll(".chart-container");
        for (let i = 0; i < charts.length; i++) {
            const canvas = await html2canvas(charts[i]);
            const imgData = canvas.toDataURL("image/png");
            const imgHeight = (canvas.height * 190) / canvas.width; // Proportional height for A4 width

            if (currentY + imgHeight > 280) { // Cek jika melebihi halaman PDF
                pdf.addPage(); // Tambahkan halaman baru
                currentY = 20; // Reset posisi Y
            }

            pdf.addImage(imgData, "PNG", marginX, currentY, 190, imgHeight);
            currentY += imgHeight + 10; // Geser ke bawah setelah gambar
        }

        // Tambahkan footer laporan
        pdf.setFontSize(10);
        pdf.setTextColor(100);
        pdf.text("Generated using VCS Standard, GHG Protocol, and IPCC Guidelines", 105, 290, { align: "center" });

        // Simpan PDF
        pdf.save("Manufacture_Emission_Report.pdf");
    });

    // Fungsi helper untuk mengonversi gambar ke base64
    async function getBase64Image(img) {
        return new Promise((resolve) => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/png"));
        });
    }

    // Bar Chart: Emissions and Energy Usage
    Highcharts.chart('barChart', {
        chart: { type: 'column' },
        title: { text: 'Emissions and Energy Usage per Production Stage (2019-2023)' },
        xAxis: { categories: ['Material Intake', 'Assembly', 'Quality Control', 'Packaging', 'Maintenance', 'Distribution'] },
        yAxis: { title: { text: 'Emissions (tCO2e) / Energy (kWh)' } },
        series: [
            { name: 'CO2 Emissions', data: [120, 180, 110, 90, 60, 100], color: '#007bff' },
            { name: 'Energy Usage (kWh)', data: [1000, 1200, 900, 700, 500, 800], color: '#ff9800' },
            { name: 'Waste Generation (kg)', data: [300, 500, 200, 100, 400, 300], color: '#e91e63' }
        ]
    });

    // Line Chart: Emission Trend Over the Years
    Highcharts.chart('lineChart', {
        chart: { type: 'line' },
        title: { text: 'Emission Trend (2019-2023)' },
        xAxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
        yAxis: { title: { text: 'Total Emissions (tCO2e)' } },
        series: [
            { name: 'Factory A', data: [150, 140, 130, 145, 160], color: '#4caf50' },
            { name: 'Factory B', data: [180, 200, 190, 210, 220], color: '#2196f3' },
            { name: 'Factory C', data: [100, 90, 95, 85, 80], color: '#ff5722' }
        ]
    });

    // Pie Chart: % Energy Consumption by Section
    Highcharts.chart('pieChartEnergy', {
        chart: { type: 'pie' },
        title: { text: 'Energy Consumption by Section' },
        series: [{
            name: 'Energy Usage',
            data: [
                { name: 'Material Intake', y: 20, color: '#4caf50' },
                { name: 'Assembly', y: 30, color: '#ff9800' },
                { name: 'Quality Control', y: 25, color: '#f44336' },
                { name: 'Packaging', y: 15, color: '#03a9f4' },
                { name: 'Maintenance', y: 10, color: '#9e9e9e' }
            ]
        }]
    });

    // Stacked Bar Chart: GHG Emissions Types per Stage
    Highcharts.chart('stackedChartEmissions', {
        chart: { type: 'bar' },
        title: { text: 'GHG Emissions Types per Production Stage' },
        xAxis: { categories: ['Material Intake', 'Assembly', 'Quality Control', 'Packaging', 'Maintenance', 'Distribution'] },
        yAxis: { min: 0, title: { text: 'Total GHG Emissions (tCO2e)' } },
        plotOptions: { series: { stacking: 'normal' } },
        series: [
            { name: 'CO2', data: [100, 150, 120, 80, 50, 70], color: '#4caf50' },
            { name: 'CH4', data: [30, 40, 20, 15, 10, 15], color: '#ff5722' },
            { name: 'N2O', data: [10, 15, 10, 8, 5, 7], color: '#9c27b0' }
        ]
    });
});
