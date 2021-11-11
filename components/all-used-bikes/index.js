import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ProductCard from '../common/product-card'
import Select from 'react-select'
import BikeHubCheckBox from '../common/checkbox'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


// accordion imports
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPaginate from 'react-paginate'


export default function AllUsedBikes() {

    // for accordion
    const [expanded, setExpanded] = React.useState(false);
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

    const returnUsedBikes = () => {
        let usedBikes = [

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

        return usedBikes.map((item, index) => (
            <Grid className="p-1" key={index} item xs={12} md={3}>
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
            </Grid>
        ))
    }

    return (
        <div className="all-used-bikes-root mt-5 mb-5">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sx={{paddingRight:"1%"}}>
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
                    <Grid item xs={12} md={9}>
                        <div className="product-cards-container">
                            <h3 className="mb-4">All used bikes</h3>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    {returnUsedBikes()}
                                </Grid>
                            </Box>
                            <div className="common-pagination-style">
                                <ReactPaginate
                                    previousLabel={<FiChevronLeft />}
                                    nextLabel={<FiChevronRight />}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={100}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={6}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}
