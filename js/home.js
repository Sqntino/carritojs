
const pintarProductos = (productos) => {
    const contenedor = document.getElementById("almacenamiento-card");

    productos.forEach(productos => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                        <img src=${productos.imagen}>
                        <p class="card-title">${productos.nombre}</p>
                        <button id=${productos.id} class="material-icons agregar">Comprar</button>
                        </div>
                        <div class="card-content">
                            <p>${productos.artista}</p>
                            <p>$${productos.precio}</p>
                        </div>
                        `
        contenedor.appendChild(div);
    });
    console.log(contenedor);
};

pintarProductos(productos); 

productos.forEach(producto => {
    const botonComprar = document.getElementById(`${producto.id}`);

    botonComprar.addEventListener('click', () => {
        console.log('Botón "Comprar" clickeado para:', producto.nombre); 
        Toastify({
            text: `${producto.nombre} ha sido añadido al carrito`,
            duration: 2000,
            gravity: "top",
            position: "right",
            backgroundColor: "#4caf50",
        }).showToast();
    });
});

//Cambios hechos. 
const botonComprar = document.getElementById(productos.id)
botonComprar.addEventListener("click", () => {
agregarAlCarro(productos.id)
});

const topUsuarios = document.getElementById("data")
        fetch('')//topusers.json pero no me arroja la opcion para añadirlo
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
            body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
        }