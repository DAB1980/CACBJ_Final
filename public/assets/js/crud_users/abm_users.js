
// Document.addEventListener('DOMContentLoaded', function() {
//     console.log("aca")
//     getNews();
//     //.catch(error => console.error('Error al cargar el JSON:', error));
// });        



const usersTable = document.getElementById('tablaUsuarios')

const template = (elem) => `
    <td class="text-center" class=v-align-middle>${elem.id}</td>
    <td class="text-center" class=v-align-middle>${elem.nombre}</td>
    <td class="text-center" class=v-align-middle>${elem.apellido}</td>
    <td class="text-center" class=v-align-middle>${elem.mail}</td>
    <td class="text-center" class=v-align-middle>${elem.alias}</td>
    <td class="text-center" class=v-align-middle>${elem.perfil}</td>
    <td class="text-center" class=v-align-middle>
       <form id="acciones">        
             <a href="./userEdit.html?id=${elem.id}" id="boton_crear" class="btn btn-warning">Editar</a>
            <button class="btn btn-danger" onclick="Borrar(${elem.id})">Borrar</button>
        </form>  
        
    </td>  
`

const showUsers = (users) => {
    
    for (let user of users) {
      const tr = document.createElement('tr')
      tr.innerHTML = template(user)
      usersTable.append(tr)
    }
  } 
  
  fetch('./users')
  .then(res => res.json())
  .then(res => showUsers(res))
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
  if (confirm(`Seguro que quiere eliminar el usuario ID ${id}`))
  {
    const url = '/users/' + id

    fetch(url, { method: "DELETE" })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => console.log(err))
  }
  
}
