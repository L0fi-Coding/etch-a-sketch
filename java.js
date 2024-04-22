const container= document.querySelector(".container");

      

function createGrid(){
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
function createCGrid(gridValue){
    for ( i= 0; i < gridValue; i++) {
        const square = document.createElement("div");
        square.classList.add("row")
        container.appendChild(square);
        for (let i = 0; i < gridValue; i++) {
            const block = document.createElement("div");
            block.classList.add("column")
            square.appendChild(block);
            block.addEventListener("mouseover", (event) => {
                block.style.background="black"
              });

      }
    
    }
    
};

function cgrid(){
    const gridValue=prompt("how large would you like your grid?:")
    
    function removeElement(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    removeElement("column")
    removeElement("row")
    createCGrid(gridValue)
   
}
document.querySelector(".cugrid").onclick=cgrid