import { useEffect, useState } from "react"
import ItemDetailProd from "./ItemDetailProd"
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"


export const ItemDetail = () => {

  const [productDetail, setProductDetail]= useState([])

  const {id} = useParams()

  useEffect(()=>{
    const docRef = doc(db, "products", id);
    getDoc(docRef)
    .then((resp)=>{
      
       setProductDetail(
         {...resp.data(), id:resp.id}
         );
    })
  
   },[id]);

  return (

     <ItemDetailProd productDetail={productDetail}/>

  )
}

