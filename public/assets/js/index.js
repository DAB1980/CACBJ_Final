const userInfo = JSON.parse(sessionStorage.getItem('user'))

document.addEventListener('DOMContentLoaded', () => {
  // Cargar componentes
  loadComponent('header-part', '../html_parts/index-header.html');
  loadComponent('footer-part', '../html_parts/footer.html');

  //Cargar últimas noticias
  getLastNews()
  
});

  // Función para cargar componentes
const loadComponent = (elementId, filePath) => {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Problema de red');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .then(() => {
      if(elementId === 'header-part'){
        addAbmLinks()
        displayWelcome()
      }
    })
    .catch(error => console.error('Error al cargar el componente:', error));
}

const addAbmLinks = () => {
  const navbarList = document.getElementById('navbar-list')

  if(userInfo?.perfil === 'admin' || userInfo?.perfil === 'editor'){
    const AbmNoticiasItem = document.createElement('li')
    AbmNoticiasItem.className = 'nav-item'
    const AbmNoticiasLink = document.createElement('a')
    AbmNoticiasLink.className = 'nav-link'
    AbmNoticiasLink.href = '../noticiasABM.html'
    AbmNoticiasLink.textContent = 'ABM Noticias'
    AbmNoticiasItem.appendChild(AbmNoticiasLink)
    navbarList.appendChild(AbmNoticiasItem)
  }

  if(userInfo?.perfil === 'admin'){
    const AbmUsuariosItem = document.createElement('li')
    AbmUsuariosItem.className = 'nav-item'
    const AbmUsuariosLink = document.createElement('a')
    AbmUsuariosLink.className = 'nav-link'
    AbmUsuariosLink.href = '../usersABM.html'
    AbmUsuariosLink.textContent = 'ABM Usuarios'
    AbmUsuariosItem.appendChild(AbmUsuariosLink)
    navbarList.appendChild(AbmUsuariosItem)

    const AbmSociosItem = document.createElement('li')
    AbmSociosItem.className = 'nav-item'
    const AbmSociosLink = document.createElement('a')
    AbmSociosLink.className = 'nav-link'
    AbmSociosLink.href = '../sociosABM.html'
    AbmSociosLink.textContent = 'ABM Socios'
    AbmSociosItem.appendChild(AbmSociosLink)
    navbarList.appendChild(AbmSociosItem)
  }

  if(userInfo){
    const logoutBtn = document.createElement('button')
    logoutBtn.id = 'logout-button'
    logoutBtn.textContent = 'Salir'
    logoutBtn.addEventListener('click', logout)
    navbarList.after(logoutBtn)
  }else{
    const loginButton = document.createElement('button')
    const loginLink = document.createElement('a')
    loginLink.href = '/iniciar_sesion.html'
    loginLink.classList = 'nav-link'
    loginLink.textContent = 'Ingresar'
    loginButton.appendChild(loginLink)
    navbarList.after(loginButton)
  }
}

const logout = () => {
  sessionStorage.removeItem('user')
  window.location.href = '/'
}

const getLastNews = () =>{
  fetch('./noticias')
  .then(res => res.json())
     .then(data => {
        const parNoticias = data.slice(0, 2)
        const noticiasIndex = document.getElementById('noticias_index')
        parNoticias.forEach(element => {
          const itemNoticiasIndex = document.createElement('a')
          itemNoticiasIndex.href = `./html_noticias/noticia.html?id=${element.id}`;

          itemNoticiasIndex.className = 'item_noticias_index'

          const itemNoticiaImg = document.createElement('div')
          itemNoticiaImg.className = 'item_noticia_img'

          const imagenNoticia = document.createElement('img')
          imagenNoticia.className = 'imagen_noticia'
          imagenNoticia.src = element.img
          itemNoticiaImg.appendChild(imagenNoticia)
          itemNoticiasIndex.appendChild(itemNoticiaImg)
          
          const itemNoticiaTitulo = document.createElement('div')
          itemNoticiaTitulo.className = 'item_noticia_titulo'
          itemNoticiaTitulo.textContent = element.title
          itemNoticiasIndex.appendChild(itemNoticiaTitulo)

          const itemNoticiaCopete = document.createElement('div')
          itemNoticiaCopete.className = 'item_noticia_copete'
          itemNoticiaCopete.textContent = element.subtitle
          itemNoticiasIndex.appendChild(itemNoticiaCopete)
          
          
          
          noticiasIndex.appendChild(itemNoticiasIndex)
        });
    })
    .catch(err => console.log(err))
    //.catch(error => console.error('Error al cargar el JSON:', error));
}

const displayWelcome = () => {
  if(userInfo){
    const imgHeader = document.querySelector('.img_header')
    const welcomeTag = document.createElement('span')
    welcomeTag.className = 'welcome-tag'
    welcomeTag.textContent = `Hola de nuevo ${userInfo.nombre}`
    imgHeader.after(welcomeTag)
  }
}