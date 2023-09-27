import { Card, CardContent, CircularProgress, Typography } from '@mui/material'
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

                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <Typography>
                                {category.category}
                            </Typography>
                        </CardContent>

                    
                    </Card>

                )

            })
        }
    </div>
  )
}

export default Categories