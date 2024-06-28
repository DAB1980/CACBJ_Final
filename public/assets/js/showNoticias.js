const noticiasContainer = document.getElementById('noticias-container')



const template = (data) => `
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src='${data.img}' class="w-50" alt="card-horizontal-image">
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.content}</p>
        <p class="card-text"><small class="text-muted">Código: ${data.id} - Fecha: ${data.date} </small></p>
      </div>
    </div>
  </div>`



const showNoticias = (noticias) => {
  //console.log(noticias)
  for (let noticia of noticias) {
    const div = document.createElement('div')
    div.className = 'card my-2'
    
    div.innerHTML = template(noticia)
    noticiasContainer.append(div)
  }
}

fetch('./noticias')
  .then(res => res.json())
  .then(res => showNoticias(res))
  .catch(err => console.log(err))