const form = document.getElementById('form_new_noticia')


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(form);
    const values = {};
    

    formData.forEach((value, key) => {
        values[key] = value;
    });
  
    const { title, subtitle, category, date, content, image } = values 
   
    if(!title || !subtitle || !category || !date || !content || !image){
        return alert("Campos obligatorios incompletos")
    }
    
    const body = {
        title: title,
        subtitle: subtitle,
        date: date,
        category: category,
        content: content,
           }

    const url = "./noticias"

    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        enctype: "multipart/form-data",
        image: formData.image
       })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => alert(err))
        
    window.location.href = "/noticiasABM.html";
})

