
import { filtrarCartasPorCategoria,filtrarPorBusqueda,renderCategories,renderCards,filtroCrusado} from './module/funciones.js'
let contenedorCategory =document.getElementById("htmlCategory")
let contenedorCards =document.getElementById("contenedorCards");
let inputBusqueda = document.getElementById("inputBusqueda")

let padre = document.getElementById("padre")

fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( respuesta => respuesta.json())
        .then(eventos=>{ 
    let events = eventos.events
    //filtro de categorias sin repetir
    let categories = events.map(function (elemento){ return elemento.category})
    let mySet = new Set(categories)
    let categoriesSinRepetir = Array.from(mySet) 
    //funciones
         renderCards(events, contenedorCards)
         renderCategories(categoriesSinRepetir,contenedorCategory)
    //listeners
padre.addEventListener("change", (e)=>{
    let filtrado = filtroCrusado(events)
    renderCards(filtrado, contenedorCards)
 });
 
 inputBusqueda.addEventListener("input", (e)=>{
     let filtrado = filtroCrusado(events)
     renderCards(filtrado, contenedorCards)
 })
 
        })  
        
        .catch( error => console.log(error))
