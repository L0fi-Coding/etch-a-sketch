const container= document.querySelector(".container");

      

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
            block.addEventListener("mouseover", (event) => {
                block.style.background="black"
              });
      }
    
    }
    
};

createGrid()
let change=querySelector(".column")
change.addEventListener('mouseleave', (event) => {
    
   
       change.style.background="black"
    


    
    })


