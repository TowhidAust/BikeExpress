import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

const BikeShops = (props) => {
    const returnAllShops = () => {
        let shopArr = [
            {
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
            }
        ]
        console.log(shopArr)
        return shopArr.map((item, index) => {
            return (
                <Grid key={index} xs={12} md={4} className="p-2">
                    <CardActionArea>
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
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
            <div className="all-shops">
                <Grid container>
                    {returnAllShops()}
                </Grid>
            </div>
        </div>
    )
}



export default BikeShops
