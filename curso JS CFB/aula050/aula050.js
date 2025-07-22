const p_array = document.getElementById('iarray')
const btn = document.getElementById('btnRedu')
const resultado = document.getElementById('Resultado')

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML=`["${elementos_array}"]`

btn.addEventListener('click',(evt)=>{
    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual+anterior
   })
   resultado.innerHTML+="<br/> v.anterior:"+ant+"<br/>v.atual:"+atu+"<br/>v.dobro:"+dobro
})

