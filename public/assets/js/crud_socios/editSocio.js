

const updateButton = document.getElementById('update-button')

const mostrarSocio = (socios) => {

  for (let socio of socios) {

    const idSocio = document.getElementById('id')
    idSocio.value=  `${socio.id}`

     const nombreSocio = document.getElementById('nombre')
     nombreSocio.value=  `${socio.nombre}`

     const apellidoSocio = document.getElementById('apellido')
     apellidoSocio.value=  `${socio.apellido}`

     const mailSocio = document.getElementById('mail')
     mailSocio.value=  `${socio.mail}`

     const fecha_altaSocio = document.getElementById('fecha_alta')
     fecha_altaSocio.value=  `${socio.fecha_alta}`

     const fecha_bajaSocio = document.getElementById('fecha_baja')
     fecha_bajaSocio.value=  `${socio.fecha_baja}`

     const provinciaSocio = document.getElementById('provincia')
     provinciaSocio.value=`${socio.idprovincia}`
                
     const activoSocio = document.getElementById('activo')
    activoSocio.innerHTML = `<option value="0">NO</option>
                             <option value="1">SI</option>`
     const activo=`${socio.activo}`
     
     if (activo ===1 ){
       activoSocio.value="1"
       
     }
     else{
      
      activoSocio.value="0"
    }
  }
   
}



document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      //cargarSelectSocioActivo()
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = '/socios/' + id
      
      fetch(url)
        .then(res => res.json())
        .then(res => mostrarSocio(res))
        .catch(error => console.error(error));
});


const modifyButtonHandleClick = (e) => {
 
  e.preventDefault()

    const idSocio = document.getElementById('id')
    const nombreSocio = document.getElementById('nombre')
    const apellidoSocio = document.getElementById('apellido')
    const mailSocio = document.getElementById('mail')
    const fecha_altaSocio = document.getElementById('fecha_alta')
    const fecha_bajaSocio = document.getElementById('fecha_baja')
    const provinciaSocio = document.getElementById('provincia')
    const activoSocio = document.getElementById('activo')

  if (idSocio.value.length===0 || 
      nombreSocio.value.length===0 ||
      apellidoSocio.value.length===0 ||
      mailSocio.value.length===0||
      fecha_altaSocio.value.length===0 ||
    
      provinciaSocio.value.length ===0 ||
      activoSocio.value.length ===0)
      {
        return alert('Uno o más campos no se han completado')
  }
 
  if (activoSocio.value===0 &&  fecha_bajaSocio.value.length===0 ){
      return alert('Cuando el socio no esta activo, debe completar campo "Fecha Baja"')
  }


  const body = {
      id: idSocio.value,
      nombre: nombreSocio.value,
      apellido: apellidoSocio.value,
      mail: mailSocio.value,
      fecha_alta: fecha_altaSocio.value,
      fecha_baja: fecha_bajaSocio.value,
      activo: activoSocio.value,
      idprovincia: provinciaSocio.value
  }
  console.log(body);
  const url = '/socios/' + idSocio.value
  
  fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
  })
      .then(res => res.json())
      .then(res => errorCheck(res))
      .catch(err => console.log(err))
      .then(res => window.location.href = "/sociosABM.html")
}

updateButton.addEventListener('click', modifyButtonHandleClick)