import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

const BikeShops = (props) => {
    const returnAllShops = () => {
        let shopArr = [
            {
                shopName: "BikeHub",
                ownerName: "Md. Towhidul Islam",
                shopType:"bike/accessories",
                location: "Boshundhora R/A",
                nationalId: "19938506000010",
                email: "007towhid2016@gmail.com",
                password: "123456",
                tin: "1234",
                tradeLicence: "78932"
            },
            {
                shopName: "SAWARI",
                ownerName: "Md. Towhidul Islam",
                shopType:"bike/accessories",
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
                <Grid key={index} xs={12} md={6} className="p-2">
                    <Card>
                        <CardActionArea>
                            <CardContent>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={2} className="p-2">
                                     <img className="image-width-100 shop-imgae" src="/images/default-bike.jpg"/>
                                </Grid>
                                <Grid xs={12} md={10} className="p-2">
                                    <div className="title">{item.shopName}</div>
                                    <div>{item.email}</div>
                                    <div>{item.shopType}</div>
                                    <div>{item.location}</div>
                                </Grid>
                            </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })
    }
    return (
        <div className="all-bike-shop-root mt-1">
            <div className="all-shops container">
                <Grid container>
                    {returnAllShops()}
                </Grid>
            </div>
        </div>
    )
}



export default BikeShops
