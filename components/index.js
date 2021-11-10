import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FeaturedBikes from './landing-page/featured-bikes';
import Banner from './common/banner/banner';
import SlickCarousel from './common/slick-carousel/slick';
import BasicCard from './common/basic-card';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Router, useRouter } from 'next/dist/client/router';
import ProductCard from './common/product-card';
export default function Index() {

  const router = useRouter();
  const returnIcon = (iconName) => {
    if (iconName === "usedBike") {
      return <TwoWheelerIcon sx={{ color: "#384569", fontSize: "4em" }} />
    }
    if (iconName === "sellBike") {
      return <MonetizationOnOutlinedIcon sx={{ color: "#384569", fontSize: "4em" }} />
    }
    if (iconName === "exchangeBike") {
      return <ChangeCircleOutlinedIcon sx={{ color: "#384569", fontSize: "4em" }} />
    }
  }
  const usedBikeClickHandler = () => {
    router.push('/all-used-bikes');
  }
  const sellBikeClickHandler = () => {
    router.push('/sell-bike');
  }
  const exchangeBikeClickHandler = () => {
    router.push('/exchange-bike');
  }
  return (
    <>
      <Banner />
      <section className="landing-page-root">
        <div className="one-stop-card-container common-section-mergin">
          <h3 className="text-center mb-3">ONE STOP FOR COUNTLESS BENEFITS</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <BasicCard title="SELL YOUR BIKE" description="Sell your bike to BikeHub at the best price with instant payment." icon={returnIcon('sellBike')} onclickCallback={sellBikeClickHandler} />
              </Grid>
              <Grid item xs={12} md={4}>
                <BasicCard title="BUY USED BIKES" description="Buy the best quality used bikes from BikeHub at a reasonable price." icon={returnIcon('usedBike')} onclickCallback={usedBikeClickHandler} />
              </Grid>
              <Grid item xs={12} md={4}>
                <BasicCard title="EXCHANGE YOUR BIKE" description="Bring your old bike and get it exchanged with a new bike at the best price." icon={returnIcon('exchangeBike')} onclickCallback={exchangeBikeClickHandler} />
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="featured-bikes-container common-section-mergin">
          <h3 className="text-center mb-3">FEATURED BIKES</h3>
          <FeaturedBikes />
        </div>
        <div className="budget-bikes-container common-section-mergin">
          <h3 className="text-center mb-3">BUDGET BIKES</h3>
          <SlickCarousel slickComponent={<ProductCard />} />
        </div>
        <div className="search-by-brand-container common-section-mergin">
          <h3 className="text-center mb-3">SEARCH BY BRAND</h3>
          <SlickCarousel slickComponent={<BasicCard icon={<TwoWheelerIcon sx={{ color: "#384569", fontSize: "4em" }} />} title="SUZUKI" description="Lorem ipsum dolor sinet" />} />
        </div>
      </section>
    </>
  )
}
