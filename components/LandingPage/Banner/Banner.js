import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import SlickCarousel from '../../Common/SlickCarousel/Slick';

export default function Banner() {
    const returnAllBrandCards = () => {
        let brands = ['/images/default-bike-2.jpg', '/images/default-bike-3.jpg', '/images/default-bike-2.jpg', '/images/default-bike-3.jpg', '/images/default-bike.jpg'];
        return brands.map((item, index) => (
            <div className="p-1" key={index}>
                <img src={item} style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "5px" }} alt='/images/default-bike-2.jpg' />
            </div>
        ))
    }
    return (

        <div className='banner-root-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sm={12}>
                        <div className='banner-menu-container'>Menubar</div>
                    </Grid>
                    <Grid item xs={12} md={9} sm={12}>
                        <div className='banner-menu-carousel'>
                            <SlickCarousel slickComponent={returnAllBrandCards()} slidesToShow={1} slidesToScroll={1} />
                        </div>
                        <div className='banner-more-categories'>
                            <Box sx={{
                                width: "100%",
                                display: 'flex',
                                justifyContent:"flex-start",
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: "10%",
                                    height: 100,
                                },
                            }}>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                         <div>SUZUKI</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>YAMAHA</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>KTM</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>TVS</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>HONDA</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>PALSAR</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>TARO</div>
                                    </div>
                                }/>
                                <Paper className='banner-categories-container' sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} children={
                                    <div className='banner-categories-content'>
                                          <div>HERO</div>
                                    </div>
                                }/>

                            </Box>

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
