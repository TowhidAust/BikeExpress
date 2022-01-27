import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia, Typography } from '@mui/material';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Filter from '../Filter/Filter';
import { useRouter } from 'next/dist/client/router';


const BikeShops = () => {
    const router = useRouter();
    const shopCardClickHandler = () => {
        router.push('/used-bikes/all-used-bikes')
    }

    const returnAllShops = () => {
        let shopArr = [
            {   
                id:1,
                shopName: "BIKEHUB",
                logo: "https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                id:2,
                shopName: "SAWARI",
                logo: "https://cdn.dribbble.com/users/4553005/screenshots/14091351/motor_bike_logo-01_4x.png",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                id:3,
                shopName: "NOORJAHAN MOTORS",
                logo: "https://images.creativemarket.com/0.1.0/ps/5672096/2627/1753/m1/fpnw/wm1/biker-.jpg?1547024729&s=f853cd91429153b8c61bbfc3aa9150a1",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                id:4,
                shopName: "MOTOEXPRESS BD",
                logo: "https://cdn.dribbble.com/users/4553005/screenshots/14091351/motor_bike_logo-01_4x.png",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                id:5,
                shopName: "BIKEHUB",
                logo: "https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                id:6,
                shopName: "BIKEHUB",
                logo: "https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg",
                ownerName: "Md. Towhidul Islam",
                shopType: "bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
        ]
        return shopArr.map((item, index) => {
            return (
                <Grid key={index} item xs={12} md={6} className="p-2">
                    <CardActionArea onClick={shopCardClickHandler}>
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "30%" }}
                                image={item.logo}
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div">
                                        {item.shopName}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" component="div">
                                        {item.location}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" component="div">
                                        {item.shopType}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </CardActionArea>
                </Grid>
            )
        })
    }
    
    return (
        <div className="all-bike-shop-root mt-1">
            <div className="all-shops container-80">
                <Grid container>
                    <Grid item xs={12} md={3} className="p-2">
                        <h3>Filter</h3>
                        <Filter/>
                    </Grid>
                    <Grid item xs={12} md={9} className="p-2">
                        <Grid container>
                            {returnAllShops()}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}



export default BikeShops
