import ProductCard from "../common/productCard";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BudgetBikes() {
    return (
        <div className="budget-bikes-root">
            <div className="budget-bikes-inner">
                <h3 className="text-center p-5">Budget Bikes</h3>
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
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
