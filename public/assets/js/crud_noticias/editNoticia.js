

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = './noticias/' + id
      alert(`${url}`)
      fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            const noticia = res

            document.title = noticia.title

            const fechaNoticia = document.getElementById('fecha_noticia')
            fechaNoticia.textContent = `${noticia.date} | ${noticia.category}`

            
            const tituloNoticia = document.getElementById('noticia_titulo')
            tituloNoticia.style.display = 'inline'
            tituloNoticia.textContent = noticia.title

            const copeteNoticia = document.getElementById('noticia_copete')
            copeteNoticia.textContent = noticia.subtitle

            const imagenNoticia = document.getElementById('noticia_imagen')
            imagenNoticia.src = noticia.img

            const textoNoticia = document.getElementById('noticia_texto')
            noticia.content.forEach(item =>{
                const parrafo = document.createElement('p')
                parrafo.textContent = item
                textoNoticia.append(parrafo)
            })
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});