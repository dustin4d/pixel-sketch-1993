const gridContainer = document.querySelector('.grid-container')

function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('.grid-cell')
}

for (let i = 0; i <= 32; i++){
    addSquare();
}