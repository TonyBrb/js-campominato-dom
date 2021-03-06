document.getElementById('play').addEventListener('click', function(){
    play();
})


function play(){
    const level = parseInt(document.getElementById('level').value);
    const livelliGriglia = [100,81,49];
    const numCella = livelliGriglia[level-1];
    const cellsPerRow = Math.sqrt(numCella);
    console.log(numCella);
    console.log(cellsPerRow);

    document.querySelector('main').innerHTML = '';
    generatePlayGround();


    function generatePlayGround(){
        let counter = 0;
        const griglia = document.createElement('div');
        griglia.className = 'griglia';
         const bombs = generateBombs();
         console.log(bombs);
        for(let i = 1; i <= numCella; i++){
            const cella = document.createElement('div');
            cella.className = 'cella';
            cella.innerHTML = `<span>${i}</span>`;
            const cellSize = `calc(100% / ${cellsPerRow})`;
            cella.style.width = cellSize;
            cella.style.height = cellSize;
            // cella.addEventListener('click', handleClickCell);
            if(bombs.includes(i)){
                cella.addEventListener('click', handleClickCellBomb);
            }else{
                cella.addEventListener('click', handleClickCell);
                counter++;
            }
            griglia.append(cella)
        }
        document.querySelector('main').append(griglia);

    }


   


    function generateBombs(){
    const bombs = [];
    const BOMBS_NUMBER = 16;
    while(bombs.length < BOMBS_NUMBER){
        const bomb = getRandomInt(1, numCella);
        if(!bombs.includes(bomb)) bombs.push(bomb);
    }
    return bombs;
    }

}

function handleClickCell(event){
    console.log(event.target.innerText);
    this.classList.add('clicked');
}

function handleClickCellBomb(event){
    console.log(event.target.innerText);
    this.classList.add('bomb');
}




function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}