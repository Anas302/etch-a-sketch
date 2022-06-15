
createGrid(16);
activateButton();

//when hover any of the squares, change background color to dark brown.

function activateButton(){
    let button = document.querySelector("button");
    button.addEventListener("click", (e) => {
        let userInput;
        do{
            userInput = parseInt(prompt("Enter the number of squares per row: "));
        }while(userInput > 100);

        removeGrid();
        createGrid(userInput);
    });
};

function createSquare(dimension){
    const square = document.createElement("div");
    square.setAttribute("style", `width:${dimension}px; height:${dimension}px;`);
    square.setAttribute("class", "sqr");
    square.addEventListener("mouseover", (e) => {
        square.style.backgroundColor = "brown";
    });
    return square;
};

function createGrid(numOfSquares){
    let container = document.querySelector("#container");
    const widthPerSquare = Math.ceil(container.offsetWidth/numOfSquares) - 1.3;

    for(let j=0; j<numOfSquares; j++){
        for(let i=0; i<numOfSquares; i++){
            const square = createSquare(widthPerSquare);
            container.appendChild(square);
        }
    }
};

function removeGrid(){
    let container = document.querySelector("#container");
    let allSquares = document.body.getElementsByClassName("sqr");
    const numOfSquares = allSquares.length;

    for(let i=numOfSquares - 1; i>=0; i--)
        container.removeChild(allSquares[i]);
};