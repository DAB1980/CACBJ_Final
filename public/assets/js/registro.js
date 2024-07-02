const form = document.getElementById('signup-form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(form);
    const values = {};

    formData.forEach((value, key) => {
        values[key] = value;
    });

    const { nombre, apellido, alias, mail, password, password2 } = values 

    console.log(values)

    if(!nombre || !apellido || !alias || !password ||!mail || !password2){
        return alert("Campos obligatorios incompletos")
    }

    if(password !== password2){
        return alert("Las contraseñas no coinciden")
    }
    register(values)
})

const register = async(values) => {
    try {
        const response = await fetch('./auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (response.status === 409) {
            alert('Email ya registrado')
            return;
        }
        console.log(response)
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/';
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario. Por favor, inténtalo de nuevo.');
    }
}