import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SlickCarousel(props) {
  const { slickComponent, slidesToShow, slidesToScroll } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 4,
    slidesToScroll: slidesToScroll || 4,
    initialSlide: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow || 3,
          slidesToScroll: slidesToScroll || 3,
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

  return (
    <div className="slick-carousel-container">
      <Slider {...settings}>
        {slickComponent}
      </Slider>
    </div>
  )
}