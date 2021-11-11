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
    return (
        <div className="all-used-bikes-root mt-5 mb-5">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
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
                            <h3>All used bikes</h3>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ProductCard />
                                    </Grid>
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
