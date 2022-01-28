import ProductCard from "../../Common/ProductCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import router from "next/router";

export default function FeaturedBikes() {
    const seeDetailsClickHandler = (e, id) => {
        router.push(`/used-bikes/bike-details?id=${id}`)
    }
    const returnFeaturedBikes = () => {
        let featuredBikes = [
            {
                id: 1,
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
                id: 2,
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
                id:3,
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
                id:4,
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

        return featuredBikes.map((item, index) => (
            <Grid className="p-1" key={index} item xs={12} md={3}>
                <ProductCard 
                    id={item.id}
                    productInfo={item}
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
                    seeDetailsClickHandler={seeDetailsClickHandler}
                />
            </Grid>
        ))
    }
    return (
        <div className="budget-bikes-root">
            <div className="budget-bikes-inner">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {returnFeaturedBikes()}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
