import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import BudgetBikes from './budgetBikes';
import Banner from './common/banner/banner';
import SlickCarousel from './common/slickCarousel/slick';
import OneStopCard from './oneStopCard';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
export default function Index() {

  const returnIcon = (iconName) => {
   if(iconName==="usedBike") {
     return  <TwoWheelerIcon sx={{ color: "red", fontSize: "5em" }} /> 
   }
   if(iconName==="sellBike") {
    return  <TwoWheelerIcon sx={{ color: "red", fontSize: "5em" }} /> 
  }
  if(iconName==="exchangeBike") {
    return  <TwoWheelerIcon sx={{ color: "red", fontSize: "5em" }} /> 
  }
  }
  return (
    <>
      <Banner />
      <section className="landing-page-root">
        <div className="one-stop-card-container">
          <h3 className="text-center mt-5 mb-5">One stop for countless benefits</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <OneStopCard title="BUY USED BIKES" description="Buy the best quality used bikes from BikeHub at a reasonable price." icon={returnIcon('usedBike')} />
              </Grid>
              <Grid item xs={12} md={4}>
                <OneStopCard title="SELL YOUR BIKE" description="Sell your bike to BikeHub at the best price with instant payment." icon={returnIcon('sellBike')} />
              </Grid>
              <Grid item xs={12} md={4}>
                <OneStopCard title="EXCHANGE YOUR BIKE" description="Bring your old bike and get it exchanged with a new bike at the best price." icon={returnIcon('exchangeBike')} />
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
