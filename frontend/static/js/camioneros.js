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

function getCamionero() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/camioneros/${id}`
    console.log(id)

    fetch(url).then(res => { return res.json() }).then(object => {
        console.log(object)
        document.getElementById("dni").value = object.dni
        document.getElementById("nombre").value = object.nombre
        document.getElementById("direccion").value = object.direccion
        document.getElementById("telefono").value = object.telefono
        document.getElementById("salario").value = object.salario
        document.getElementById("residencia").value = object.residencia

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarCamioneros() {
    let url = 'http://localhost:3000/camioneros';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            let camioneros = document.getElementById('camioneros')

            let html = ''
            data.map(camioneros => {
                console.log(camioneros)
                html += `
                    <tr id="${camioneros.dni}"><td>${camioneros.dni}</td>
                        <td class="nombre">${camioneros.nombre}</td>
                        <td class="direccion">${camioneros.direccion}</td>
                        <td class="telefono">${camioneros.telefono}</td>
                        <td class="salario">${camioneros.salario}</td>
                        <td class="residencia">${camioneros.residencia}</td>
                        <td>
                            <a type="button" href="/camioneros/update/${camioneros.dni}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamionero('${camioneros.dni}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })
            camioneros.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}

function crearCamionero() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:3000/camioneros/create'
    const dni = document.getElementById("dni")
    const nombre = document.getElementById("nombre")
    const direccion = document.getElementById("direccion")
    const telefono = document.getElementById("telefono")
    const salario = document.getElementById("salario")
    const residencia = document.getElementById("residencia")

    const data = {
        'dni': dni.value,
        'nombre': nombre.value,
        'direccion': direccion.value,
        'telefono': telefono.value,
        'salario': salario.value,
        'residencia': residencia.value
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camioneros"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarCamionero() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const camionero_dni = getIdFromUrl()
    const url = `http://localhost:3000/camioneros/update/${camionero_dni}`
    const dni = document.getElementById("dni")
    const nombre = document.getElementById("nombre")
    const direccion = document.getElementById("direccion")
    const telefono = document.getElementById("telefono")
    const salario = document.getElementById("salario")
    const residencia = document.getElementById("residencia")

    const data = {
        'dni': dni.value,
        'nombre': nombre.value,
        'direccion': direccion.value,
        'telefono': telefono.value,
        'salario': salario.value,
        'residencia': residencia.value
    }

    console.log(data)

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camioneros"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamionero(dni) {
    const item = document.getElementById(dni)
    const nombre = item.querySelector('.nombre').innerText

    if (confirm(`¿Desea eliminar el camionero "${nombre}"?`)) {
        const url = `http://localhost:3000/camioneros/delete/${dni}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/camioneros"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}