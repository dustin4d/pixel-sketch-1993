const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')

let currentRes = 16;

function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
}

for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}