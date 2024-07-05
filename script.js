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
let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {  
    let nb = 0 // this variable helps in determining if we would have to calculate or not.
    button.addEventListener("click" ,function() {

        let value = this.textContent;
        if (["-" ,"0"].includes(screen.textContent) && ["x" ,"÷" ,"+"].includes(value)) value = "" ;
        if (value === "Clear") {
            screen.textContent = "";
            value = "";
        }
        if (["+","-","%","x","÷"].includes(screen.textContent.slice(-1)) && ["+","-","%","x","÷"].includes(value)) {
            screen.textContent = screen.textContent.slice(0,-1);
        }
        if (["x", "÷", "+", "-"].includes(value)) {
            if (determineOperator(screen.textContent)[0].length === 2) {
                value = calculate(screen.textContent) + value;
            }
        } 
        if (value === "=") {
            if (determineOperator(screen.textContent)[0].length === 2) {
                value = calculate(screen.textContent);
            } else {
                value = ""
            }
        }
        if (value === "del" && screen.textContent.length >=1 && screen.textContent[0] !== "0") {
            screen.textContent = screen.textContent.slice(0,-1);
            value = "";
        }
        if (value === "del") value = ""
        if (screen.textContent.length <= 22 && screen.textContent !== "0" && (!(["x", "÷", "+", "-"].includes(value)))) {
            screen.textContent += value;
        } else {
            screen.textContent = value;
        }
        if (screen.textContent === "") screen.textContent = "0";
    }) 
})

function determineOperator(string) {
    let array = []
    let i = 0;
    ch = ["x", "÷", "+", "-"];
    do {
        array = string.split(ch[i]);
        i += 1;
    } while (array.length === 1 && i < 4);
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
    screen.textContent = "";
    if (!(Number.isInteger(result))) { 
        alert("float")
        return result.toFixed(9) 
    } else {  
        alert("no float")
        return result;
    }
}