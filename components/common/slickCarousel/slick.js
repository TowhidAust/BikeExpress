import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productCard"
export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />

        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
      </Slider>
    </div>
  )
}