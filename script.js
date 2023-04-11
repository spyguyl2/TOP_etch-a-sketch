let gridSize = 16;
let sizeRequest = '';
colorSelection = "black";
const container = document.querySelector('#container');
const btnGridSize = document.querySelector('#btnGridSize');
btnGridSize.addEventListener('click', () => {
    removeGrid();
    sizeRequest = '';
    while(sizeRequest === '' || parseInt(sizeRequest) < 1 || parseInt(sizeRequest) > 64) {
        sizeRequest = prompt("Select a new grid size from 1-64.");
    }
    gridSize = sizeRequest;
    createGrid();
});

function changeColor() {
    this.style.backgroundColor = colorSelection;
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeGrid() {
    
    const container = document.querySelector('#container');
    removeAllChildren(container);
}

function createGrid() {
    for (let index = 0; index < gridSize; index++) {
        const divRow = document.createElement('div');
        divRow.classList.toggle('row');
        container.appendChild(divRow)
        for (let index = 0; index < gridSize; index++) {
            const div = document.createElement('div');
            div.classList.toggle('square');
            div.addEventListener('mouseover', changeColor)
            divRow.appendChild(div);
        }
    }
}
createGrid();