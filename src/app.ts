import { data } from "./data";

const table = document.createElement("table");
document.body.appendChild(table);
const thead = document.createElement("thead");
table.appendChild(thead);
const tbody = document.createElement("tbody");
table.appendChild(tbody);

const trHead = document.createElement("tr");
thead.appendChild(trHead);

Object.keys(data[0]).forEach(key => {
    const th = document.createElement("th");
    th.innerText = key;
    trHead.appendChild(th);
});

data.forEach(kutya => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    Object.keys(kutya).forEach(value => {
        const td = document.createElement("td");
        td.innerText = kutya[value].toString();
        tr.appendChild(td);
    })
})