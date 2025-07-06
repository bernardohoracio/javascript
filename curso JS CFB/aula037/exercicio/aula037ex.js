const vo=document.querySelector('#vo')
const pai=[...document.querySelectorAll('.pai')]
const filho=[...document.querySelectorAll('.filho')]

vo.addEventListener('click',(evt)=>{
    console.log('clicou no  avô')
    console.log(evt.target)
})

pai.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()   
        console.log('clicou no pai')
        console.log(evt.target)
    })
})

filho.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()   
        console.log('clicou no filho')
        console.log(evt.target)
    })
})



