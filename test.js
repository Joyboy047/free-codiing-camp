const { JSDOM } = require("jsdom");

const dom = new JSDOM(`
    <html>
        <body>
            <h2 id="count-el">0</h2>
            <p id="save-el">Previous entries: </p>
        </body>
    </html>
`);

const document = dom.window.document;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}

// Simulate interactions
increment();
increment();
save();
console.log(saveEl.textContent); // Outputs: "Previous entries: 2 - "
