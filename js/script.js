let gridSet = false;
let clicked = false;
let color;

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
    }

    console.log("in createGrid");
    let grid        = new Array(size * 2); // doubled to make room for line breaks. odd indexee's of i will contain a line break.
    let gridContent = new Array(size * 2);
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
            }
        } else {
            rows[i] = document.createElement('div');
            rows[i].setAttribute("onclick", "colorTriggered();");
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

function colorTriggered() {
    console.log("in colorTriggered");
}