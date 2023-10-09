import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
const ProductDetail = ({products, children}) => {
    const {id, image, title, price} = products

  return (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card >
                <div className="imagenes">
                <img src={image} />  
                </div>
                <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                    <Button color= "secondary" variant="outlined" href={`/productDetail/${products.id}`}> ver + </Button>
                </CardContent>
            </Card>

        </Grid>
  )
}

export default ProductDetail