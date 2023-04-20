//1. Fetch API para consumir datos desde un txt...

const btnloadTxt = document.querySelector('#loadTxt')
btnloadTxt.addEventListener('click' , getData)

function getData() {
    const url = "data/data.txt"
    fetch(url)
        .then((response)=>{
            console.log(response);
            return response.text();
        })
        .then((datos)=>{
            console.log(datos);
            printData(datos);
        })
        .catch((irror)=>{
            console.log(irror);
        })
}

function printData(datos) {
    clear()
    const pp = document.querySelector('#contenido')
    pp.innerHTML = `
    <p>${datos}</p>
    `
}
//2. Fetch API para consumir un JSON (Objeto)

const btnLoadJSON = document.querySelector('#loadJSON')
btnLoadJSON.addEventListener('click' , getCamper )

function getCamper () {
    const url = "data/camper.json"
    fetch (url)
        .then((respuesta)=>{
            console.log(respuesta);
            return respuesta.json();
            
        })
        .then((data)=>{
            console.log(data);
            printCamper(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

function printCamper({id , nombre , ingles , telefono}) {
    clear();
    const pp = document.querySelector('#contenido')
    pp.innerHTML = `
        <p>${nombre}</p>
        <p>${telefono}</p>
        <p>${ingles}</p>
        <p>${id}</p>
    `
}

//3. Fetch API para consumir datos de un JSON (Array)

const loadJSONArray = document.querySelector('#loadJSONArray')
loadJSONArray.addEventListener('click' , gotCamper )

function gotCamper () {
    const url = "data/tribus.json"
    fetch (url)
        .then((respuesta)=>{
            console.log(respuesta);
            return respuesta.json();
        })
        .then((dataArray)=>{
            console.log(dataArray);
            imprimirObjeto(dataArray);
        })
        .catch((error)=>{
            console.log(error);
        })
}

function imprimirObjeto(tribus) {
    clear();
    tribus.forEach(tribu => {
        const {nombreTribu ,lider , cantidadPuntos , id} = tribu
        console.log(tribu);
        const contenido = document.querySelector('#contenido')
        const div = document.createElement('div')
        div.innerHTML = `
        <div id = "paBorrar">
            <p>-------------------------------------------------------------</p>
            <p>${nombreTribu}</p>
            <p>${lider}</p>
            <p>${cantidadPuntos}</p>
            <p>${id}</p>
            <p>-------------------------------------------------------------</p>
        </div>
    `
    contenido.appendChild(div)
    console.log(contenido);
    });
    
}

function clear() {
    const limpiecito = document.querySelectorAll('#paBorrar')
    for (let a = 0; a < limpiecito.length; a++) {
        limpiecito[a].remove();
        
    }
}

//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)

const loadAPI = document.querySelector('#loadAPI')
loadAPI.addEventListener('click' , getAPI)

function getAPI() {
    const url = "https://picsum.photos/v2/list"
    fetch (url)
    .then((responsi)=>{
        console.log(responsi);
        return responsi.json()
    })
    .then((imagenes)=>{
        imprimirImagenes(imagenes)
    })
    .catch((error)=>{
        console.log(error);
    })
}

function imprimirImagenes(imagenes) {
    imagenes.forEach(imagen =>{
        const {download_url , author , id} = imagen
            const contenedor = document.querySelector('#cardBoostrap')
            const texto = document.createElement('p')
            texto.innerHTML = `
            <div class="card text-bg-dark">
                <img src="${download_url}" class="card-img" width="280px" height ="200px" alt="...">
                <p>Autor="${author}"</p>
                <p>${id}<p>
            </div>
            `

            contenedor.appendChild(texto)    
    })
    otroBorrar();
}

function otroBorrar() {
    const limpiecito = document.querySelector('#cardBoostrap')
    for (let a = 0; a < limpiecito.length; a++) {
        limpiecito[a].remove();
        
    }
}