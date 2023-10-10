import React from 'react'

const ItemDetailProd = ({productDetail}) => {
   console.log (productDetail)
  return (
    <div>
      
        <h2>{productDetail.title}</h2>
        <img src={productDetail.imagen} alt={productDetail.title}/>
        
    </div>
  )
}

export default ItemDetailProd