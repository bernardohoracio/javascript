/*let f = new Function("v1","v2","return v1 + v2")

console.log(f(10,5))
*/
let c = 1
let intervalo = setInterval (function() {
    console.log(c);
    c++;
    if (c > 5){
        clearInterval(intervalo);
    }
}, 1000)

