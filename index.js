let count = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let resetBtn = document.getElementById("reset-btn")
let clearHistoryBtn = document.getElementById("clear-history-btn")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count > 0) {  
        saveEl.textContent += count + " - "
        count = 0;
        countEl.textContent = count
    }
}

function reset() {
    count = 0;
    countEl.textContent = count
}

function clearHistory() {
    saveEl.textContent = "Previous count: "
    alert("Histórico limpo!")
}

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)
resetBtn.addEventListener("click", reset)
clearHistoryBtn.addEventListener("click", clearHistory)
