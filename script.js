//changing colors upon hovering
let calculate1 = document.querySelector("#calculate1");
let calculate2 = document.querySelector("#calculate2");

calculate1.addEventListener("mouseover" ,() => {
    calculate2.style.backgroundColor = "#8f0091";
    calculate1.style.backgroundColor = "#8f0091";
})

calculate2.addEventListener("mouseover" ,() => {
    calculate2.style.backgroundColor = "#8f0091";
    calculate1.style.backgroundColor = "#8f0091";
})


calculate1.addEventListener("mouseout" ,() => {
    calculate2.style.backgroundColor = "#78007A";
    calculate1.style.backgroundColor = "#78007A";
})


calculate2.addEventListener("mouseout" ,() => {
    calculate2.style.backgroundColor = "#78007A";
    calculate1.style.backgroundColor = "#78007A";
})

//Writing inside the input :
let screen = document.querySelector("#screen");
let history = document.querySelector("#history");
let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {  
    button.addEventListener("click" ,function() {
        let value = this.textContent;
        if (value === "Clear") {
            screen.textContent = "";
            history.textContent = "";
        }
        if (value === "=" && history.textContent[history.textContent.length-1] !== "=") {
            history.textContent += screen.textContent + "=";
            value = calculate(history.textContent);
        }
        if (value === "del" && screen.textContent.length >=1 && screen.textContent[0] !== "0") {
            screen.textContent = screen.textContent.slice(0,-1);
            value = "";
        }
        if (value === "del") value = "" // if the user wanted to delete when there is nothing to delete it would not write del in the screen
        if ((Number(value) && screen.textContent.length <= 10) || value === ".") {
            screen.textContent += value ;
        } else if (["+","-","x","÷","%"].includes(value)) {
            if (history.textContent === "") {
                history.textContent = screen.textContent + value;
            } else {
                history.textContent += screen.textContent;
                history.textContent = calculate(history.textContent) + value;
            }
            screen.textContent = "";
        } 
        if (screen.textContent[0] === "0") {
            screen.textContent = screen.textContent.slice(1)
        };
        if (screen.textContent === "") screen.textContent = "0";
        adjustFontSize(history);
        adjustFontSize(screen);
    }) 
})

function adjustFontSize(element) {
    const maxWidth = element.clientWidth;
    let fontSize = parseInt(window.getComputedStyle(element).fontSize, 10);
    
    while (element.scrollWidth > maxWidth && fontSize > 10) { // Minimum font size of 10px
        fontSize--;
        element.style.fontSize = fontSize + 'px';
    }
}

function determineOperator(string) {
    let array = []
    let i = 0;
    ch = ["x", "÷", "+", "-" ,"%"];
    do {
        array = string.split(ch[i]);
        i += 1;
    } while (array.length === 1 && i < 5);
    return [array ,ch[i-1]];
}

//Calculate:
function calculate(string) {
    let nb1 = parseFloat(determineOperator(string)[0][0]);
    let nb2 = parseFloat(determineOperator(string)[0][1]);
    let op = determineOperator(string)[1];
    let result = 0;
    if (op === "+"){
        result = nb1 + nb2;
    }
    if (op === "x"){
        result = nb1 * nb2;
    }
    if (op === "÷"){
        result = nb1 / nb2;
    }
    if (op === "-"){
        result = nb1 - nb2;
    }
    if (op === "%"){
        result = nb1 % nb2;
    }
    screen.textContent = "";
    return parseFloat(result.toFixed(10));
}