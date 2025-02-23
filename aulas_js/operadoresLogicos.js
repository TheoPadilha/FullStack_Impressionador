// && and  - Ambas as condicoes sejam verdadeiras 
let idade = 20
let codigo = true 

let podeFazerLogin = idade >=18 && codigo
console.log(podeFazerLogin)

let idade2 = 15
let podeFazerLogin2 = idade2 >=18 && codigo
console.log(podeFazerLogin2)

// || or - apenas uma das condições tem que ser verdadeiras
let login = idade >= 18 || codigo
let login2 = idade2 >= 18 || codigo

console.log(login)
console.log(login2)

// !  not - inverte o valor booleano                                    
let perfil = false

let alerta = !perfil

console.log(alerta)