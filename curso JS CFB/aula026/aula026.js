/*let soma = (...valores) => {

    let somar = val => {
        let res = 0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,15)
*/
/*
let saudacao = (nome)  => {
    let mensagem = (n) => {
        return `ola ${nome}, muito prazer`
    } 
    return mensagem(nome)

}

console.log(saudacao('bruno'))
*/

let VerificadorPar =(p)=>{
    let teste = (t)=>{
        if (t%2==0){
            return 'Par'
        } else {
            return 'impar'
        }
    }
    return teste(p)
}

console.log(VerificadorPar(6))