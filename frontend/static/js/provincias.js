

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

function getProvincia() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/provincias/${id}`
    console.log(id)

    fetch(url).then(res => { return res.json() }).then(object => {
        console.log(object)
        document.getElementById("codigoProvincia").value = object.codigoProvincia 
        document.getElementById("nombre").value = object.nombre
        
        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarProvincias() {
    let url = 'http://localhost:3000/provincias';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            let provincias = document.getElementById('provincias')

            let html = ''
            data.map(provincias => {
                console.log(provincias)
                html += `
                    <tr id="${provincias.codigoProvincia}"><td>${provincias.codigoProvincia}</td>
                        <td class="nombre">${provincias.nombre}</td>
                        </td>
                        <td>
                            <a type="button" href="/provincias/update/${provincias.codigoProvincia}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarProvincia('${provincias.codigoProvincia}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })
            provincias.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}

function crearProvincia() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:3000/provincias/create'
    const codigoProvincia = document.getElementById("codigoProvincia")
    const nombre = document.getElementById("nombre")
    
    const data = {
        'codigoProvincia': codigoProvincia.value,
        'nombre': nombre.value,
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/provincias"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarProvincia() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const codigoProvincia = getIdFromUrl()
    const url = `http://localhost:3000/provincias/update/${codigoProvincia}`
    const nombre = document.getElementById("nombre")

    const data = {
        'codigoProvincia': codigoProvincia.value,
        'nombre': nombre.value,
        
    }

    console.log(data)

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/provincias"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarProvincia(codigoProvincia) {
    const item = document.getElementById(codigoProvincia)
    const nombre = item.querySelector('.nombre').innerText

    if (confirm(`¿Desea eliminar la provincia "${codigoProvincia}, ${nombre}"?`)) {
        const url = `http://localhost:3000/provincias/delete/${codigoProvincia}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/provincias"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}