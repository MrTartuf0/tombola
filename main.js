let numPescato = document.getElementById("numero-pescato")
let numPescatoText = document.getElementById("numero-pescato-text")
let giaPescati = [0]
let numRandom = 0


// VARIANT

let allNumbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 ]

function pesca2(){
    let randomIndex = Math.floor( (Math.random() * allNumbers.length ) + 1 )
    numRandom = allNumbers[ randomIndex-1 ]
    allNumbers.splice(randomIndex-1 , 1)
    let taken  = document.querySelector(".n"+(numRandom))
    taken.classList.add("taken")

    numPescatoText.textContent = "Il numero pescato e' :"
    numPescato.textContent = numRandom
}

// BLOAT VERSION

// function pesca(){
//     if(giaPescati.length < 91){
//         let contUguali = 1
    
//         while(contUguali!=0 && giaPescati.length < 91){
//             contUguali = 0
            
//             numRandom = Math.floor(Math.random() * 90 + 1)
            
//             giaPescati.forEach(element => {
//                 (element == numRandom) ? contUguali++ : console.log("Diverso")
//             });
//         }
    
//         giaPescati.push(numRandom)
//         numPescato.textContent = "Numero pescato: " + numRandom
    
//         let taken  = document.querySelector(".n"+numRandom)
//         console.log(taken)
//         taken.classList.add("taken")
    
//         console.log(giaPescati)
    
//     }    

// }