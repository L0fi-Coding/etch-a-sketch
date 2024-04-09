const container= document.querySelector(".container");
function defaultgrid(){
    for (let i = 0; i < 256; i++) {
        
        const square = document.createElement("div");
        container.appendChild(square);
      }
      
}

function createGrid(){
    let num=0
    for ( i= 0; i < 16; i++) {
        
        const square = document.createElement("div");
        square.classList.add("row")
        container.appendChild(square);
        for (let i = 0; i < 16; i++) {
            
            const block = document.createElement("div");
            block.classList.add("column")
            square.appendChild(block);
      }
    }
  
}
createGrid()



