/*function soma(...valores){
    
    let res = 0 
    for(let v of valores){
        res+=v
    }


    return res
}

console.log(soma(10,5,2,15,8))
*/

function maiorNumero(...numeros) {
    let res = 0

    for (let valor of numeros) {
        if (valor > res) {
            res = valor
        }
    }
    return res

}

console.log("O maior número é: " + maiorNumero(1, 3, 7, 2))        // 7
console.log("O maior número é: " + maiorNumero(10, 5, 20, 8, 15)) //20

console.log("O maior número é: " + maiorNumero(4, 9, 2, 1, 30))