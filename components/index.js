import { Box, Grid } from '@mui/material';
import FeaturedBikes from './LandingPage/FeaturedBikes';
import SlickCarousel from './Common/SlickCarousel/Slick';
import BasicCard from './Common/BasicCard';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useRouter } from 'next/dist/client/router';
import ProductCard from './Common/ProductCard';
import Banner from './LandingPage/Banner/Banner';

export default function Index() {

  const router = useRouter();

  const returnIcon = (iconName) => {
    if (iconName === "usedBike") {
      return <TwoWheelerIcon sx={{ color: "black", fontSize: "4em" }} />
    }
    if (iconName === "sellBike") {
      return <MonetizationOnOutlinedIcon sx={{ color: "black", fontSize: "4em" }} />
    }
    if (iconName === "exchangeBike") {
      return <ChangeCircleOutlinedIcon sx={{ color: "black", fontSize: "4em" }} />
    }
  }

  const usedBikeClickHandler = () => {
    router.push('/used-bikes/all-used-bikes');
  }

  const sellBikeClickHandler = () => {
    router.push('/sell-bike');
  }

  const exchangeBikeClickHandler = () => {
    router.push('/exchange-bike');
  }

  const returnAllBrandCards = () => {
    let brands = ['SUZUKI', 'YAMAHA', 'HONDA', 'KTM', 'TVS'];
    return brands.map((item, index) => (
      <div className="p-1" key={index}>
        <BasicCard icon={<TwoWheelerIcon sx={{ color: "black", fontSize: "4em" }} />} title={item} description="Lorem ipsum dolor sinet" />
      </div>
    ))
  }

  const returnAllBudgetBikes = () => {
    let budgetBikes = [
      {
        title: "KTM",
        picture: "https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 300000,
        description: "Lorem ipsum dolor sinet with some yamaha r15 descriptions",
        discount: 10,
        postedDate: "September 14, 2016",
        modelYear: "2021",
        cc: 150,
        location: "Dhaka",
        kmRun: 4418,
        owner: 1,
        condition: "new"

      },
      {
        title: "HORNET",
        price: 300000,
        picture: "https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Lorem ipsum dolor sinet with some yamaha r15 descriptions",
        discount: 10,
        postedDate: "September 14, 2016",
        modelYear: "2021",
        cc: 150,
        location: "Dhaka",
        kmRun: 4418,
        owner: 1,
        condition: "new"

      },
      {
        title: "SUZUKI GIXXER SF FI ABS",
        picture: "https://images.pexels.com/photos/1191109/pexels-photo-1191109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 300000,
        description: "Lorem ipsum dolor sinet with some yamaha r15 descriptions",
        discount: 10,
        postedDate: "September 14, 2016",
        modelYear: "2021",
        cc: 150,
        location: "Dhaka",
        kmRun: 4418,
        owner: 1,
        condition: "new"

      },
      {
        title: "HONDA REPSOL",
        picture: "https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 300000,
        description: "Lorem ipsum dolor sinet with some yamaha r15 descriptions",
        discount: 10,
        postedDate: "September 14, 2016",
        modelYear: "2021",
        cc: 150,
        location: "Dhaka",
        kmRun: 4418,
        owner: 2,
        condition: "new"

      },
      {
        title: "HONDA REPSOL",
        picture: "https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 300000,
        description: "Lorem ipsum dolor sinet with some yamaha r15 descriptions",
        discount: 10,
        postedDate: "September 14, 2016",
        modelYear: "2021",
        cc: 150,
        location: "Dhaka",
        kmRun: 4418,
        owner: 2,
        condition: "new"

      }
    ];
    return budgetBikes.map((item, index) => (
      <div className="p-1" key={index}>
        <ProductCard productInfo={item}
          title={item.title}
          picture={item.picture}
          price={item.price}
          description={item.description}
          discount={item.discount}
          postedDate={item.postedDate}
          modelYear={item.modelYear}
          cc={item.cc}
          location={item.location}
          kmRun={item.kmRun}
          owner={item.owner}
          condition={item.condition}
        />
      </div>
    ))
  }

  return (
    <>
      <section className="landing-page-root mt-5">
        <Banner />
        <div className="one-stop-card-container common-section-mergin">
          <h3 className="mb-3">ONE STOP FOR COUNTLESS BENEFITS</h3>
          <hr/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <BasicCard title="SELL YOUR BIKE" description="Sell your bike to BikeHub at the best price with instant payment." icon={returnIcon('sellBike')} onclickCallback={sellBikeClickHandler} cardClass="home-min-card-height" />
              </Grid>
              <Grid item xs={12} md={3}>
                <BasicCard title="BUY USED BIKE" description="Buy the best quality used bikes from BikeHub at a reasonable price." icon={returnIcon('usedBike')} onclickCallback={usedBikeClickHandler} cardClass="home-min-card-height" />
              </Grid>
              <Grid item xs={12} md={3}>
                <BasicCard title="BUY NEW BIKE" description="Bring your old bike and get it exchanged with a new bike at the best price." icon={returnIcon('usedBike')} onclickCallback={usedBikeClickHandler} cardClass="home-min-card-height" />
              </Grid>
              <Grid item xs={12} md={3}>
                <BasicCard title="EXCHANGE YOUR BIKE" description="Bring your old bike and get it exchanged with a new bike at the best price." icon={returnIcon('exchangeBike')} onclickCallback={exchangeBikeClickHandler} cardClass="home-min-card-height" />
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="featured-bikes-container common-section-mergin">
          <h3 className="mb-3">FEATURED BIKES</h3>
          <hr/>
          <FeaturedBikes />
        </div>
        <div className="budget-bikes-container common-section-mergin">
          <h3 className="mb-3">BUDGET BIKES</h3>
          <hr/>
          <SlickCarousel slickComponent={returnAllBudgetBikes()} />
        </div>
        <div className="search-by-brand-container common-section-mergin">
          <h3 className="mb-3">SEARCH BY BRAND</h3>
          <hr/>
          <SlickCarousel slickComponent={returnAllBrandCards()} />
        </div>
      </section>
    </>
  )
}
