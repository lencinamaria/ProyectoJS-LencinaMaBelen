


function saludarUsuario (){
    let nombre= prompt("ingrese su nombre completo");
let apellido= prompt ("ingrese su apellido");


alert("Bienvenid@ " + nombre +" "+ apellido + " a Grupo kowsk")
console.log("Bienvenid@ " + nombre +" "+ apellido + " a Grupo kowsk")
}

saludarUsuario ();

let marcaValida= true


do{
    let marca = prompt("Seleccione una marca para continuar 1.Byrbags 2.Kowskstore")

    if( marca ==="1" ) {
        alert( "BYRBAGS: Bolsas 10 unidades $100")
        marcaValida = false
    }
    
    else if( marca === "2") {
        alert( "KOWSKSTORE: Remera lisa 1 unidad $200")
        marcaValida = false
    } else {
        alert( "Selecione una opciòn valida")
        console.error("No se Reconoce la opción, ingresar 1 o 2")

    }

}
while(marcaValida)
    
