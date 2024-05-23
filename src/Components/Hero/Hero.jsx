import React from "react";
import "./hero.scss";
import { hero } from "../../DB/store";
import SVGImage from "./../MyComponents/SVGImage/SVGImage";
import { arrow } from "../../Images/sprites";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__text">{hero.text}</p>
        <a href={hero.link.href} className="hero__link link">
          {hero.link.text}
          <SVGImage svg_src={arrow} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
