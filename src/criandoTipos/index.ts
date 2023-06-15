type User = 'user 1' | 'user 2' | 'user 3' | 'user 4'

let user: User //indicando que a variavel 'user' é do tipo 'User', para que o ts consiga saber oque esperar quando chamar a variavel 'user'.
let firstUser: User = 'user 1'

function checkUser(user: User) {
  if (user === 'user 1') {
    return true
  } else {
    return false
  }
}
console.log(checkUser('user 1')) //true

function checkFirstUser(firstUser: User) {
  if (firstUser === 'user 2' || 'user 3') {
    console.log(`${firstUser} não é o primeiro usuário!`)
  } else if (firstUser === 'user 4') {
    console.log(`${firstUser}é o último usuário!`)
  } else {
    console.log(`${firstUser} é o primeiro usuário logado.`)
  }
}
console.log(checkFirstUser('user 2')) //user 2 não é o primeiro usuário!
console.log(checkFirstUser('user 4')) //user 4 é o último usuário!
console.log(checkFirstUser('user 1')) //user 1 é o primeiro usuário logado.


// ---------
type GreetingCallback = (name: string) => void  //um tipo que indica ser uma função que recebe uma string como parametro

function greet(callback: GreetingCallback) {
  let name = 'yure'

  callback(name) 
  //calbaack que é um patametro da função greet, o TS já reconhece que ele é uma função pelo seu tipo.
  // e funciona passar a variavel name = 'yure' pois ela é uma string, que ja foi indicado em seu tipo.
}


export {}