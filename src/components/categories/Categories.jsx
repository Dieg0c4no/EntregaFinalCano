import { Card, CardContent, CircularProgress, Typography, imageListClasses } from '@mui/material'
import React from 'react'
import useAsyncMock from '../../hooks/useAsyncMock'
import categories from '../../mocks/categorias.json'

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

                        <CardContent>
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