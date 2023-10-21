import { Card, CardContent, CircularProgress, Typography, colors } from '@mui/material'
import useAsyncMock from '../../hooks/useAsyncMock'
import categories from '../../mocks/categorias.json'
import { Link } from 'react-router-dom'

const Categories = () => {
    const {data, loading} = useAsyncMock(categories)
    if(loading){ return <CircularProgress/> }
  return (
    <div>
        <Typography>
           <h2>Categorias</h2> 
        </Typography>
        {
            data.map(( category ) => { 
                return (
                    <Card key={category.id}>

                        <CardContent component={Link} to={`/category/${category.category}`}     className='tipograf'> 
                            <Typography >
                                <h6> {category.category}</h6>   
                            </Typography>
                        </CardContent>

                    </Card>                   
                )

            })
             
        }

        <div className='perro'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9nj6xCIglZwED_y66WiwtmGFQigGGWn3h3Biqy8phbUqeju4nikaFDzm0ypxhtdeqPI&usqp=CAU" alt="perro" />
            <footer>Tienda de Mascotas 2023</footer>
        </div>
    </div>
  )
  
}

export default Categories