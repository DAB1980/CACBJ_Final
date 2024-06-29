
// Document.addEventListener('DOMContentLoaded', function() {
//     console.log("aca")
//     getNews();
//     //.catch(error => console.error('Error al cargar el JSON:', error));
// });        



const noticiasTable = document.getElementById('tablaNoticias')

const template = (elem) => `
    <td class=v-align-middle>${elem.id}</td>
    <td class=v-align-middle>${elem.title}</td>
    <td class=v-align-middle>${elem.category}</td>
    <td class=v-align-middle>${elem.date}</td>
    <td class=v-align-middle><img src=${elem.img} class=img-fluid style=max-width:50px></td>
    <td class=v-align-middle>
       <form id="acciones">        
             <a href="./noticia.html?id=${elem.id}" id="boton_crear" class="btn btn-primary">Ver</a>
             <a href="./noticiaEdit.html?id=${elem.id}" id="boton_crear" class="btn btn-dark">Editar</a>
            <button class="btn btn-danger" onclick="Borrar(${elem.id})">Borrar</button>
        </form>  
        
    </td>  
`

const showNoticias = (noticias) => {
    console.log(noticias)
    for (let noticia of noticias) {
      const tr = document.createElement('tr')
      tr.innerHTML = template(noticia)
      noticiasTable.append(tr)
    }
  } 
  
  fetch('./noticias')
  .then(res => res.json())
  .then(res => showNoticias(res))
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
  if (confirm(`Seguro que quiere eliminar la noticia ID ${id}`))
  {
    const url = '/noticias/' + id

    fetch(url, { method: "DELETE" })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => console.log(err))
  }
  
}
