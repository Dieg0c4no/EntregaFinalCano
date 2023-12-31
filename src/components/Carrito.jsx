import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
    {
        carrito.map((prod) => (
            <div key={prod.id}>
            <h3>{prod.title}</h3>
            <p>Precio unitario: ${prod.price}</p>
            <p>Precio total: ${prod.price* prod.cantidad}</p>
            <p>Cantidad:{prod.cantidad}</p>
           
            </div>
        ))
    }
      { carrito.length > 0 ?
        <>
            <h2 className='price-total'> Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar} variant="outlined">Vaciar Carrito</button>
        </>:
        <h2> Vacio😢 </h2>
      }
    </div>
  )
  
}

export default Carrito