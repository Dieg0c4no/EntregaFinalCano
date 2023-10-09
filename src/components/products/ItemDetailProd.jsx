import React from 'react'
import ProductDetail from './ProductDetail'

const ItemDetailProd = ({ProductDetail}) => {
   
  return (
    <div>
        <img src={ProductDetail.imagen}/>
    </div>
  )
}

export default ItemDetailProd