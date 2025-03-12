window.onload = function(){
    descargarAgentesValorant();

    let botonInitiator = document.querySelector("#initiator");
    botonInitiator.addEventListener("click", mostrarInitiator);

    let botonDuelist = document.querySelector("#duelist");
    botonDuelist.addEventListener("click", mostrarDuelist);

    let botonSentinel = document.querySelector("#sentinel");
    botonSentinel.addEventListener("click", mostrarSentinel);

    let botonController = document.querySelector("#controller");
    botonController.addEventListener("click", mostrarController);

    document.addEventListener('mousedown', daymode);
}

async function descargarAgentesValorant() {
    let urlRespuesta = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&")

    let datos = await urlRespuesta.json();

    let contenedorTarjetasAgentes = document.createElement('div')
    contenedorTarjetasAgentes.classList.add("contenedor")
    let body = document.querySelector("body")

    
    for (let agente of datos.data)
    {
        let tarjeta = document.createElement('div')
        tarjeta.classList.add('tarjeta')

        let nombreAgente = document.createElement('h3');
        nombreAgente.classList.add('nombreAgente')
        nombreAgente.innerHTML = agente.displayName;
        tarjeta.append(nombreAgente)


        let imagen = document.createElement('img');
        imagen.classList.add('imagen')
        imagen.src = agente.displayIcon;
        tarjeta.append(imagen)

        let rol = document.createElement('h4');
        rol.innerHTML = agente.role.displayName
        tarjeta.append(rol)
        
        let descripcion = document.createElement('p');
        descripcion.innerHTML = agente.description
        tarjeta.append(descripcion)
        contenedorTarjetasAgentes.append(tarjeta)

    }
    body.append(contenedorTarjetasAgentes)
}

function mostrarInitiator(){
    let contenedorDescripcion = document.querySelector("#descripcionRol");
    contenedorDescripcion.innerHTML = `Initiators challenge angles by setting up their team to enter contested ground and push defenders away.`;
}

function mostrarDuelist(){
    let contenedorDescripcion = document.querySelector("#descripcionRol");
    contenedorDescripcion.innerHTML = `Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.`;
}

function mostrarSentinel(){
    let contenedorDescripcion = document.querySelector("#descripcionRol");
    contenedorDescripcion.innerHTML = `Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.`;
}

function mostrarController(){
    let contenedorDescripcion = document.querySelector("#descripcionRol");
    contenedorDescripcion.innerHTML = `Controllers are experts in slicing up dangerous territory to set their team up for success.`;
}

function daymode(event){
    if (event.button == 1) {
        document.body.style.backgroundColor = "white";
    }
}
