

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
            const user = res

             const idUser = document.getElementById('id')
            idUser.textContent=  `${user.id}`

            const nombreUser = document.getElementById('nombre')
            nombreUser.textContent=  `${user.nombre}`

            const apellidoUser = document.getElementById('apellido')
            apellidoUser.textContent=  `${user.apellido}`

            const mailUser = document.getElementById('mail')
            mailUser.textContent=  `${user.mail}`

            const aliasUser = document.getElementById('alias')
            aliasUser.textContent=  `${user.alias}`

             const perfilUser = document.getElementById('perfil')
            perfilUser.textContent=  `${user.perfil}`
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});