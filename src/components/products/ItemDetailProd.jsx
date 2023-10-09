import React from 'react'

const ItemDetailProd = ({item}) => {
    console.log(item)
  return (
    <div>
        <img src={item.imagen}/>
    </div>
  )
}

export default ItemDetailProd