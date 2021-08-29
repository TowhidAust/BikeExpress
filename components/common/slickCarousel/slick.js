import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="carousel-root">
        <Slider {...settings}>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
          </div>
         
          <div className="carousel-image">
            <img src="https://wallpapercave.com/wp/wp2339534.jpg"/>
          </div>
          
        </Slider>
      </div>
  )
}