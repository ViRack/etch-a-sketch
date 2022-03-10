function createGrid(size) {
    console.log("in createGrid");

    let grid = new Array(size);
    let gridContent = new Array(size);
    for (let i = 0; i < size; i++) {
        grid[i] = new Array(size);
        gridContent = new Array(size);
    }

    const grid_container = document.querySelector("#grid");

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++) {
            gridContent[i][j] = document.createElement('button');
            gridContent[i][j].classList.add("grid-square");
        }
    }

    grid_content.classList.add("grid-square");

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid[i][j] = document.querySelector("#grid");
            grid[i][j].appendChild(gridContent[i][j]);
        }
    }
}