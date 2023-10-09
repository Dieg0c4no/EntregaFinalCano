import { useEffect, useState } from "react"
import { mostrarProductos } from "../../hooks/useAsyncMock"
import ItemDetailProd from "./ItemDetailProd"
import { useParams } from "react-router-dom"




export const ItemDetail = () => {
  const [productDetail, setProductDetail]= useState({})
  const {id} = useParams()
  useEffect(()=>{

    mostrarProductos(id)
    .then((res) =>{
        setProductDetail(res)
    })
  },[id])
  return (
    <ItemDetailProd productDetail={productDetail}/>
  )
}

