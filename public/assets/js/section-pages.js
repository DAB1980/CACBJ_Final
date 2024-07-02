document.addEventListener('DOMContentLoaded', () => {
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
          }
        })
        .catch(error => console.error('Error al cargar el componente:', error));
    }
    // Cargar componentes
    
  loadComponent('header-part', '../html_parts/index-header.html');
    loadComponent('footer-part', '../html_parts/footer.html');
  });

  const addAbmLinks = () => {
    const navbarList = document.getElementById('navbar-list')
    if(localStorage.getItem('rol') === 'administrador'){
      const AbmNoticiasItem = document.createElement('li')
      AbmNoticiasItem.className = 'nav-item'
      const AbmNoticiasLink = document.createElement('a')
      AbmNoticiasLink.className = 'nav-link'
      AbmNoticiasLink.href = '../noticiasABM.html'
      AbmNoticiasLink.textContent = 'ABM Noticias'
      AbmNoticiasItem.appendChild(AbmNoticiasLink)
      navbarList.appendChild(AbmNoticiasItem)
  
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
  }