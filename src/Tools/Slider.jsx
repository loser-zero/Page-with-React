import React, { useState } from "react";
import "./Slider.css"


const Slider = ({ data, slideWidth, slideHeight, slideMargin  }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % (data.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 2 : currentSlide - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-buttons">
        <button id="back-button" className="slider-button" onClick={prevSlide}>
          <img id="img180" className="go-img" src="Go.svg"/>
        </button>
        <button className="slider-button" onClick={nextSlide}>
        <img className="go-img" src="Go.svg"/>
        </button>
      </div>
      <div
        className="slider"
        style={{
          transform: `translateX(-${(slideWidth + slideMargin) * currentSlide}px)`,
        }}
      >
        {data.map((slide, index) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              marginRight: index < data.length - 1 ? slideMargin : 0,
    
            }}
          >
            <div className="image-container" style={{
              width: `${slideWidth}px`,
              height: `${slideHeight}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <img src={slide.image} alt={slide.title} className="slide-image" />
            </div>
            <h4 className="slider-h4">{slide.title}</h4>
            <p className="slider-description">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
