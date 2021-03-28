let containerDiv = document.getElementById("container")
let click = false
let eraserBtn = document.getElementById("btnEraser")
let doodleBtn = document.getElementById("btnDoodle")

function createGrid(length){
    
    for(let i=0; i<(length ** 2); i++){                       
        //loops upto the number of total cells

        let cell = document.createElement("div")
        //creates a div each time

        containerDiv.appendChild(cell).className = "cell"
        //appends the cells to container div

        if(cell){
           function doodle(){
            
            let draw = function(){

              let fill = function(){
                if(click){
                  cell.style.backgroundColor = "black"              
                }
              }

              cell.addEventListener("mousedown", () =>{
                click = true

                cell.style.backgroundColor = "black"
              })
              //when mouse is held, click becomes true bgcolor is set again to fill the cell even
              //when mouse isn't held down, but also works with just a click

              cell.addEventListener("mouseup", () =>{
                click = false
              })
              //when mouse is released, click becomes false

              cell.addEventListener("mouseenter", fill)
              //this activates when the mouse enters the cells and doodles only when click is true
            }

              doodleBtn.addEventListener("click", draw)
            }
            doodle()
    
          function eraser(){
            let erase = function(){
              //////erase function start//////
              
              let makeWhite = function(){
                if(click){
                  cell.style.backgroundColor = "white"              
                }
              }

              cell.addEventListener("mousedown", () =>{
                click = true

                cell.style.backgroundColor = "white"
              })

              cell.addEventListener("mouseup", () =>{
                click = false
              })
              
              cell.addEventListener("mouseenter", makeWhite)
            }
             /////erase function end/////
            
            eraserBtn.addEventListener("click", erase)
            
          }
          eraser()
        }
    }

    let containerSize = 512;
    let cellSize = containerSize/length;
    //determines the size of the cell so that all of it fits
    //equally into the container

    containerDiv.style.gridTemplateColumns = `repeat(${length}, ${cellSize}px)`;
    containerDiv.style.gridTemplateRows = `repeat( ${length}, ${cellSize}px)`;
}

createGrid(16);