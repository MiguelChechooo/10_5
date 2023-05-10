let n1,n2,n3;
let formulario = document.getElementById("form")
let resultado = document.getElementById("res")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    n3 = document.getElementById("n3").value

    proceso(n1,n2,n3)
}


function proceso(n1,n2,n3){
    
if (n1<n2 && n2<n3){
    resultado.innerHTML = ("el orden es"+n1+n2+n3);
}else if (n1>n2 && n2>n3 ){
    resultado.innerHTML = ("el orden es"+n3+n2+n1);
}else if (n2<n1 && n1<n3){
    resultado.innerHTML = ("el orden es"+n2+n1+n3);
} else if (n3<n1 && n2>n1){
    resultado.innerHTML = ("el orden es"+n3+n1+n2);

} else if (n2<n3 && n1>n3){
    resultado.innerHTML = ("el orden es"+n2+n3+n1);
}else if(n2>n3 && n1<n3){
    resultado.innerHTML = ("el orden es"+n1+n3+n2);
}
}