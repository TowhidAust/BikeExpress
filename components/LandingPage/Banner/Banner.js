import { Box, Grid } from '@mui/material';
import SlickCarousel from '../../Common/SlickCarousel/Slick';

export default function Banner() {
    const returnAllBrandCards = () => {
        let brands = ['/images/test_image.png', '/images/test_image.png', '/images/test_image.png', '/images/test_image.png', '/images/test_image.png'];
        return brands.map((item, index) => (
            <div className="p-1" key={index}>
                <img src={item} style={{width: "100%", maxHeight:"100%", objectFit: "cover"}} />
            </div>
        ))
    }
    return (

        <div className='banner-root-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className='banner-menu-container'>Menubar</div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className='banner-menu-carousel'>
                            <SlickCarousel slickComponent={ returnAllBrandCards() } slidesToShow={1} slidesToScroll={1}/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
