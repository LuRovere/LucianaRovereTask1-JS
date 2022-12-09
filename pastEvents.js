function filtroEventosPasados(eventos){
    return eventos.filter(evento => filtroIndividual2(evento.date));
}


function filtroIndividual2(fecha){
    let anio = fecha.slice(0,4);
    if (anio<2022){
        return true;
    }else{
        return false;
    };
    
}




let contenedor =document.getElementById("contenedor");
let contador=0;
let contadorDeFilas=0;

for(let event of filtroEventosPasados(data.events))
    { 
    if (contador===0)
        {
            contenedor.innerHTML+=`<div id="fila${contadorDeFilas}" class="row"></div>`;
        }
    let elementoDeFila=document.getElementById(`fila${contadorDeFilas}`);

    elementoDeFila.innerHTML+=`<div class="col"><div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" style="height: 12rem ;" alt="cine">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <div class="price-img">
    <p>${event.price}</p>
    <a href="./details.html" class="btn btn-danger">Ver Mas</a>
    </div>
    </div>
    </div></div>`;
    if (contador===3)
        {
            contadorDeFilas++;
            contador=0;
        }
    else {
        contador++;
        }
    }

