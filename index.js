let containerDiv = document.getElementById("container")

function createGrid(rows, cols){
    
    for(let i=0; i<(rows*cols); i++){
        let divs = document.createElement("div")
        containerDiv.appendChild(divs).className = "cell"
    }
}
createGrid(16, 16);