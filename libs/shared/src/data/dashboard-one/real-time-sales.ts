const data = {
    data: {
        labels: ["6am", "10am", "1pm", "4pm", "7pm", "10pm"],
        datasets: [
            {
                data: [20, 60, 50, 45, 50, 60],
                backgroundColor: "#69b2f8",
                lebel: "today",
            },
            {
                data: [10, 40, 30, 40, 55, 25],
                backgroundColor: "#d1e6fa",
                lebel: "yesterday",
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false,
            },
        },
    },
};

export default data;
