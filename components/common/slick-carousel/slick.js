import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product-card"
export default function SlickCarousel(props) {
  const { slickComponent } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3
  // };
  return (
    <div className="slick-carousel-container">
      <Slider {...settings}>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
        <div className="p-1">
          {slickComponent}
        </div>
      </Slider>
    </div>
  )
}