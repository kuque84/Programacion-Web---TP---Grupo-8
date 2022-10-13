// Auxiliares

function disableButton(id) {
    const button = document.getElementById(id)
    button.className = button.className + " disabled"
    button.setAttribute('disabled', 'disabled')
    button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
}

function getIdFromUrl() {
    const route = new URL(window.location).pathname
    const pathArray = route.split('/')
    return pathArray[pathArray.length -1]
}

// CRUD

function getPaquete() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/paquetes/${id}`
    console.log(id)

    fetch(url).then(res => { return res.json() }).then(object => {
        console.log(object)
        document.getElementById("codigoPaquete").value = object.codigoPaquete
        document.getElementById("descripcion").value = object.descripcion
        document.getElementById("direccionDestinatario").value = object.direccionDestinatario
        document.getElementById("destinatario").value = object.destinatario

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarPaquetes() {
    let url = 'http://localhost:3000/paquetes';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let paquetes = document.getElementById('paquetes')
            let html = ''
            data.map(paquete => {
                console.log(paquete)
                html += `
                    <tr id="${paquete.codigoPaquete}"><td>${paquete.codigoPaquete}</td>
                        <td class="descripcion">${paquete.descripcion}</td>
                        <td class="destinatario">${paquete.destinatario}</td>
                        <td class="direccionDestinatario">${paquete.direccionDestinatario}</td>
                        <td>
                            <a type="button" href="/paquetes/update/${paquete.codigoPaquete}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarPaquete('${paquete.codigoPaquete}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })
            paquetes.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}

function crearPaquete() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:3000/paquetes/create'
    const codigoPaquete = document.getElementById("codigoPaquete")
    const descripcion = document.getElementById("descripcion")
    const direccionDestinatario = document.getElementById("direccionDestinatario")
    const destinatario = document.getElementById("destinatario")


    const data = {
        'codigoPaquete': codigoPaquete.value,
        'descripcion': descripcion.value,
        'direccionDestinatario': direccionDestinatario.value,
        'destinatario': destinatario.value,
    }
    

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/paquetes"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })

}
function editarPaquete() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const cp = getIdFromUrl()
    const url = `http://localhost:3000/paquetes/update/${cp}`
    const codigoPaquete = document.getElementById("codigoPaquete")
    const descripcion = document.getElementById("descripcion")
    const direccionDestinatario = document.getElementById("direccionDestinatario")
    const destinatario = document.getElementById("destinatario")

    const data = {
        'codigoPaquete': codigoPaquete.value,
        'descripcion': descripcion.value,
        'direccionDestinatario': direccionDestinatario.value,
        'destinatario': destinatario.value,
    }

    console.log(data)

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/paquetes"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarPaquete(codigoPaquete) {
    const item = document.getElementById(codigoPaquete)
    const destinatario = item.querySelector('.destinatario').innerText

    if (confirm(`¿Desea eliminar el producto " codigo ${codigoPaquete}"?`)) {
        const url = `http://localhost:3000/paquetes/delete/${codigoPaquete}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/paquetes"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}