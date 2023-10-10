import React from 'react'

const ItemDetailProd = ({productDetail}) => {
   console.log (productDetail)
  return (
    <div>

        <h2>{productDetail.title}</h2>
        <img src={productDetail.image} alt={productDetail.title}/>
        <h3>${productDetail.price}</h3>
        
    </div>
  )
}

export default ItemDetailProd