let carrito = [];

const productoAlmacenado = document.getElementById("almacenamiento-card");

productoAlmacenado.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('agregar')) {
        agregarAlCarro(evento.target.id);
    }
});

const agregarAlCarro = (productoId) => {
    const productoRepetido = carrito.some((producto) => producto.id == productoId);

    if (productoRepetido) {
        const producto = carrito.find((producto) => producto.id == productoId);
        producto.cantidad++;
        const productoCantidad = document.getElementById(`cantidad${producto.id}`);
        productoCantidad.textContent = `${producto.cantidad}`;
        actualizarTotalCarrito(carrito);
    } else {
        const producto = productos.find((producto) => producto.id == productoId);
        producto.cantidad = 1; // Asegúrate de que la cantidad esté inicializada correctamente
        carrito.push(producto);
        mostrarProductoEnCarro(producto);
        actualizarTotalCarrito(carrito);
    }
}

const mostrarProductoEnCarro = (producto) => {
    const carritoContenedor = document.getElementById('carrito-contenedor');

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');

    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>$ ${producto.precio}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `;
    carritoContenedor.appendChild(div);
};

const eliminarProductoCarrito = (productoId) => {
    const indexProducto = carrito.findIndex((producto) => producto.id == productoId);

    if (carrito[indexProducto].cantidad === 1) {
        carrito.splice(indexProducto, 1);
    } else {
        carrito[indexProducto].cantidad--;
    }

    mostrarEnCarro(carrito);
    actualizarTotalCarrito(carrito);
}

const mostrarEnCarro = (carrito) => {
    const carritoContenedor = document.getElementById('carrito-contenedor');
    carritoContenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');

        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>$ ${producto.precio}</p>
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
        `;
        carritoContenedor.appendChild(div);
    });
};

const actualizarTotalCarrito = (carrito) => {
    const compraTotal = carrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
    pintarTotalesCarrito(compraTotal);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (compraTotal) => {
    const precioTotal = document.getElementById('precioTotal');
    precioTotal.innerText = compraTotal.toFixed(2);
};

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

document.addEventListener('DOMContentLoaded', () => {
    // Leer el carrito guardado desde localStorage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        // Convertir el carrito guardado en un objeto
        carrito = JSON.parse(carritoGuardado);
        // Mostrar los productos en el carrito
        mostrarEnCarro(carrito);
        // Actualizar el total del carrito
        actualizarTotalCarrito(carrito);
    }
});