let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let sonDisplay = document.getElementById("son");
let son = 0;

minusButton.onclick = function () {
    if (son == 0) {
        sonDisplay.textContent = 0;

    }
    else {
        son -= 1;
        sonDisplay.textContent = son;
    }
        if (son < 5) {
    
}
}
plusButton.onclick = function () {
    son += 1;
    sonDisplay.textContent = son;
    if (son == 5) {
    
}

};



