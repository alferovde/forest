import React from "react";
import "./sliderarticle.scss";
import SVGImage from "../MyComponents/SVGImage/SVGImage";
import { close } from "../../Images/sprites";
const SliderArticle = ({ currentSlide, setCurrentSlide }) => {
  return (
    <div className="slider-article__container">
      <div className="slider-article container animate__animated animate__jackInTheBox">
        <div className="slider-article__wrapper">
          <div className="closeslide" onClick={() => setCurrentSlide(null)}>
            <SVGImage svg_src={close} />
          </div>
          <div className="slider-article__content">
            <div className="article__info">
              <h2>{currentSlide.title}</h2>
              <p>{currentSlide.text}</p>
            </div>
            <div className="article__img">
              <img src={currentSlide.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderArticle;
