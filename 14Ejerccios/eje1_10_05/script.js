let edad1, edad2
let nombre1, nombre2;
let formulario = document.getElementById("form")
let resultado = document.getElementById("res")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    nombre1 = document.getElementById("nombre1").value
    edad1 = document.getElementById("edad1").value

    nombre2 = document.getElementById("nombre2").value
    edad2 = document.getElementById("edad2").value

    proceso(nombre1,nombre2,edad1,edad2)
}

function proceso(nombre1,nombre2,edad1,edad2){
    if(edad1>edad2){
        resultado.innerHTML = nombre1
    } else if(edad1<edad2){
        resultado.innerHTML = nombre2
        }
}