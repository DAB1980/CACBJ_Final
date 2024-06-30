const mostrarNoticia= (noticias) =>{

    for (let noticia of noticias) {

        document.title=noticia.title

        const fechaNoticia = document.getElementById('fecha_noticia')

        let fecha = noticia.date.substring(0,10)
        let year = fecha.substring(0,4);
        let month= fecha.substring(5,7);
        let day = fecha.substring(8,10);
        let fecha_formateada = `${year}-${month}-${day}`

        fechaNoticia.textContent = `${fecha_formateada} | ${noticia.category}`

        
        const tituloNoticia = document.getElementById('noticia_titulo')
        tituloNoticia.style.display = 'inline'
        tituloNoticia.textContent = noticia.title

        const copeteNoticia = document.getElementById('noticia_copete')
        copeteNoticia.textContent = noticia.subtitle

        const imagenNoticia = document.getElementById('noticia_imagen')
        imagenNoticia.src = noticia.img

        const textoNoticia = document.getElementById('noticia_texto')
        const parrafo = document.createElement('p')
        parrafo.textContent = noticia.content
        textoNoticia.append(parrafo)
        // noticia.content.forEach(item =>{
        //     const parrafo = document.createElement('p')
        //     parrafo.textContent = item
        //     textoNoticia.append(parrafo)
        // })
    }

}


document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = '/noticias/' + id
      
      fetch(url)
        .then(res => res.json())
        .then(data => mostrarNoticia(data))
        .catch(error => console.error(error));
});