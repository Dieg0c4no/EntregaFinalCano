import { useEffect, useState } from "react"
import { mostrarProductos } from "../../hooks/useAsyncMock"
import ItemDetailProd from "./ItemDetailProd"



export const ItemDetail = ({itemId}) => {
  const {item, setItem}= useState(null)
  useEffect(()=>{

    mostrarProductos(itemId)
    .then ((res) =>{
        setItem(res)
    })
  },[])
  return (
    <ItemDetailProd item = {item}/>
  )
}

