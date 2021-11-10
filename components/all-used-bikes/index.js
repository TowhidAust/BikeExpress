import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProductCard from '../common/product-card'

export default function AllUsedBikes() {
    return (
        <div className="all-used-bikes-root container mt-5">
            <div className="product-cards-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
