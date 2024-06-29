

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = './users/' + id
      //alert(`${url}`)
      fetch(url)
        .then(res => res.json())
        .then(res => {
            //console.log(res)
            const socio = res

             const idSocio = document.getElementById('id')
            idSocio.textContent=  `${socio.id}`

            const nombreSocio = document.getElementById('nombre')
            nombreSocio.textContent=  `${socio.nombre}`

            const apellidoSocio = document.getElementById('apellido')
            apellidoSocio.textContent=  `${socio.apellido}`

            const mailSocio = document.getElementById('mail')
            mailSocio.textContent=  `${socio.mail}`

            const fecha_altaSocio = document.getElementById('fecha_alta')
            fecha_altaSocio.textContent=  `${socio.fecha_alta}`

            const fecha_bajaSocio = document.getElementById('fecha_baja')
            fecha_bajaSocio.textContent=  `${socio.fecha_baja}`

            const provinciaSocio = document.getElementById('provincia')
            provinciaSocio.value=`${socio.idprovincia}`
                        
            const activoSocio = document.getElementById('activo')
            const activo=`${socio.activo}`
            if (activo){
              activoSocio.value="TRUE"
            }
            else{
              activoSocio.value="FALSE"
            }
         
        
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});