

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
        document.getElementById("codigo").value = object.codigo 
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
                    <tr id="${provincias.codigo}"><td>${provincias.codigo}</td>
                        <td class="nombre">${provincias.nombre}</td>
                        </td>
                        <td>
                            <a type="button" href="/camioneros/update/${provincias.codigo}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamionero('${provincias.codigo}')"><i class="bi bi-trash3-fill text-danger"></i></button>
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
    const codigo = document.getElementById("codigo")
    const nombre = document.getElementById("nombre")
    
    const data = {
        'codigo': codigo.value,
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
    const camionero_dni = getIdFromUrl()
    const url = `http://localhost:3000/provincias/update/${provincia.codigoProvincia}`
    const codigo = document.getElementById("codigoProvincia")
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

    if (confirm(`¿Desea eliminar la provincia "${codigoProvincia}"?`)) {
        const url = `http://localhost:3000/provincias/delete/${id}`

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