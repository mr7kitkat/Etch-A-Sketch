// Variables
const mainTag = document.querySelector('main');
const go = document.querySelector('#go');
const chooseColorButton = document.getElementById("chooseColor");
const colorPickTool = document.getElementById('color');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const divs = document.querySelectorAll('div.block');
const clearAllButton = document.querySelector('#clearGrid');


window.addEventListener('load', firstLoadFunc);
go.addEventListener('click', createGrid);
chooseColorButton.addEventListener('click', changeTheColor);


// Supporting Functions
function createGrid(){
    const gridSize = document.getElementById("gridSize").value;

    if (gridSize >= 1 && gridSize <= 100)
    {
        while(mainTag.firstChild){
            mainTag.removeChild(mainTag.firstChild)
        }

        mainTag.style.cssText = `
        grid-template-columns: repeat(${gridSize}, 1fr);
        grid-template-rows: repeat(${gridSize}, 1fr);
        `

        for (let i = 0; i < gridSize; i++)
        {
            for (let j = 0; j < gridSize; j++)
            {
                const div = document.createElement('div');
                div.classList.add('block');
                mainTag.appendChild(div);
            }
        }

    }
    else
    {
        alert("Please enter a valid range to make grid from 1 to 100");
    }
}


function changeTheColor(){
    chooseColorButton.style.color = "white";
    chooseColorButton.style.backgroundColor = colorPickTool.value;
    colorPickTool.addEventListener('change', () => {
        chooseColorButton.style.backgroundColor = colorPickTool.value;
    });
}

// This function removes background from buttons
function rmbg(){
    chooseColorButton.style.backgroundColor = "transparent";
    chooseColorButton.style.color = "black";
    eraser.style.backgroundColor = "transparent";
    rainbow.style.backgroundColor = "transparent";
}

// this function runs when page loads
function firstLoadFunc(){
    rmbg();
    createGrid();
    changeTheColor();
}


clearAllButton.addEventListener("click",() =>{
    divs.forEach((div) => {
        div.style.backgroundColor = "white"
    });
});