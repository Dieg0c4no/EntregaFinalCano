import React, { useState } from 'react'

export const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
   
  return (
    <div>
        <div className='item-count'>
            <button className='button-cant'onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className='button-cant'onClick={handleSumar}>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}
