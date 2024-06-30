const updateButton = document.getElementById('update-button')


const mostrarNoticia = (noticias) => {

  for (let noticia of noticias) {

    const idNoticia = document.getElementById('id')
    idNoticia.value=  `${noticia.id}`

    const title = document.getElementById('title')
    title.value=  `${noticia.title}`

    const subtitle = document.getElementById('subtitle')
    subtitle.value=  `${noticia.subtitle}`

    let fecha = noticia.date.substring(0,10)
    let year = fecha.substring(0,4);
    let month= fecha.substring(5,7);
    let day = fecha.substring(8,10);
    let fecha_formateada = `${year}-${month}-${day}`
    const inputfecha = document.getElementById('date')
    inputfecha.value=  fecha_formateada

    const category = document.getElementById('category')
    category.value=  `${noticia.category}`

    const content = document.getElementById('content')
    content.value=  `${noticia.content}`
  }
}

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = './noticias/' + id
      //alert(`${url}`)
      fetch(url)
        .then(res => res.json())
        .then(res => mostrarNoticia(res))
        .catch(err => console.log(err))
});

const modifyButtonHandleClick = (e) => {
  //console.log("EStOY")
  e.preventDefault()

  
  const id = document.getElementById('id')
  const title = document.getElementById('title') 
  const subtitle = document.getElementById('subtitle')
  const category = document.getElementById('category')
  const date = document.getElementById('date')
  const content = document.getElementById('content')

  if (id.length===0 || 
      title.value.length===0 ||
      subtitle.value.length===0 ||
      category.value.length===0||
      date.value.length===0 ||
      content.value ===0){
        return alert('Uno o más campos no se han completado')
  }

  const body = {
      id: id.value,
      title: title.value,
      subtitle: subtitle.value,
      date: date.value,
      category: category.value,
      content: content.value
  }

  const url = '/noticias/' + id.value
  
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
      .then(res => window.location.href = "/noticiasABM.html")
}

updateButton.addEventListener('click', modifyButtonHandleClick)