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
    button.addEventListener("click" ,function() {
        let value = this.textContent;
        if (value === "Clear") {
            screen.textContent = "";
            value = "";
        }
        if (value === "=") {
            value = calculate();
        }
        if (value === "del") {
            screen.textContent = screen.textContent.slice(0,-1);
            value = "";
        }
        if (["+","-","%","x","÷"].includes(screen.textContent.slice(-1)) && ["+","-","%","x","÷"].includes(value)) {
            screen.textContent = screen.textContent.slice(0,-1);
        }
        if (screen.textContent.length < 11) {
            screen.textContent += value;
        }
    }) 
})


//Calculate: