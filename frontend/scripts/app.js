
const categoryChart = document.getElementById('category-chart')
const monthlyChart = document.getElementById('monthly-chart')

new Chart(categoryChart, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Transportation', 'Housing', 'Entertainment', 'Shopping'],
        datasets: [{
            data: [300, 400, 500, 600, 700, 800]
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
})

new Chart(monthlyChart, {
    type: 'bar',
    data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
            data: [4000, 1000],
            backgroundColor: ['rgb(105, 214, 250)', 'rgba(255, 0, 0, 0.75)']
        }]
    }
})