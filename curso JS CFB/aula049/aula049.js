const p_array = document.getElementById('iarray')
const btn = document.getElementById('btnVerif')
const resultado = document.getElementById('Resultado')

const elementos_array=[16,12,10,15,17,13]
p_array.innerHTML=`["${elementos_array}"]`


btn.addEventListener('click',(evt)=>{
    const ret =elementos_array.some((e,i)=>{
        if(e>18){
           resultado.innerHTML='OK'
        } else {
            resultado.innerHTML=`Array não conforme`
        }
        return e >= 18
    })
    //console.log(ret)
})

