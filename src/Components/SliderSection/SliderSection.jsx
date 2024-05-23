import React, { useState } from "react";
import "./slidersection.scss";
import Button from "../MyComponents/Button/Button";
import { sliderItems } from "../../DB/store";
import arrow_left from "../../Images/Arrow_left.png";
import arrow_right from "../../Images/Arrow_right.png";
import Media from "react-media";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SliderArticle from "../SliderArticle/SliderArticle";

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(null);

  const sliderArray = sliderItems.map((slide) => {
    return (
      <>
        <Slide index={slide.id} key={slide.id} className="slide__item">
          <div className="slider__img">
            <div className="img__circle">{slide.img__circle}</div>
            <img src={slide.img} alt={slide.title} />
          </div>

          <div className="slider__info">
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
            <Button onClick={() => setCurrentSlide(sliderItems[slide.id - 1])}>
              Подробнее
            </Button>
          </div>
        </Slide>
      </>
    );
  });

  let result = (
    <>
      <Slider>{sliderArray}</Slider>
      <div className="slider__navigation">
        <ButtonBack className="arrow_left">
          <img src={arrow_left} alt="" />
        </ButtonBack>
        <div className="slider__count">
          {" "}
          <DotGroup
            dotNumbers={true}
            showAsSelectedForCurrentSlideOnly={true}
            className="dots__style"
          ></DotGroup>
        </div>
        <span>из</span>
        {sliderItems.length}
        <ButtonNext className="arrow_right">
          <img src={arrow_right} alt="" />
        </ButtonNext>
      </div>
    </>
  );

  return (
    <>
      {currentSlide ? (
        <SliderArticle
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      ) : undefined}
      <section className="slidersection container" id="slider">
        <Media query="(min-width: 1199px) and (max-width: 3500px)">
          <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={125}
            totalSlides={sliderItems.length - 1}
            visibleSlides={2}
            infinite={true}
          >
            {result}
          </CarouselProvider>
        </Media>
        <Media query="(min-width: 768px) and (max-width: 1199px)">
          <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={125}
            totalSlides={sliderItems.length - 1}
            visibleSlides={2}
          >
            {result}
          </CarouselProvider>
        </Media>
        <Media query="(min-width: 0px) and (max-width: 768px)">
          <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={125}
            totalSlides={sliderItems.length - 1}
            visibleSlides={1}
          >
            {result}
          </CarouselProvider>
        </Media>
      </section>
    </>
  );
};

export default SliderSection;
