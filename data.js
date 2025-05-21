// 数据格式示例：每天添加一个对象
const dailyData = [
    { date: "2023-10-01", value: 42 },
    { date: "2023-10-02", value: 56 },
    // 每天手动或自动添加新数据
];

// 渲染数据到页面
const container = document.getElementById("data-container");
dailyData.forEach(item => {
    container.innerHTML += `<p>${item.date}: ${item.value}</p>`;
});
