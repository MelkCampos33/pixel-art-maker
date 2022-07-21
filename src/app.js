let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");

let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");

let colorButton = document.getElementById("color-input");
let eraseButton = document.getElementById("erase-btn");

let painButton = document.getElementById("paint-btn");

let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");


// event object

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

// initially draw and erase would be false
let draw = false;
let erase = false;

// delect touch device
const isTouchDevice = () => {

    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;

    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice(

    // create grid
    gridButton.addEventListener("click", () => {

        // initially clear the grid 
        container.innerHTML = "";

        // generating unique ids
        let count = 0;
        
        
    })


);

