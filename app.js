// Constants
const gridCell = document.querySelector('.grid-cell')
const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')

// Event Listeners
gridCell.addEventListener("click", paintColor)

// Logic
let currentRes = 16;



function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
}

for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}