/*

&& -> and (e) 
|| -> or (ou)
! ->not (não)

*/ 

/*
|  AND   |   OR    |
|  ----  |  -----  |   
|v v = v | v v = v |
|v f = f | v f = v |
|f v = f | f v = v |   
|f f = f | f f = f |

*/

let n1,n2,n3,n4 
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log(!(n1 + n2 >= n3)||(n3 - n1 > n2))