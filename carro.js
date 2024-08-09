let carrito = [];

const productoAlmacenado = document.getElementById("almacenamiento-card");

productoAlmacenado.addEventListener('click', (evento) => {
    if
        (evento.target.classList.contains('agregar')); {
        agregarAlCarro(evento.target.id);
    }
    //Escuchamos el boton para poder agregar al carrito, siempre y cuando se clickee dentro del boton "comprar".
});

const agregarAlCarro = (productoId) => {
    const productoRepetido = carrito.some((producto) => producto.id == productoId);

    if (productoRepetido) {
        const producto = carrito.find((producto) => producto.id == productoId);
        //Buscamos el producto que esta repetido.
        producto.cantidad++;
        const productoCantidad = document.getElementById(`cantidad${producto.id}`);
        productoCantidad.textContent = `${producto.cantidad}`
        //Con esto vamos sumando los productos que queremos comprar mas de 1 vez.
    }
    else {
        const producto = productos.find((producto) => producto.id == productoId);
        carrito.push(producto);
        console.log(carrito);
        //Agregamos el producto pero sumandole la cantidad, sin crearse uno nuevo.
        mostrarProductoEnCarro(producto);
    }
}

const mostrarProductoEnCarro = (producto) => {
    const carritoContenedor = document.getElementById('carrito-contenedor')

    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')

    div.innerHTML += `
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
        `
    carritoContenedor.appendChild(div);
};
mostrarProductoEnCarro(producto);

const eliminarProductoCarrito = (productoId) => {
    const indexProducto = carrito.findIndex((producto) => producto.id == productoId); 
    
    carrito[indexProducto].cantidad === 1
    ? carrito.splice(indexProducto, 1)
    : carrito[indexProducto].cantidad--
    //Simplificacion

    mostrarEnCarro(carrito);
}

const mostrarEnCarro = (carrito) => {
    const carritoContenedor = document.getElementById('carrito-contenedor')

    carritoContenedor.innerHTML = '';
    //Con esto vaciamos el DOM
    carrito.forEach(producto => {
        const div = document.createElement('div')
    div.classList.add('productoEnCarrito')

    div.innerHTML += `
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
        `
    carritoContenedor.appendChild(div);
    });
};