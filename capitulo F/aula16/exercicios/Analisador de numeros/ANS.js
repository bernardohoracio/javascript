var n = document.getElementById('Inumero')
let lista = document.getElementById('Ian')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }   
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(n.value) && !inLista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja exitente na lista.')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valore[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }

        media = sima / tot



        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} Númeors cadastrados</p>`
        res.innerHTML += `<p>O maior valore informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
    }
        
