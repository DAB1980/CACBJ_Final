


const mostrarProvincias = (provincias) => {
  const idprovinciaSocio = document.getElementById('idprovincia')
  
  for (let provincia of provincias) {

    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.value = provincia.id;
    nuevaOpcion.text = provincia.provincia;
    idprovinciaSocio.add(nuevaOpcion);

  }
}

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')

      fetch("/provincias")
      .then(res => res.json())
      .then(res => mostrarProvincias(res))
      .catch(error => console.error(error))      
    
});


