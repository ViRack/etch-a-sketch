let gridSet = false;
let clicked = false;
let color = "#white";
let gridContent;

function removeAllChildNodes(CONTAINER) {
    while(CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

function createGrid(size) {

    if (gridSet = false) {
        gridSet = true;
    } else {
        const CONTAINER = document.querySelector('#grid');
        removeAllChildNodes(CONTAINER);
        color = "#white";
        clicked = false;
    }

    console.log("in createGrid");
    let grid        = new Array(size * 2); // doubled to make room for line breaks. odd indexee's of i will contain a line break.
    gridContent = new Array(size * 2);
    let rows        = new Array(size);

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            grid[i] = new Array(size);
            gridContent[i] = new Array(size);
        }
    }

    for (let i = 0; i < size; i++){
        if (i % 2 === 0)  {
            for (let j = 0; j < size; j++) {
                gridContent[i][j] = document.createElement('div');
                gridContent[i][j].classList.add("grid-square");
                gridContent[i][j].setAttribute("onclick", "colorTriggered();")
                gridContent[i][j].setAttribute("onmouseover", "fillGridSquare();");
            }
        } else {
            rows[i] = document.createElement('div');
            rows[i].classList.add("grid-break");
        }
    }

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < size; j++) {
                grid[i][j] = document.querySelector("#grid");
                grid[i][j].appendChild(gridContent[i][j]);
            }
        } else {
            grid[i] = document.querySelector("#grid");
            grid[i].appendChild(rows[i]);
        }
    }
}

function setColor(newColor) {
    if (newColor.length === 0) {
        color = "#white";
    } else {
        color = newColor;
    }
}

function colorTriggered() {
    console.log("in colorTriggered");

    if(clicked) {
        clicked = false;
        return;
    } else {
        clicked = true;
        console.log(color);
    }
}

function fillGridSquare() {
    if (clicked) {
        console.log("grid hovering!");
    }
    else {
        return;
    }
}