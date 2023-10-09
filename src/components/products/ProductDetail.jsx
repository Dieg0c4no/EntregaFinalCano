import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
                    <Link color= "secondary" variant="outlined" to={`/productDetail/${products.id}`}> ver + </Link>
                </CardContent>
            </Card>

        </Grid>
  )
}

export default ProductDetail