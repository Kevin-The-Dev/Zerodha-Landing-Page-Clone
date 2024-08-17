function calculateReturns() {
    const capital = parseFloat(document.getElementById('capital').value);
    const years = parseInt(document.getElementById('years').value);
    const interest = parseFloat(document.getElementById('interest').value);

    if (isNaN(capital) || isNaN(years) || isNaN(interest) || capital <= 0 || years <= 0 || interest <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    const resultsDiv = document.getElementById('results');
    const finalAmount = capital * Math.pow((1 + interest / 100), years);
    const profit = finalAmount - capital;

    resultsDiv.innerHTML = `
        <p style = "font-weight:bold">Final Capital: Rs.${finalAmount.toFixed(2)}</p>
        <p style = "font-weight:bold">Profit Earned: Rs.${profit.toFixed(2)}</p>
    `;

    const data = {
        labels: ['Initial Capital', 'Profit Earned'],
        datasets: [{
            data: [capital, profit],
            backgroundColor: ['#007bff', '#28a745'],
            hoverBackgroundColor: ['#0056b3', '#218838']
        }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true
        }
    });
}
