import Chart from 'chart.js/auto';


const data = {
    labels: ['DEV IV', 'Frontend', 'Backend', 'Full Projects IV', 'Motion Graphics', 'Design IV'],
    datasets: [{
        axis: 'y',
        label: 'Rayan Khyare',
        data: [9, 9, 8, 5, 8, 4],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        tension: 0.1,
        borderWidth: 1,

    }]
};

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});