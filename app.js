const container = document.querySelector('.container')

function addSquare() {
    const newSquare = document.createElement('canvas')
    const squareContent = document.createTextNode('<canvas></canvas>')
    newSquare.appendChild(squareContent)

    container.appendChild(newSquare)
    newSquare.classList.add('square')
}

for (let i = 0; i <= 16; i++){
    addSquare();
}