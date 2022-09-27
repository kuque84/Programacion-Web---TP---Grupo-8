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

function getCamion() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/camiones/${id}`
    console.log(id)

    fetch(url).then(res => { return res.json() }).then(object => {
        console.log(object)
        document.getElementById("matricula").value = object.matricula
        document.getElementById("modelo").value = object.modelo
        document.getElementById("tipo").value = object.tipo
        document.getElementById("potencia").value = object.potencia

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarCamiones() {
    let url = 'http://localhost:3000/camiones';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            let camiones = document.getElementById('camiones')

            let html = ''
            data.map(camiones => {
                console.log(camiones)
                html += `
                    <tr id="${camiones.matricula}"><td>${camiones.matricula}</td>
                        <td class="modelo">${camiones.modelo}</td>
                        <td class="tipo">${camiones.tipo}</td>
                        <td class="potencia">${camiones.potencia}</td>
                        <td>
                            <a type="button" href="/camiones/update/${camiones.matricula}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamion('${camiones.matricula}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })
            camiones.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}

function crearCamion() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:3000/camiones/create'
    const matricula = document.getElementById("matricula")
    const modelo = document.getElementById("modelo")
    const tipo = document.getElementById("tipo")
    const potencia = document.getElementById("potencia")

    const data = {
        'matricula': matricula.value,
        'modelo': modelo.value,
        'tipo': tipo.value,
        'potencia': potencia.value
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camiones"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarCamion() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const camion_matricula = getIdFromUrl()
    const url = `http://localhost:3000/camiones/update/${camion_matricula}`
    const matricula = document.getElementById("matricula")
    const modelo = document.getElementById("modelo")
    const tipo = document.getElementById("tipo")
    const potencia = document.getElementById("potencia")

    const data = {
        'matricula': matricula.value,
        'modelo': modelo.value,
        'tipo': tipo.value,
        'potencia': potencia.value
    }

    console.log(data)

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camiones"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamion(matricula) {
    const item = document.getElementById(matricula)
    const modelo = item.querySelector('.modelo').innerText

    if (confirm(`¿Desea eliminar el camion "${modelo} matrícula ${matricula}"?`)) {
        const url = `http://localhost:3000/camiones/delete/${matricula}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/camiones"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}