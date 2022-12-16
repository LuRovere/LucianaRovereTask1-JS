import { filtrarPorBusqueda,renderCategories,renderCards,filtrarCartasPorCategoria} from './module/funciones.js'
let contenedorCategory =document.getElementById("htmlCategory")
let contenedorCards =document.getElementById("contenedorCards");
let inputBusqueda = document.getElementById("inputBusqueda")
let events = data.events

let fechaCurrent = data.currentDate

let filtroEventosPasados=events.filter(fech => fech.date < fechaCurrent );


console.log(filtroEventosPasados)

renderCards(filtroEventosPasados,contenedorCards)


let categories = events.map(function (elemento){ return elemento.category})
let mySet = new Set(categories)
let categoriesSinRepetir = Array.from(mySet) 

renderCategories(categoriesSinRepetir,contenedorCategory)

padre.addEventListener("change", (e)=>{
    let checkbox= document.querySelectorAll('input[type="checkbox"]:checked')
    let categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
   //console.log(categoriasSeleccionadas)
   let filtrados = filtrarCartasPorCategoria(filtroEventosPasados,categoriasSeleccionadas)
   renderCards(filtrados, contenedorCards)
   console.log(filtrados)
   

inputBusqueda.addEventListener("input", (e)=>{
        let filtradosPorBusqueda = filtrarPorBusqueda(filtrados,inputBusqueda.value)
        renderCards(filtradosPorBusqueda, contenedorCards)
    })

});