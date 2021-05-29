document.addEventListener("DOMContentLoaded", function() {
    let pp = document.getElementById('personalplaceholder');
    let textarea = document.getElementById('textarea');

    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault()
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