let val = document.getElementById('dimension-input');

let valInputBtn = document.getElementById('dimension-input-btn');
valInputBtn.addEventListener('click', function () {
    if (val.value <= 100) {
        gridLW = val.value;
    } else if (val.value > 100) {
        gridLW = 100;
        alert('Inputted Values may not exceed 100. This is a 100x100 grid.')
    } else {
        alert('Please enter valid number and reset grid.');
    }

    createGrid(gridLW);
    function createGrid(gridLW) {
        const gridContainer = document.querySelector('.grid-container');
        for (let i = 0; i <= gridLW - 1; i++) {
            const rowDivs = document.createElement('div');
            rowDivs.className = 'rowDivs';
            gridContainer.appendChild(rowDivs);

            for (let j = 0; j <= gridLW - 1; j++) {
                const gridDivs = document.createElement('div');
                gridDivs.className = 'gridDivs';
                gridDivs.setAttribute(`style`, `width: ${400 / gridLW}px; height: ${400 / gridLW}px`);
                rowDivs.appendChild(gridDivs);

                gridDivs.addEventListener('mouseover', function () {
                    let randNum = Math.floor(Math.random() * 3)+1;
                    if (randNum === 1) {
                        gridDivs.className = 'gridDivsHover-red';
                        gridDivs.setAttribute(`style`, `width: ${400 / gridLW}px; height: ${400 / gridLW}px`);
                    } else if (randNum === 2) {
                        gridDivs.className = 'gridDivsHover-green';
                        gridDivs.setAttribute(`style`, `width: ${400 / gridLW}px; height: ${400 / gridLW}px`);
                    } else if (randNum === 3) {
                        gridDivs.className = 'gridDivsHover-blue';
                        gridDivs.setAttribute(`style`, `width: ${400 / gridLW}px; height: ${400 / gridLW}px`);
                    }
                    
                    
                });
            }
        }
    }
}, { once: true });


let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function () {
    location.reload();
});













