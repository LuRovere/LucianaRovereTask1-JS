let tabla1 = document.getElementById("tabla1")
let tabla2 = document.getElementById("tabla2")
let tabla3 = document.getElementById("tabla3")


fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( respuesta => respuesta.json())
        .then(eventos=>{ 
    let events = eventos.events
    let fechaCurrent = eventos.currentDate
    
//tabla1
    let masAlto = porcentajeMasAlto(events)
    let masBajo = porcentajeMasBajo(events)
    let mayorCapacidad = eventoMayorCapacidad(events)
    renderTable(masAlto.name, masBajo.name,mayorCapacidad.name,tabla1)
//tabla2
    eventosFuturos(events,tabla2,fechaCurrent)
//tabla3
    eventosPasados(events, tabla3,fechaCurrent)
    
})
//-------------primer tabla------------     
function renderTable(dato1,dato2,dato3,contenedor){
    let html = `<tr>
    <td>${dato1}</td>
    <td>${dato2}</td>
    <td>${dato3}</td>
    </tr>`
    contenedor.innerHTML+=html
}      
function porcentajeMasAlto(datos){
    let eventosConAsistencia=datos.filter(element=> element.assistance)
    let porcentajeEventos= eventosConAsistencia.map( element=>{
                let aux = {
            name:element.name,
            percentage: element.assistance / element.capacity * 100
        }
        return aux
        
    })
   
    let porcentajeEventosOrdenado = porcentajeEventos.sort( (a,b)=> a.percentage - b.percentage )
 
        return porcentajeEventosOrdenado.slice(-1)[0]
    }
function porcentajeMasBajo(datos){
    let eventosConAsistencia=datos.filter(element=> element.assistance)
    let porcentajeEventos= eventosConAsistencia.map( element=>{
                let aux = {
            name:element.name,
            percentage: element.assistance / element.capacity * 100
        }
        return aux
            
    })
    let porcentajeEventosOrdenado = porcentajeEventos.sort( (a,b)=> a.percentage - b.percentage )
        return porcentajeEventosOrdenado.slice(0,1)[0]
    }
function eventoMayorCapacidad(datos){
    let eventosCapacidad = datos.map(element =>{
        let aux ={
            name: element.name,
            capacity:element.capacity
        }
        return aux
    })
        let capacidadEventosOrdenados = eventosCapacidad.sort( (a,b) => a.capacity - b.capacity)
        return capacidadEventosOrdenados.slice(-1)[0]

}
//-------------segunda tabla------------
function eventosFuturos(data, contenedor,fecha){
    contenedor.innerHTML = ""
    let lista=""
    let eventosFiltrados = data.filter(events=> events.date > fecha)
    eventosFiltrados.forEach((element) => {
        lista+=`<tr>
        <td>${element.category}</td>
        <td>$${(element.price * element.estimate).toLocaleString()}</td>
        <td>${((element.estimate*100)/ element.capacity).toFixed(2)}%</td>
        </tr>`
    });
        contenedor.innerHTML = lista
}
//-------------tercer tabla------------
function eventosPasados(data, contenedor,fecha){
    contenedor.innerHTML = ""
    let lista=""
    let eventosFiltrados = data.filter(events=> events.date < fecha)
    eventosFiltrados.forEach((element) => {
        lista+=`<tr>
        <td>${element.category}</td>
        <td>$${(element.price * element.assistance).toLocaleString()}</td>
        <td>${((element.assistance*100)/ element.capacity).toFixed(2)}%</td>
        </tr>`
    });
        contenedor.innerHTML = lista
}