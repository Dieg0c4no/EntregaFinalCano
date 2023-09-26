import { Card, CardContent, Grid, Typography } from "@mui/material";
const ProductDetail = ({products, children}) => {
    const {id, image, title, price} = products

  return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{title}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>

        </Grid>
  )
}

export default ProductDetail