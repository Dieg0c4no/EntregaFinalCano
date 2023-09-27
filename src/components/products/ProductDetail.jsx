import { Card, CardContent, Grid, Typography } from "@mui/material";
const ProductDetail = ({products, children}) => {
    const {id, image, title, price} = products

  return (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card >
                <img src={image} />
                <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>

        </Grid>
  )
}

export default ProductDetail