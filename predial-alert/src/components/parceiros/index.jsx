
import Slider from 'react-slick';
import Tdg from '../../../public/imagens/tdg.png';
import ElloNordeste from '../../../public/imagens/ello.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carrosel = () => {
  const logos = [
    Tdg,
    ElloNordeste,
    // Adicione mais logos conforme necessário
  ];

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '150px', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrosel;
