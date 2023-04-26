//recupero la griglia contenitore
const gioca = document.getElementById("gioca")

gioca.addEventListener("click", creaBox )

function creaBox(creaGriglia){
const griglia = document.getElementById("grid");
griglia.innerHTML= ""
console.log(griglia)

for (let i = 0; i < 100; i++) {
    
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("square");
    nuovoDiv.classList.add("d-flex");
    nuovoDiv.classList.add("justify-content-center");
    nuovoDiv.classList.add("align-items-center");
    nuovoDiv.innerText= i+1

    nuovoDiv.addEventListener("click", function() {
        console.log("this: ", this);
        this.classList.toggle("clicked");
    });

    griglia.appendChild(nuovoDiv);

}
}