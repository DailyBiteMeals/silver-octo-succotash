import React, { Component } from "react";
import Slider from "react-slick";

// logo images
import volt from "../../assets/Logo/CustomerLogo/Volt.png";
import Insnap from "../../assets/Logo/CustomerLogo/Insnap.png";
import BoltEarth from "../../assets/Logo/CustomerLogo/BoltEarth.png";
import Practo from "../../assets/Logo/CustomerLogo/practo.png";
import Clayworks from "../../assets/Logo/CustomerLogo/Clayworks.png";
import Keploy from "../../assets/Logo/CustomerLogo/Keploy.png";
import Trigsy from "../../assets/Logo/CustomerLogo/trigsy.png";
import Nasscom from "../../assets/Logo/CustomerLogo/Nasscom.png";
import Fampay from "../../assets/Logo/CustomerLogo/Fampay.png";
import newtral from "../../assets/Logo/CustomerLogo/Newtral.png";

export default class VariableWidth extends Component {
  render() {
    const images = [
      { src: volt },
      { src: Insnap },
      { src: BoltEarth },
      { src: Practo },
      { src: Clayworks },
      { src: Keploy },
      { src: Trigsy },
      { src: Nasscom },
      { src: Fampay },
      { src: newtral },
    ];

    const settings = {
      className: "slider variable-width",
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 500,
      cssEase: "ease",
    };

    return (
      <div className="overflow-x-hidden py-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ width: image.width }}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="px-6"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
