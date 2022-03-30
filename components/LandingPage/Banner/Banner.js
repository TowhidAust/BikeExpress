import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import SlickCarousel from '../../Common/SlickCarousel/Slick';
import defaultBike from '../../../public/images/default-bike-2.jpg'
import bikeDeliveryImg from '../../../public/images/bike_delivery_1.png'
import bikeInspectionImg from '../../../public/images/bike_inspection.png'
import bikeServiceImg from '../../../public/images/bike_service_1.png'

import Image from 'next/image';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

// https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif
export default function Banner() {
    const returnAllBrandCards = () => {
        let brands = [defaultBike, bikeDeliveryImg, bikeInspectionImg, bikeServiceImg];
        return brands.map((item, index) => (
            <div className="p-1 image-cont" key={index}>
                <Image
                    alt="Banner-Bikes"
                    src={item}
                    objectFit="cover"
                    quality={100}
                />
            </div>
        ))
    }
    return (

        <div className='banner-root-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sm={12}>
                        <div className='banner-left-menu-container'>
                            <div className='banner-left-menu-title'>Categories</div>
                            <ul className='banner-left-menu-ul'>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Used Bike</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> New Bike</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> All Accessories</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> T-Shirt</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Jacket</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Riding Gears</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Helmet</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Bike Lock</li>
                                <li> <DoubleArrowOutlinedIcon sx={{ color: "#ddd" }} /> Bike Parts</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9} sm={12}>
                        <div className='banner-menu-carousel'>
                            <SlickCarousel slickComponent={returnAllBrandCards()} slidesToShow={1} slidesToScroll={1} />
                        </div>
                        <div className='banner-more-categories'>
                            <Box sx={{
                                width: "100%",
                                display: 'flex',
                                justifyContent: "flex-start",
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: "10%",
                                    height: 70,
                                },
                            }}>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>SUZUKI</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>YAMAHA</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>KTM</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>TVS</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>HONDA</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <div className='banner-categories-content'>
                                        <div>PALSAR</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>TARO</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>HERO</div>
                                    </div>
                                </Paper>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
