import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, CardActionArea, CardMedia, Typography } from '@mui/material';
import Select from 'react-select'

import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import BikeHubCheckBox from '../../common/checkbox';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const BikeShops = (props) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const selectOptions = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Sylhet', label: 'Sylhet' },
    ]
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
            },
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
                    <Grid item xs={12} md={3} className="p-2">
                        <h3>Filter</h3>
                        <div className="filter-container">
                            <div className="filter-inner">
                                <div className="select-container">
                                    <Select options={selectOptions} />
                                </div>

                                <Accordion className="m-0" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography >
                                            Budget
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>BDT 0 - 15000</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>BDT 0 - 25000</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>BDT 0 - 35000</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>BDT 0 - 45000</div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion className="m-0" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography >
                                            Brand
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>SUZUKI</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>YAMAHA</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>HONDA</div>
                                        </div>
                                        <div className="checkbox-container d-flex align-items-center">
                                            <BikeHubCheckBox />
                                            <div>HERO</div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
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
