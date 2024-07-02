const form = document.getElementById('login-form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(form);
    const values = {};

    formData.forEach((value, key) => {
        values[key] = value;
    });

    const { mail, password } = values 

    if(!mail || !password){
        return alert("Campos obligatorios incompletos")
    }
    login(values)
})

const login = async(values) => {
    try {
        const response = await fetch('./auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (response.status === 401) {
            alert('Credenciales Incorrectas')
            return;
        } else if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        if (data && data.perfil) {
            sessionStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/';
        } else {
            throw new Error('La respuesta no contiene los datos esperados.');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
}