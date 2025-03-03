
// Document.addEventListener('DOMContentLoaded', function() {
//     console.log("aca")
//     getNews();
//     //.catch(error => console.error('Error al cargar el JSON:', error));
// });        



const sociosTable = document.getElementById('tablaSocios')




const template = (elem) => `
    <td class="text-center" class=v-align-middle">${elem.id}</td>
    <td class="text-center" class=v-align-middle>${elem.nombre}</td>
    <td class="text-center" class=v-align-middle>${elem.apellido}</td>
    <td class="text-center" class=v-align-middle>${elem.mail}</td>
    <td class="text-center" class=v-align-middle>${elem.provincia}</td>
    <td class="text-center"class=v-align-middle>${elem.activo}</td>
    <td class="text-center"class=v-align-middle>${elem.fecha_alta}</td>
    <td class="text-center" class=v-align-middle>${elem.fecha_baja}</td>
    <td class="text-center" class=v-align-middle>
       <form id="acciones">        
             <a href="./socioEdit.html?id=${elem.id}" id="boton_crear" class="btn btn-warning">Editar</a>
            <button class="btn btn-danger" onclick="Borrar(${elem.id})">Borrar</button>
        </form>  
        
    </td>  
`

const showSocios = (socios) => {
    for (let socio of socios) {
      const tr = document.createElement('tr')
     
      socio.fecha_alta= socio.fecha_alta.substring(0,10)
     
      if (socio.fecha_baja.startsWith("1899-11-30")){
        socio.fecha_baja=""
      }
      else
      {
         socio.fecha_baja= socio.fecha_baja.substring(0,10)
      }

      
      if (socio.activo===0){
        socio.activo="NO"
      }
      else{
        socio.activo="SI"
        
      }


     
      tr.innerHTML = template(socio)
      sociosTable.append(tr)
    }
  } 
  
  fetch('./sociosABM')
  .then(res => res.json())
  .then(res => showSocios(res))
  .catch(err => console.log(err))


//   const getNews = () =>{
//     console.log("aca")
//     fetch('./noticias')
//     .then(res => res.json())
//     .then(res => showNoticias(res))
//     .catch(err => console.log(err))
//     //.catch(error => console.error('Error al cargar el JSON:', error));
// };        



function Borrar (id) {

  //alert(`hay id=${id}`)
  if (confirm(`Seguro que quiere eliminar el socio ID ${id}`))
  {
    const url = '/socios/' + id

    fetch(url, { method: "DELETE" })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => console.log(err))
  }
  
}
