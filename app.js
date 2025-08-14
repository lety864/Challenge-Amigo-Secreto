let mensaje1 = "Ingresa un nombre valido";
let mensaje2 = "Lista de nombres vacia";
let elementoUlResultado = "resultado";
let mensaje3 = "El amigo secreto es";
let elementoLi = "nombreListado";
let elementoUl = "listaAmigos";
let elementoInput = "amigo";
let crearElementoLi = "li";
let amigos = [];
let vacio = '';


function obtenerElemento(id){
    let elemento = document.getElementById(id);
    return elemento;
}

function limpiarCaja(){
    return obtenerElemento(elementoInput).value = vacio;
}

function limpiarLista(){
    let lista = obtenerElemento(elementoUl);
    lista.innerHTML = vacio;
    amigos = [];
}


function generarLista(nombres){
    let nuevoElemento = document.createElement(crearElementoLi);
    let mostrarNombres = obtenerElemento(elementoUl);

    amigos.push(nombres);
    nuevoElemento.innerHTML = nombres;
    mostrarNombres.append(nuevoElemento);
}

function agregarAmigo(){
    let nombreUsuario = obtenerElemento(elementoInput).value;

    if(nombreUsuario == vacio){
        alert(mensaje1);
    }else{
        generarLista(nombreUsuario);
        limpiarCaja();
    }
}

function sortearAmigo(){
    let mostrarResultado = obtenerElemento(elementoUlResultado);
    let numRandom = Math.floor(Math.random()*amigos.length);
    let nuevoNombre = obtenerElemento(elementoLi);
    let nombreSorteado = vacio;
    
    if(amigos.length != vacio){

        for(let i=0; i<amigos.length; i++){
            if(numRandom == i){
                nombreSorteado = amigos[i];
            }
        }
        nuevoNombre.textContent = `${mensaje3} ${nombreSorteado}`;
        mostrarResultado.innerHTML.textContent = nuevoNombre;
        limpiarLista();

    }else{
        alert(mensaje2);
    }
}








