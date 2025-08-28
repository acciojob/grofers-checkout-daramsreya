const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    let prices = document.querySelectorAll(".price");
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0;
    });
    let table = document.querySelector("table");
    let existingRow = document.getElementById("ans");
    if (existingRow) {
        table.removeChild(existingRow);
    }
    let totalRow = document.createElement("tr");
    let totalCell = document.createElement("td");
    totalCell.colSpan = 2; 
	totalCell.id = "ans"; 
    totalCell.textContent = "Total Price: " + total;
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

