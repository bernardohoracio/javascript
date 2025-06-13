function tabuada (){
    var num = document.getElementById('Inumero')
    var tab = document.getElementById('Itabuada')
    if (num.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }  else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){    
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}