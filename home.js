
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

//Cambios hechos. 
const botonComprar = document.getElementById(productos.id)
botonComprar.addEventListener("click", () => {
agregarAlCarro(productos.id)
});


//Toastify
// document.getElementById("${productos.id}").addEventListener("click", function() {
//     Toastify({
//         text: "Producto agregado al carrito",
//         duration: 3000, 
//         close: true, 
//         gravity: "top", 
//         position: "right", 
//         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", 
//         stopOnFocus: true, 
//     }).showToast();
// });

