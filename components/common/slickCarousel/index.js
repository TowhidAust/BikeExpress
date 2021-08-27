import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{width: "90%", margin:"auto"}}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
          <div style={{width: "100%"}}>
            <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"/>
          </div>
        </Slider>
      </div>
  )
}