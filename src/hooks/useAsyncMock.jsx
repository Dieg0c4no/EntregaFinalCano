import  { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase/config';


    const useAsyncMock = (products) => {
        
        const [data, setData] = useState();

        const [loading, setLoading] = useState(true);

        const newMockPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                
                resolve(products)

            }, 500);
        })

        useEffect(()=>{
        
            const productRef = collection(db, "products")
            getDocs(productRef)
            .then((resp)=>{
                    setData(resp.docs.map((doc)=>{
                        setLoading(false)
                    return {...doc.data(), id: doc.id}
                    
                }))
            })
            
            // newMockPromise.then((resp) => { setData(resp), setLoading(false) })
        },[])

        return (

        {data, loading}

    )}

export default useAsyncMock

export const mostrarProductos = (id) => {
   return new Promise ((resolve, reject)=>{

        const productDetail = productsData.find ((el) => el.id === parseInt(id));
        
        if(productDetail){
            resolve (productDetail)
        }else{
            reject({
                error: "No se encontró el producto"
            })
        }

   })
}