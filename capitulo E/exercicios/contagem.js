function contar(){
    var In = document.getElementById('txti')
    var Fim = document.getElementById('txtf')
    var Pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (In.value.length == 0 || Fim.value.length == 0 || Pass.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(In.value)
        let f = Number(Fim.value)
        let p = Number(Pass.value)
        if (p <= 0){
            window.alert('PASSO INVALIDO ')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `  ${c}&#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
        } else {
           for (let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c}&#x1F449 `
           } 
           res.innerHTML += `&#x1F3C1`
        }
        
    }
}
