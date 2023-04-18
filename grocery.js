let bgcontainerEl = document.createElement("div");
bgcontainerEl.classList.add("bg-container");
document.body.appendChild(bgcontainerEl);

let headEl = document.createElement("h1");
headEl.textContent = "Glocery List";
headEl.classList.add("heading");
bgcontainerEl.appendChild(headEl);

let ulEl = document.createElement("ul");
ulEl.classList.add("ulpro");
bgcontainerEl.appendChild(ulEl);

let arr = ["Milk", "Biscuits", "Vegetables", "Powder", "Drinks"];
for (let item of arr) {
    let liEl = document.createElement("li");
    liEl.textContent = item;
    ulEl.appendChild(liEl);
}

let InputEl = document.createElement("input");
InputEl.type = "checkbox";
InputEl.id = "mycheck";
bgcontainerEl.appendChild(InputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Need Home Delivery";
labelEl.classList.add("labelpro");
bgcontainerEl.appendChild(labelEl);

let brEl = document.createElement("br");
bgcontainerEl.appendChild(brEl);

let btnEl = document.createElement("button");
btnEl.textContent = "Add More";
btnEl.classList.add("btn", "btn-primary");
bgcontainerEl.appendChild(btnEl);
