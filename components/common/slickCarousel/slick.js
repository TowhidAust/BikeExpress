import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="carousel-root">
        <Slider {...settings}>
          <div className=" carousel-image carousel-image-1">
            <div className="carousel-overlay d-flex flex-row justify-content-center align-items-center">
              <div className="carousel-overlay-inner">
                <div className="carousel-overlay-text text-center">
                  <h1> Buy your dream bike from Bike Express </h1>
                  <p> Browse the best bikes in your area. Doorstep delivery, used bike in your prefered area in reasonable price. Also buy new bike from anywhere in Bangladesh. So why so late? Let's jump in, and buy your dream bike. </p>
                </div>
                <div className="carousel-overlay-search d-flex justify-content-center align-items-center">
                    <select>
                      <option>Select Division</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Rajshahi</option>
                      <option>Khulna</option>
                      <option>Barishal</option>
                      <option>Sylhet</option>
                      <option>Mymensing</option>
                    </select>
                    <select>
                      <option>Select District</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Rajshahi</option>
                      <option>Khulna</option>
                      <option>Barishal</option>
                      <option>Sylhet</option>
                      <option>Mymensing</option>
                    </select>
                    <button className="btn btn-primary">Search</button>
                </div>

              </div>
            </div>
          </div>
         
         {/* Side 2 */}
          <div className="carousel-image carousel-image-2">
            <div className="carousel-overlay">
              carousel overlay
            </div>
            <img src="https://wallpapercave.com/wp/wp2339534.jpg"/>
          </div>
          
        </Slider>
      </div>
  )
}