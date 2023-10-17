
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i <=16; i++) {
        const rowDivs = document.createElement('div');
        rowDivs.className = 'rowDivs';
        gridContainer.appendChild(rowDivs);

        for(let j = 0; j <= 16; j++) {
            const gridDivs = document.createElement('div');
            gridDivs.className = 'gridDivs';
            gridDivs.setAttribute('id', 'rowDivs');
            gridDivs.addEventListener('drag', function() {
                gridDivs.className = 'gridDivsHover';
            }
            );
            rowDivs.appendChild(gridDivs);
            
        }
    }


   


