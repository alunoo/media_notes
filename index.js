const prompt = require("prompt-sync")();
const colors = require('colors');

let rein = true
let notas = [ ,  ,  ,  , ]
let result 

function notes(){
    
    console.log("CALCULANDO MÉDIA DE NOTAS".bgYellow)
    
    console.log("Digite o valor das notas que deseja receber a média:\n".bgYellow)
        notas[0]=parseFloat(prompt("nota1:"))
        notas[1]=parseFloat(prompt("nota2:"))
        notas[2]=parseFloat(prompt("nota3:"))
        notas[3]=parseFloat(prompt("nota4:"))
        notas[4]=parseFloat(prompt("nota5:"))
    console.clear()
    console.log("CALCULANDO MÉDIA DE NOTAS\n\n| nota1:",notas[0],"|","nota2:",notas[1],"|","nota3:",notas[2],"|","nota4:",notas[3],"|", "nota5:",notas[4],"|")
    
        result = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4])/5

    console.log("A média desse aluno é: ", result)     
}

function reinicio(){   
    console.log("\nDeseja efetuar outra operação? Digite 'y' para sim ou 'n' para finalizar.")
    
    let verifyReinicio = prompt();

    if(verifyReinicio === "y" ){
        console.clear()
        rein = true
    } else {
        rein = false

    }
}
notes()
reinicio()