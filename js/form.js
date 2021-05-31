document.addEventListener("DOMContentLoaded", function() {
    let pp = document.getElementById('personalplaceholder');
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');

    let textarea = document.getElementById('textarea');

    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault() // para que no recargue la página
        if (email.value == "") {
            email.classList.add('emptywarning')
            email.placeholder = "Por favor ingrese un email";
        }
        if (surname.value == "") {
            surname.classList.add('emptywarning')
            surname.placeholder = "Por favor ingrese un apellido";
        }
        if (name.value == "") {
            name.classList.add('emptywarning')
            name.placeholder = "Por favor ingrese un nombre";
        }
    });

    textarea.addEventListener('mousedown', () => {
        if (textarea.value == "") {
            pp.classList.remove("ocultar")
        }
    })

    textarea.addEventListener('mouseout', () => {
        if (textarea.value == "") {
            pp.classList.remove("ocultar")
        } else {
            pp.classList.add("ocultar")
        }
    })


})