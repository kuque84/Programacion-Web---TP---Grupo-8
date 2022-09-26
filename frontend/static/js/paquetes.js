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
        document.getElementById("codigo").value = object.codigo
        document.getElementById("descripcion").value = object.descripcion
        document.getElementById("direcciondestinatario").value = object.direcciondestinatario
        document.getElementById("dnicamionero").value = object.dnicamionero
        document.getElementById("codigo_provincia").value = object.codigo_provincia

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarPaquetes() {
    let url = 'http://localhost:3000/paquetes';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            let paquetes = document.getElementById('paquetes')

            let html = ''
            data.map(paqutes => {
                console.log(paqutes)
                html += `
                    <tr id="${paquetes.codigo}"><td>${paquetes.codigo}</td>
                        <td class="descripcion">${paquetes.descripcion}</td>
                        <td class="direcciondestinatario">${paquetes.irecciondestinatario}</td>
                        <td class="dnicamionero">${paquetes.dnicamionero}</td>
                        <td class="codigo_provincia">${paquetes.codigo_provincia}</td>
                        <td>
                            <a type="button" href="/paquetes/update/${paquetes.codigo}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarPaquete('${paquetes.matricula}')"><i class="bi bi-trash3-fill text-danger"></i></button>
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
    const codigo = document.getElementById("codigo")
    const descripcion = document.getElementById("descripcion")
    const direcciondestinatario = document.getElementById("direcciondestinatario")
    const dnicamionero = document.getElementById("dnicamionero")
    const codigo_provincia = document.getElementById("codigo_provincia")


    const data = {
        'codigo': codigo.value,
        'descripcion': descripcion.value,
        'direcciondestinatario': direcciondestinatario.value,
        'dnicamionero': dnicamionero.value,
        'codigo_provincia': codigo_provincia.value
    }
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


function editarPäquete() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const paquete_codigo = getIdFromUrl()
    const url = `http://localhost:3000/paquete/update/${paqute_codigo}`
    const codigo = document.getElementById("codigo")
    const descripcion = document.getElementById("descripcion")
    const direcciondestinatario = document.getElementById("direcciondestinatario")
    const dnicamionero = document.getElementById("dnicamionero")
    const codigo_provincia = document.getElementById("codigo_provincia")

    const data = {
        'codigo': codigo.value,
        'descripcion': descripcion.value,
        'direcciondestinatario': direcciondestinatario.value,
        'dnicamionero': dnicamionero.value,
        'codigo_provincia': codigo_provincia.value
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

function eliminarPaquete(codigo) {
    const item = document.getElementById(codigo)
    const modelo = item.querySelector('.modelo').innerText

    if (confirm(`¿Desea eliminar el producto "${modelo} codigo ${codigo}"?`)) {
        const url = `http://localhost:3000/paqutes/delete/${codigo}`

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