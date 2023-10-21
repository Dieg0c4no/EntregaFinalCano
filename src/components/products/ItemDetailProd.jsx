import React from 'react'
import { ItemCount } from '../itemCount'
import { useState } from 'react'

const ItemDetailProd = ({productDetail}) => {
   
  const [cantidad, setCantidad]=useState(1)

  const handleRestar = ()=>{

      cantidad > 1 && setCantidad (cantidad - 1)
  }
  const handleSumar = ()=>{
      
      cantidad < productDetail.stock && setCantidad (cantidad + 1)
  }
  const handleAgregar = ()=>{
    console.log( {...productDetail, cantidad} )
  }

  return (
    <div className='producto'>

        <h2>{productDetail.title}</h2>
        <img src={productDetail.image} alt={productDetail.title}/>
        <h3>${productDetail.price}</h3>
        <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
    </div>
  )
}

export default ItemDetailProd