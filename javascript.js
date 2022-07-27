
init();

function init() {
    grid(16);
}

function grid(gridSize) {

    for (let i = 1; i <= gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        for (let j = 1; j<=gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = `${document.querySelector('.container').clientHeight / gridSize}px`;
            cell.style.width = `${(document.querySelector('.container').clientWidth) / gridSize}px`;
            row.append(cell);
        }
        document.querySelector('.container').append(row);
    }
    initEventListener();
}

function clearGrid() {
    const divs = document.querySelectorAll('.row');
    divs.forEach((div) => 
        div.remove()
    );
}

function colourIn(e) {
    console.log(e);
    console.log(`rgb(${Math.floor(255* Math.random())},0,0)`);
    this.style.backgroundColor = `rgb(${Math.floor(255* Math.random())},${Math.floor(255* Math.random())},${Math.floor(255* Math.random())})`;

}


// Event Listeners for button and mouseover on grid.

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let gridSize = parseInt(prompt('Enter a grid size'));
    if (isNaN(gridSize) || typeof(gridSize) !== 'number') {
        alert('Not a number!')
        return;
    }
    clearGrid();
    grid(gridSize);
})

function initEventListener() {

const cells = document.querySelectorAll('.cell');
cells.forEach((div) =>
    div.addEventListener('mouseover', colourIn)
);

}

