console.log("javascript linked")

const container = document.querySelector('.container')

function addSquare() {
    const newSquare = document.createElement('div')
    const squareContent = document.createTextNode('New Square')
    newSquare.appendChild(squareContent)

    container.appendChild(squareContent)
}

for (let i = 0; i <= 16; i++){
    addSquare();
}