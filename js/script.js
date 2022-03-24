let gridSet = false; // A grid has been created or not
let clicked = false;
let color = "#white";
let gridContent;
let grid;
const userInput = document.getElementById('user-size');
userInput.addEventListener('keydown', (e) => {
    console.log("in eventlistern")
    if (e.key === "Enter") {
        console.log("inside if")
        let gridSize = userInput.value;
        console.log(gridSize);
        createGrid(gridSize);
    }

})

function deleteGrid(CONTAINER) {
    while(CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

function createGrid(size) {
    if (!validate(size)) {
        return;
    }

    if (gridSet = false) {
        gridSet = true;
    } else {
        const CONTAINER = document.querySelector('#grid');
        deleteGrid(CONTAINER);
        color = "#white";
        clicked = false;
    }

    let grid = document.querySelector("#grid");

    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size; // creating a 2d number for size (row and columns)
    for (let i = 0; i < amount; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.setAttribute("id", i);
        gridSquare.setAttribute("onclick", "colorTriggered(this);");           
        gridSquare.setAttribute("onmouseover", "fillGridSquare(this);")
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

function validate(size) {
    if (size < 2 || size > 100) {
        return false;
    }

    return true;
} 

function setColor(newColor) {
    if (newColor.length === 0) {
        color = newColor;
    } else {
        color = newColor;
    }
}

function colorTriggered() {
    console.log("in colorTriggered");

    if(clicked) {
        clicked = false;
        console.log("fill in mode: Active using shade: " + color);
        document.getElementById(e.getAttribute("id")).style.backgroundColor = color;
        return;
    } else {
        clicked = true;
        console.log("fill in mode: Inactive using shade: " + color);
    }
}

function fillGridSquare(e) {
    console.log(e.getAttribute("id"));

    if(clicked) {
        console.log("fill in mode: Active using shade: " + color);

        document.getElementById(e.getAttribute("id")).style.backgroundColor = color;

        return;
    } else {
        console.log("fill in mode: Inactive using shade: " + color);
    }
}
