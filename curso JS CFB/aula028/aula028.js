const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*3
let num=['1','2','3','4','5'].map(dobrar, parseInt )
console.log(num)



// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)


// let el = document.getElementsByTagName('div')
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML='CFB cursos'
// })



// let cursos = ['HTML','CSS','JavaScript','PHP','REACT']
// let c = cursos.map((el,i)=>{
//     return `<div>${el}</div>`
// })
// console.log(c)
