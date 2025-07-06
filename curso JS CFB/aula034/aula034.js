//const c1=document.getElementById('c1')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el = evt.target
        console.log(`${el.innerHTML} foi clicado`)
        el.classList.add('destaque')
    })
})

// c1.addEventListener('click',(evt)=>{
//     const el=evt.target
//     el.classList.add('destaque')    
// })

