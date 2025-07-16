const p_array = document.getElementById('iarray')
const texto = document.getElementById('itexto')
const btn = document.getElementById('btnPesq')
const resultado = document.getElementById('Resultado')

const elementos_array=['html','css','java','Javascript']
p_array.innerHTML=`["${elementos_array}"]`


btn.addEventListener('click',(evt)=>{
    resultado.innerHTML='Valor não encontrado'
    const ret = elementos_array.find((e,i)=>{
        if(e.toUpperCase() == texto.value.toUpperCase()){
            resultado.innerHTML = `Valor encontrado ${e}, com posição ${i}`
            return e
        }
    })
console.log(ret)
})

