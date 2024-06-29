const updateButton = document.getElementById('update-button')

const updInputId = document.getElementById('update-id')
const updInputTitle = document.getElementById('update-title')
const updInputSubtitle = document.getElementById('update-subtitle')
const updInputDate = document.getElementById('update-date')
const updInputCategory = document.getElementById('update-category')
const updInputContent = document.getElementById('update-content')


const modifyButtonHandleClick = (e) => {

    e.preventDefault()

    if (updInputId.value.length === 0 ||
        updInputTitle.value.length == 0 ||
        updInputSubtitle.value.length === 0 ||
        updInputDate.value.length === 0 ||
        updInputCategory.value.length === 0 ||
        updInputContent.value.length === 0) {

        return alert('Uno o más campos no se han completado')
    }

    const body = {
        title: updInputTitle.value,
        subtitle: updInputSubtitle.value,
        date: updInputDate.value,
        category: updInputCategory.value,
        content: updInputContent.value,
        
    }

    const url = '/noticias/' + updInputId.value

    fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => alert(err))
}



updateButton.addEventListener('click', modifyButtonHandleClick)