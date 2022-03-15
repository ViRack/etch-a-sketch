let gridSet = false;
let clicked = false;
let color = "#white";
let gridContent;
let grid;

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
    grid        = new Array(size * 2); // doubled to make room for line breaks. odd indexee's of i will contain a line break.
    gridContent = new Array(size * 2);

    let rows        = new Array(size);

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            grid[i] = new Array(size);
            gridContent[i] = new Array(size);
        }
    }

    let id;
    for (let i = 0; i < size; i++){
        if (i % 2 === 0)  {
            for (let j = 0; j < size; j++) {
                id = `${i}-${j}`
                gridContent[i][j] = document.createElement('div');
                gridContent[i][j].classList.add("grid-square");
                gridContent[i][j].setAttribute("id", id);
                gridContent[i][j].setAttribute("onclick", "colorTriggered(this);");           
                gridContent[i][j].setAttribute("onmouseover", "fillGridSquare(this);")
                console.log()
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
