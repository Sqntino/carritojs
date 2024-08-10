document.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarEnCarro(carrito);
        actualizarTotalCarrito(carrito);
    }

    pintarProductos(productos);
});