let ui = document.querySelector(".userEntry");
let finaCalc = document.querySelector(".finalCalc");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function() {
        if (button.innerText === "=") {
            let result = ui.textContent;
            finaCalc.textContent = eval(result);
        } else if (button.innerText === "AC") {
            ui.textContent = "";
            finaCalc.textContent = "";
        } else if (button.innerText === "DEL") {
            ui.textContent = ui.textContent.slice(0,-1);
        } else {
            ui.textContent += button.innerText;
        }
    });
});