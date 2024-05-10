//Calculador de peso
let peso = 70
let altura =1.65
let mbi = peso/(altura**2)

function MBI(mbi) {
    if(mbi < 18.5){
        return "estas bajo de peso"
    }else{
        if(mbi <= 18.5 || mbi <= 24.9){
            return "Tienes buen peso"
        }else{
            if(mbi <= 25 || mbi <= 29.9){
                return "tienes sobrepeso"
            }else{
                console.log(mbi)
                if(mbi >= 30){
                    return "Estas obeso"
                }else{
                    return false
                }
            }
        }
    }
}
console.log(MBI(mbi))

//Calculadora
let n1= 4
let n2= 3
let operacion= "/"

if(operacion==="+"){
    console.log(n1+n2)
}else{
    if(operacion==="-"){
        console.log(n1-n2)
    }else{
        if(operacion==="x"){
            console.log(n1*n2)
        }else{
            if(operacion==="/" && n2!== 0){
                console.log(n1/n2)
            }else{
                console.log("eso que tiene que ver con la navidad")
            }
        }
    }
}

//Revisa numero par o impar
let par = 3

if(par%2===0){
    console.log("el numero es par", par)
}else{
    console.log("el numero es impar", par)
}       

//Numero mayor y numero menor
let num1 = 10
let num2 = 20

let comparacion= num1 >= num2

console.log(comparacion)

if(comparacion){
    console.log(num1 +"es mayor a"+ num2)
}else{
    console.log(num1+"es menor a"+ num2)
}

//Actualizacion de stock de una tienda
let inventario = ['Laptop', 'Teléfono', 'Tableta']
let actualizacion = ['Monitor', 'Teléfono'] 

function actualizarInventario(inventario, actualizacion) {
    const newinventario = inventario.concat(actualizacion)
    return newinventario
}
console.log(actualizarInventario(inventario, actualizacion));