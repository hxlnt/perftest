window.addEventListener('keyup', keypress);

const grid = document.getElementById('grid');
let boundary = 20;

drawRows(102);

// This is slower than appendChild() version below
// But that may be because I repeated a smaller chunk of HTML
// On each iteration. Would be interesting to re-test.
//
// function drawRows(rowNumber){
//     const row = { removed for space }
//     grid.innerHTML = row.repeat(rowNumber);
// }

function drawRows(rowNumber){
    const row = document.querySelector('#row');
    for (i=0; i<rowNumber; i++){ grid.appendChild(row.content.cloneNode(true)); }
}

function keypress(e) {
    if (e.code == "ArrowLeft" && boundary > 1){
        grid.querySelectorAll("div.boundary").forEach(element => {
            element.classList.remove('boundary', 'attr0');
            element.classList.add('attr1');
            element.previousElementSibling.classList.add('boundary');
        });
        boundary--;
    }
    else if (e.code == "ArrowRight" && boundary < 39){
        boundary++;
        grid.querySelectorAll("div.boundary").forEach(element => {
            element.classList.remove('boundary');
            element.nextElementSibling.classList.replace('attr1', 'attr0');
            if (boundary < 40) {element.nextElementSibling.classList.add('boundary');}
        });
    }
  }
