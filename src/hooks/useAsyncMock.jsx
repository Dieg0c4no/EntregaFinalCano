import  { useEffect, useState } from 'react'

    const useAsyncMock = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const newMockPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(mock)

        }, 500);
    })
    useEffect(()=>{
        newMockPromise.then((res) => { setData(res), setLoading(false) })
    },[])
  return (
    {data, loading}
  )
}
export default useAsyncMock

export const mostrarProductos = (id) => {
   return new promise ((resolve, reject)=>{

        const productDetail = data.find ((el) => el.id === id);
        
        if(productDetail){
            resolve (productDetail)
        }else{
            reject({
                error: "No se encontró el producto"
            })
        }

   })
}