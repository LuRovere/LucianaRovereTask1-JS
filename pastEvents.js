import { filtrarPorBusqueda,renderCategories,renderCards,filtrarCartasPorCategoria} from './module/funciones.js'
let contenedorCategory =document.getElementById("htmlCategory")
let contenedorCards =document.getElementById("contenedorCards");
let inputBusqueda = document.getElementById("inputBusqueda")



fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( respuesta => respuesta.json())
        .then(eventos=>{ 
    let events = eventos.events
    let fechaCurrent = eventos.currentDate
let filtroEventosPasados=events.filter(fech => fech.date < fechaCurrent );
//filtro categorias sin repetir
let categories = events.map(function (elemento){ return elemento.category})
let mySet = new Set(categories)
let categoriesSinRepetir = Array.from(mySet) 
//funciones
renderCards(filtroEventosPasados,contenedorCards)
renderCategories(categoriesSinRepetir,contenedorCategory)
function filtroCrusadoPast (){
    let checkbox= document.querySelectorAll('input[type="checkbox"]:checked')
    let categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
    let filtrados = filtrarCartasPorCategoria(filtroEventosPasados,categoriasSeleccionadas)
    let filtradosPorBusqueda = filtrarPorBusqueda(filtrados,inputBusqueda.value)
    return filtradosPorBusqueda
}
//listeners
padre.addEventListener("change", (e)=>{
   let filtrados =filtroCrusadoPast ()
   renderCards(filtrados, contenedorCards)

});

inputBusqueda.addEventListener("input", (e)=>{
    let filtradosPorBusqueda =filtroCrusadoPast ()
    renderCards(filtradosPorBusqueda, contenedorCards)
})
})  
        
.catch( error => console.log(error))

