import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/slider01.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/slider03.jpg"
          alt="Second slide"
        />
      
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="assets/imgs/template/slider05.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/disability3.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;