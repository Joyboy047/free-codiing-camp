let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr; // Append the count string to the existing content
    console.log(countStr);
}




