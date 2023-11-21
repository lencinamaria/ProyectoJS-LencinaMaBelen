function saludarUsuario() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");

    if (nombre === null) {
        alert("Por favor, ingrese un nombre válido.");
    } else if (apellido === null) {
        alert("Por favor, ingrese un apellido válido.");
    } else {
        alert("Bienvenid@ " + nombre + " " + apellido + " a Grupo kowsk");
        console.log("Bienvenid@ " + nombre + " " + apellido + " a Grupo kowsk");
    }
}

saludarUsuario();

function seleccionarMarca() {
    let continuar = true;

    while (continuar) {
        let marca = prompt("Seleccione una marca para continuar:\n1. Byrbags\n2. Kowskstore");

        if (marca === "1") {
            alert("BYRBAGS");
        } else if (marca === "2") {
            alert("KOWSKSTORE");
        } else {
            alert("Seleccione una opción válida");
            console.error("No se reconoce la opción, ingrese 1 o 2");
            continue;
        }

        let respuesta = prompt("¿Desea continuar? (Sí/No)").toLowerCase();
        if (respuesta !== "si" && respuesta !== "sí") {
            continuar = false;
        }
    }
}

seleccionarMarca();

function Productos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.mostrar = function () {
        console.log(this.nombre + ", " + this.precio);
    }
}

let productos = [
    new Productos("Bolsa Chica",80),
    new Productos("Bolsa Mediana",100),
    new Productos("Bolsa Grande",120)
];

function buscarPorNombre(nombre) {
    return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

console.log("Productos que incluyen 'Bolsa' en el nombre:");
console.log(buscarPorNombre("Bolsa"));
