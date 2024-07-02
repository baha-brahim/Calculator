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
let screen = document.getElementById("mathSentence");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {  
    button.addEventListener("click" ,function() {
        let value = this.textContent;
        if (value === "=") {
            value = calculate();
        }
        if (value === "del") {
            value = del();
        }
        if (["+","-","%","x","÷"].includes(screen.value.slice(-1)) && ["+","-","%","x","÷"].includes(value)) {
            screen.value = screen.value.slice(0,-1);
        }
        if (screen.value.length === "11") {
            screen.value += value;
        }
    }) 
})

//Clearing the input field :
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    screen.value = "";
});

//Delete one character :
function del() {
    screen.value = screen.value.slice(0,-1);
    return "";
}

//Calculate:
function caluclate() {

}