
import { filtrarCartasPorCategoria,filtrarPorBusqueda,renderCategories,renderCards} from './module/funciones.js'
let contenedorCategory =document.getElementById("htmlCategory")
let contenedorCards =document.getElementById("contenedorCards");
let inputBusqueda = document.getElementById("inputBusqueda")
let events = data.events
let padre = document.getElementById("padre")

renderCards(events, contenedorCards)



let categories = events.map(function (elemento){ return elemento.category})
let mySet = new Set(categories)
let categoriesSinRepetir = Array.from(mySet) 

//console.log(categoriesSinRepetir)


renderCategories(categoriesSinRepetir,contenedorCategory)

padre.addEventListener("change", (e)=>{
    let checkbox= document.querySelectorAll('input[type="checkbox"]:checked')
    let categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
   let filtrados = filtrarCartasPorCategoria(events,categoriasSeleccionadas)
   renderCards(filtrados, contenedorCards)


   
inputBusqueda.addEventListener("input", (e)=>{
        let filtradosPorBusqueda = filtrarPorBusqueda(filtrados,inputBusqueda.value)
        renderCards(filtradosPorBusqueda, contenedorCards)
    })

});