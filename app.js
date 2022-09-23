// Constants
const gridCell = document.querySelector('.grid-cell')
const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')
const colorButton = document.querySelector('#color-menu')
const toolbar = document.querySelector('#toolbar')
const buttons = document.querySelector('button')
const colorBtn = document.querySelector('.colorBtn')
const returnBtn = document.querySelector('.return-button')

// Event Listeners
/* colorBtn.addEventListener("click", function() {
    toolbar.classList.remove('show')
    toolbar.classList.add('hidden')
    colorButton.classList.add('show')
    colorButton.classList.remove('hidden')
})

returnBtn.addEventListener('click', function() {
    colorButton.classList.add("hidden")
    colorButton.classList.remove('show')
    toolbar.classList.remove('hidden')
    toolbar.classList.add('show')
})
*/

// Logic
function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
}

let currentRes = 16;

for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}

/* Add function that toggles between expanded color menu and the condensed menu,
 *  in addition to hiding the other two buttons, as to make room for the expanded
 *  color menu.
 */

function swapBars() {
    buttons.remove();

    const colorButton = document.createElement('button')
    toolbar.appendChild(colorButton)
}

