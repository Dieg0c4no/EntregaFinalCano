import useAsyncMock from '../../hooks/useAsyncMock'
import products from '../../mocks/products.json'
import ProductDetail from "./ProductDetail";
import { CircularProgress, Grid } from '@mui/material'

const ProductsList = () => {
    const {data, loading} = useAsyncMock(products)

    if(loading) return <CircularProgress/>
    
  return (<div>
    
    
        <Grid container spacing={3}>
            {
                data.map((products) => {
                    return (
                        <ProductDetail key={products.id} products={products}>

                        </ProductDetail>
                        
                    )
                })
             }
        </Grid>
    </div>)
}

export default ProductsList