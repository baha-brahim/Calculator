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
        if (["-" ,"0"].includes(screen.textContent) && ["x" ,"÷" ,"+"].includes(value)) value = "";
        if (value === "Clear") {
            screen.textContent = "";
            value = "";
        }
        if (["x", "÷", "+", "-"].includes(value)) {
            let array = []
            let i = 0;
            ch = ["x", "÷", "+", "-"];
            do {
                array = screen.textContent.split(ch[i]);
                i+=1;
            } while (array.length === 1 && i < 4);
            
            if (array.length === 2) {
                value = calculate();
            }
        } 
        if (value === "=") {
            value = calculate();
        }
        if (value === "del" && screen.textContent.length >=1 && screen.textContent[0] !== "0") {
            screen.textContent = screen.textContent.slice(0,-1);
            value = "";
        }
        if (value === "del") value = ""
        if (["+","-","%","x","÷"].includes(screen.textContent.slice(-1)) && ["+","-","%","x","÷"].includes(value)) {
            screen.textContent = screen.textContent.slice(0,-1);
        }
        if (screen.textContent.length < 11 && screen.textContent[0] !== "0") {
            screen.textContent += value;
        } else {
            screen.textContent = value;
        }
        if (screen.textContent === "") screen.textContent = "0";
    }) 
})


//Calculate:
function calculate() {
    return "="
}