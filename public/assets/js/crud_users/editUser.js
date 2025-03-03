const updateButton = document.getElementById('update-button')

const mostrarUser = (users) => {

  for (let user of users) {

    const idUser = document.getElementById('id')
   idUser.value=  `${user.id}`

  const nombreUser = document.getElementById('nombre')
  nombreUser.value=  `${user.nombre}`

  const apellidoUser = document.getElementById('apellido')
  apellidoUser.value=  `${user.apellido}`

  const mailUser = document.getElementById('mail')
  mailUser.value=  `${user.mail}`

  const aliasUser = document.getElementById('alias')
  aliasUser.value=  `${user.alias}`

   const iduser_rolUser = document.getElementById('iduser_rol')
   iduser_rolUser .value=  `${user.iduser_rol }`
  }
   
}

document.addEventListener('DOMContentLoaded', function() {
    //fetch('../data/noticias.json')
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id')
      const url = './users/' + id
      //alert(`${url}`)
      fetch(url)
        .then(res => res.json())
        .then(res => mostrarUser(res))
        .catch(err => console.log(err))


});

const modifyButtonHandleClick = (e) => {

  e.preventDefault()

  
  const idUser = document.getElementById('id')
  const nombreUser = document.getElementById('nombre') 
  const apellidoUser = document.getElementById('apellido')
  const mailUser = document.getElementById('mail')
  const aliasUser = document.getElementById('alias')
  const iduser_rolUser = document.getElementById('iduser_rol')
  const passwordUser = document.getElementById('password')

  if (idUser.value.length===0 || 
      nombreUser.value.length===0 ||
      apellidoUser.value.length===0 ||
      mailUser.value.length===0||
      aliasUser.value.length===0 ||
      iduser_rolUser.length === 0 ||
      passwordUser.length === 0
    ) {
        return alert('Uno o más campos no se han completado')
  }

  const body = {
      id: idUser.value,
      nombre: nombreUser.value,
      apellido: apellidoUser.value,
      mail: mailUser.value,
      alias: aliasUser.value,
      iduser_rol: iduser_rolUser.value,
      password:passwordUser.value
  }

  //alert("ACA")
  const url = '/users/' + idUser.value
  
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
      .then(res => window.location.href = "/usersABM.html")
}

updateButton.addEventListener('click', modifyButtonHandleClick)