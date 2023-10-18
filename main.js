let val = document.getElementById('dimension-input');


let valInputBtn = document.getElementById('dimension-input-btn');
valInputBtn.addEventListener('click', function () {
    if(val.value <= 100) {
        gridLW = val.value;
    } else {
        gridLW = 100;
        alert('Inputted Values may not exceed 100. This is a 100x100 grid.')
    }
    
    
    createGrid(gridLW);
    function createGrid(gridLW) {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i <= gridLW-1; i++) {
        const rowDivs = document.createElement('div');
        rowDivs.className = 'rowDivs';
        gridContainer.appendChild(rowDivs);

        for (let j = 0; j <= gridLW-1; j++) {
            const gridDivs = document.createElement('div');
            gridDivs.className = 'gridDivs';
            gridDivs.setAttribute(`style`, `width: ${500/gridLW}px; height: ${500/gridLW}px`);
            rowDivs.appendChild(gridDivs);

            gridDivs.addEventListener('mouseover', function () {
                gridDivs.className = 'gridDivsHover';
            });

        }

    }   
}

});














