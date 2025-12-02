
const categoryChart = document.getElementById('category-chart')
const monthlyChart = document.getElementById('monthly-chart')

new Chart(categoryChart, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Transport', 'Housing', 'Entertainment', 'Shopping'],
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

function createTransaction(){
    let detailsDiv = document.querySelector('#details-div')
    let trDate = document.getElementById('new-date').value
    let trDesc = document.getElementById('new-desc').value
    let trCat = document.getElementById('new-cat').value
    let trType = document.getElementById('new-type').value
    let trAmount = document.getElementById('new-amount').value

    const newTransaction = document.createElement('div')
    newTransaction.setAttribute('class', 'tr-details')
    
    let newDate = document.createElement('div')
    newDate.setAttribute('class', 'date-div')
    let dateText = document.createElement('p')
    dateText.textContent = trDate
    newDate.appendChild(dateText)
    newTransaction.appendChild(newDate)

    let newDesc = document.createElement('div')
    newDesc.setAttribute('class', 'desc-div')
    let descText = document.createElement('p')
    descText.textContent = trDesc
    newDesc.appendChild(descText)
    newTransaction.appendChild(newDesc)

    let newCat = document.createElement('div')
    newCat.setAttribute('class', 'cat-div')
    let catText = document.createElement('p')
    catText.textContent = trCat
    newCat.appendChild(catText)
    newTransaction.appendChild(newCat)

    let newType = document.createElement('div')
    newType.setAttribute('class', 'type-div')
    let typeText = document.createElement('p')
    typeText.textContent = trType
    newType.appendChild(typeText)
    newTransaction.appendChild(newType)

    let newAmount = document.createElement('div')
    newAmount.setAttribute('class', 'amount-div')
    let amountText = document.createElement('p')
    amountText.textContent = trAmount
    newAmount.appendChild(amountText)
    newTransaction.appendChild(newAmount)

    detailsDiv.appendChild(newTransaction)
}