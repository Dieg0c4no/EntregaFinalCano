import React from 'react'

const ItemDetailProd = ({ProductDetail}) => {
   console.log (ProductDetail)
  return (
    <div>
        <h2>{ProductDetail.title}</h2>
        <img src={ProductDetail.imagen} alt={ProductDetail.title}/>
        
    </div>
  )
}

export default ItemDetailProd