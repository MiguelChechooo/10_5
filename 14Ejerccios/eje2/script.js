let edad
let formulario = document.getElementById("form")
let resultado = document.getElementById("res")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    edad = document.getElementById("edad").value

    proceso(edad)
}

function proceso(edad){
    if(edad<10){
        resultado.innerHTML = ("Es niño (menos de 10 años)")
    } else if (edad>=10 && edad<15){
        resultado.innerHTML = ("Es preadolecente (entre 10 y 15 años)")
    }else if (edad>=15 && edad<18){
        resultado.innerHTML = ("Es adolecente (entre 15 y 18 años)")
    }else if (edad>=18 && edad<50){
        resultado.innerHTML = ("Es adulto (entre 18 y 50 años)")
    }else if (edad>=50){
        resultado.innerHTML = ("Es adulto mayor (mayor de 50 años)")
    }

}