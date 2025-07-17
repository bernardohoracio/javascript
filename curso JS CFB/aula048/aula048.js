const p_array = document.getElementById('iarray')
const btn = document.getElementById('btnVerif')
const resultado = document.getElementById('Resultado')

const elementos_array=[21,25,19,20,16,18,22]
p_array.innerHTML=`["${elementos_array}"]`


btn.addEventListener('click',(evt)=>{
    const ret =elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posiçao ${i}`
        }
        return e >= 18
    })
    if(ret){
        resultado.innerHTML='OK'
    }
    //console.log(ret)
})

