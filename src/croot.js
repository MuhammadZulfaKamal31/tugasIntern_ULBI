import { get } from "https://jscroot.github.io/api/croot.js";
import { data } from "./config/url.js";

function handleData(response) {
    const dataContainer = document.getElementById("data_api");
    dataContainer.textContent = JSON.stringify(response);
}

get(data, handleData);

// function createTable(data) {
//     const table = document.createElement("table");
//     table.classList.add("border", "border-collapse");

//     // Buat baris header
//     const headerRow = document.createElement("tr");
//     const headerCells = Object.keys(data[0]).map((key) => {
//         const cell = document.createElement("th");
//         cell.textContent = key;
//         return cell;
//     });
//     headerCells.forEach((cell) => headerRow.appendChild(cell));
//     table.appendChild(headerRow);

//     // Buat baris data
//     data.forEach((item) => {
//         const row = document.createElement("tr");
//         Object.values(item).forEach((value) => {
//             const cell = document.createElement("td");
//             cell.textContent = value;
//             row.appendChild(cell);
//         });
//         table.appendChild(row);
//     });

//     return table;
// }

// const container = document.getElementById("data-api");

// const table = createTable(data);
// container.appendChild(table);
