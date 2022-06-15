
const widthPerSquare = Math.floor(window.innerWidth/16) - 4.3;
let container = document.querySelector("#container");

for(let j=0; j<16; j++){
    for(let i=0; i<16; i++){
        const square = document.createElement("div");
        square.setAttribute("style", `width:${widthPerSquare}px; height:${widthPerSquare}px;`);
        square.setAttribute("class", "sqr");
        container.appendChild(square);
    }
}

const allSquares = document.querySelectorAll(".sqr");

// for(let i=0; i<16*16; i++){
//     allSquares[i].addEventListener("mouseover", (e) => {
//         allSquares[i].style.backgroundColor = "brown";
//     });
// }