import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../Common/ProductCard'
import Select from 'react-select'
import BikeHubCheckBox from '../Common/CheckBox'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';


export default function AllUsedBikes() {
    const router = useRouter();
    const selectOptions = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Sylhet', label: 'Sylhet' },
    ]

    const seeDetailsClickHandler = (e, id) => {
        alert("see details click handler");
        router.push('/')
    }
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
            <Grid key={index} item xs={12} md={4} xl={3}>
                <ProductCard productInfo={item}
                    title={item.title}
                    picture={item.picture}
                    seeDetailsClickHandler={seeDetailsClickHandler}
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
                <Grid container>
                    <Grid item xs={12} md={3} sx={{ paddingRight: "1%" }}>
                        <h3>Filter</h3>
                        <div className="filter-container">
                            <div className="filter-inner">
                                <div className="select-container mb-3">
                                    <Select options={selectOptions} />
                                </div>

                                <div className="budget-filter">
                                    <Typography variant="h6">
                                        Budget
                                    </Typography>
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
                                </div>
                                <div className="brand-filter">
                                    <Typography variant="h6" sx={{marginTop:"4px"}}>
                                        Brand
                                    </Typography>
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
                                    <div className="checkbox-container d-flex align-items-center">
                                        <BikeHubCheckBox />
                                        <div>HERO</div>
                                    </div>
                                    <div className="checkbox-container d-flex align-items-center">
                                        <BikeHubCheckBox />
                                        <div>HERO</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div className="product-cards-container">
                            <h3>All used bikes</h3>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
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
