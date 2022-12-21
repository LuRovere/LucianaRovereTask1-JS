


fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( respuesta => respuesta.json())
        .then(eventos=>{ 
    let info = eventos.events 
    console.log(info)
    let queryString = location.search
    console.log(queryString)
    let params = new URLSearchParams(queryString)
    console.log(params)
    let id = params.get("id")
    console.log(id)
    let cartas = info.find(carta=>carta._id==id)
    console.log(cartas)
    


    let container = document.getElementById("contenedorDetails")

    container.innerHTML=`<div class="cartaDetails">
    <img src="${cartas.image}" class="imgDetails" >
    </div>
    <div class="ditText">
    <h3>${cartas.name}</h3>
    <p>${cartas.description}</p>
    </div>`
    


})  
        
    .catch( error => console.log(error))







