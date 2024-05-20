
const screen = document.getElementById("screen");

function toDisplay(input){
    screen.value += input;
}


function clearDisplay(){
    screen.value = "";
}

function calculate(){
    try{
    screen.value = eval(screen.value);
    }
    catch(error){
        screen.value = "Error"
    }
}