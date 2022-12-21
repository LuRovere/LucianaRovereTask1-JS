export function filtrarCartasPorCategoria (datos, categorias){
    if (categorias.length === 0){
        return datos
    }
   return datos.filter(carta=> categorias.includes(carta.category) )
}

export function filtrarPorBusqueda(datos, valueSearch){
  return  datos.filter(dato=>dato.name.toLowerCase().includes(valueSearch.toLowerCase()))
}
export function renderCategories(categorias ,contenedor){ 
    let opcionesCategorias = ""   
    categorias.forEach(categoria => {
        opcionesCategorias+= `<div class="form-check">
        <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">
        <label class="form-check-label" for=${categoria}>
        ${categoria}
        </label>
    </div>`
        
    })
    console.log(opcionesCategorias)
    contenedor.innerHTML += opcionesCategorias
};
export function renderCards(datos ,contenedor){ 
    contenedor.innerHTML = ""
    let cartasString = ""   
    datos.forEach(carta => {
        cartasString+= `
        <div class="carta">
        <div class="col"><div class="card" style="width: 18rem;">
        <img src="${carta.image}" class="card-img-top" style="height: 12rem ;" alt="cine">
        <div class="card-body">
        <h5 class="card-title">${carta.name}</h5>
        <p class="card-text">${carta.description}</p>
        <div class="price-img">
        <p>$${carta.price}</p>
        <a href="./details.html?id=${carta._id}" class="btn btn-danger">
        See more</a>
        </div>
        </div>
        </div></div>
        </div>`
        
    })
    contenedor.innerHTML = cartasString
};
export function filtroCrusado (data){
    let checkbox= document.querySelectorAll('input[type="checkbox"]:checked')
    let categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
   let filtrados = filtrarCartasPorCategoria(data,categoriasSeleccionadas)
   let filtradosPorBusqueda = filtrarPorBusqueda(filtrados,inputBusqueda.value)
   return filtradosPorBusqueda
}
 

