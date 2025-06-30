/*let valor = 0
console.log(valor)
function add(v){
    return valor + v
}
valor = add(10)
console.log(valor)

function soma(n1=0,n2=0){
    let res
    res = n1 + n2
    return res
}
let resultado_soma = soma(5,5)
console.log(resultado_soma)
*/

function calcular(n1,n2,s1) {
    let res = 0
    if (s1 == 'soma') {
       return res = n1 + n2
    } else if (s1 == 'subtrai') {
        return res = n1 - n2
    } else if (s1 == 'multiplica') {
        return res = n1 * n2
    } else if (s1 == 'divide'){
        return res = n1 / n2
    }  else {
        return "Operação inválida!"
    }
}



console.log(calcular (10,5,'soma'))
console.log (calcular (10,5,'subtrai'))
console.log (calcular (10,5,'multiplica'))
console.log(calcular (10,5,'divide'))
