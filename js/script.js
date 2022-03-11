function createGrid(size) {
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
            rows[i] = document.createElement('br');
        }
    }

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < size; j++) {
                grid[i][j] = document.querySelector("#grid");
                grid[i][j].appendChild(gridContent[i][j]);
            }
        } else {
            grid[i].appendChild(rows[i]);
        }
    }
}

function setHoverColor(color) {
    console.log("in setHoverColor");

    let css = "color-choice:hover{box-shadow: 3px 6px 5px " + color + "}";        
    let style = document.createElement('style');
    if(style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}