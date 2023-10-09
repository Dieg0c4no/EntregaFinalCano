import { useEffect, useState } from "react"
import { mostrarProductos } from "../../hooks/useAsyncMock"
import ItemDetailProd from "./ItemDetailProd"
import ProductDetail from "./ProductDetail"



export const ItemDetail = ({productDetail}) => {
  const {productDetail, setProductDetail}= useState(null)
  useEffect(()=>{

    mostrarProductos(productDetail)
    .then ((res) =>{
        setProductDetail(res)
    })
  },[])
  return (
    <ItemDetailProd item = {productDetail}/>
  )
}

