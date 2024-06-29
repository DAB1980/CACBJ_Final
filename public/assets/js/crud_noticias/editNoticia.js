

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = './noticias/' + id
      //alert(`${url}`)
      fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            const noticia = res

            const idNoticia = document.getElementById('id')
            idNoticia.textContent=  `${noticia.id}`

            const title = document.getElementById('title')
            title.textContent=  `${noticia.title}`

            const subtitle = document.getElementById('subtitle')
            subtitle.textContent=  `${user.subtitle}`

            const date = document.getElementById('date')
            date.textContent=  `${user.date}`

            const category = document.getElementById('category')
            category.textContent=  `${user.category}`

             const content = document.getElementById('content')
            content.textContent=  `${user.content}`
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});