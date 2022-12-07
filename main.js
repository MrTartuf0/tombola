let numPescato = document.getElementById("numero-pescato")
let giaPescati = [0]
let numRandom = 0

function pesca(){
    
    let contUguali = 1
    
    while(contUguali!=0){
        contUguali = 0
        
        numRandom = Math.floor(Math.random() * 90 + 1)
        
        giaPescati.forEach(element => {
            if(element == numRandom){
                console.log("Uguale trovato")
                contUguali++
            }
            else{
                console.log("Diverso")
            }
        });
    }

    giaPescati.push(numRandom)
    numPescato.textContent = "Numero pescato: " + numRandom

    let taken  = document.querySelector(".n"+numRandom)
    console.log(taken)
    taken.classList.add("taken")

    console.log(giaPescati)
}