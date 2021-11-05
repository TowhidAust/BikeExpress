import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import BudgetBikes from './budgetBikes';
import Banner from './common/banner/banner';
import SlickCarousel from './common/slickCarousel/slick';
import OneStopCard from './oneStopCard';
export default function Index() {
  return (
    <>
      <Banner />
      <section className="landing-page-root">
        <div className="one-stop-card-container">
          <h3 className="text-center mt-5 mb-5">One stop for countless benefits</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <OneStopCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <OneStopCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <OneStopCard />
              </Grid>
            </Grid>
          </Box>
        </div>
        <BudgetBikes />
        <SlickCarousel />
      </section>
    </>
  )
}
