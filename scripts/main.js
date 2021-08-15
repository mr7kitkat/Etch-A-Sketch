// Variables
const labelGridSize = document.querySelector('#label_gridSize');
const inputGridSize = document.querySelector('#inputGridSize');

const clearAllBtn = document.querySelector('#clearAll');

const labelColorBtn = document.querySelector('#label_color');
const inputColor = document.querySelector('#colorTool');

const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbow');

const mainTag = document.querySelector('main');


// Code
window.addEventListener('load', generateGrid);
inputGridSize.addEventListener('change', generateGrid);

labelColorBtn.addEventListener('click', selectedColor);
eraserBtn.addEventListener('click', activeEraserBtn);
rainbowBtn.addEventListener('click', activeRainbowBtn);

clearAllBtn.addEventListener('click', activeClearButton);



// Function 
function generateGrid() {
    let size = inputGridSize.value;
    size = Number(size);
    if(size >= 1 && size <= 100)
    {
        while(mainTag.firstChild)
        {
            mainTag.removeChild(mainTag.firstChild);
        }

        mainTag.style.cssText = `
        grid-template-columns: repeat(${size},1fr);
        grid-template-rows: repeat(${size},1fr);
        `


        for (let i = 0; i < size; i++)
        {
            for (let j = 0; j < size; j++)
            {
                const div = document.createElement('div');
                div.classList.add('lol');
                mainTag.appendChild(div);
            }
        }

    }
    else
    {
        alert(`Please enter a Number between 1 to 100 only`);
        inputGridSize.value = 16;
    }
    
}


function rainbowColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);

    let rgb = `rgb(${r},${g},${b})`
    return rgb;
}

function disableBtn(){
    labelColorBtn.style.backgroundColor = "transparent";
    labelColorBtn.style.color = "black";
    labelColorBtn.style.fontWeight = "normal";

    eraserBtn.style.backgroundColor = "lightgray";

    rainbowBtn.style.backgroundColor = "transparent";
    rainbowBtn.style.color = "black";
    rainbowBtn.classList.remove('rainbow');
}



function selectedColor(){
        disableBtn();
        inputColor.addEventListener('change', () => {
            labelColorBtn.style.backgroundColor = inputColor.value;
            labelColorBtn.style.color = "white";
        });
        const divs = document.querySelectorAll('.lol');
        divs.forEach((div) => {
            div.addEventListener('click' || 'touchstart' || 'touchmove', () => {
                div.style.backgroundColor = inputColor.value;
            });
        });
}


function activeEraserBtn(){
    disableBtn();

    eraserBtn.style.backgroundColor = "white";

    const divs = document.querySelectorAll('.lol');
    divs.forEach((div) => {
        div.addEventListener('click' || 'touchstart' || 'touchmove', () => {
            div.style.backgroundColor = "transparent";
        });
    });
}


function activeRainbowBtn() {
    disableBtn();
    rainbowBtn.classList.add('rainbow');
    const divs = document.querySelectorAll('.lol');
    divs.forEach((div) => {
        div.addEventListener('click' || 'touchstart' || 'touchmove', () => {
            div.style.backgroundColor = rainbowColor();
        });
    });
}


function activeClearButton() {
    disableBtn();
    const divs = document.querySelectorAll('.lol');
    divs.forEach((div) => {
        div.style.backgroundColor = "transparent";
    });
}