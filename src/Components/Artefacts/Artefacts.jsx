import React from "react";
import "./artefacts.scss";
import img from "../../Images/artefact_img.png";
import SVGImage from "../MyComponents/SVGImage/SVGImage";
import { arrow } from "../../Images/sprites";
import { artefacts } from "../../DB/store";
const Artefacts = () => {
  return (
    <section className="artefacts container" id="lab">
      <h2 className="artefacts__title">{artefacts.artefacts_title}</h2>
      <div className="artefacts__info">
        <div className="artefacts__info-img">
          <img src={img} alt="Новые артефакты" />
        </div>
        <div className="artefacts__info-info">
          <h3>{artefacts.artefacts__info.title}</h3>
          <p>{artefacts.artefacts__info.text}</p>
          <p>{artefacts.artefacts__info.text2}</p>

          <a
            href={artefacts.artefacts__info.link.href}
            className="artefacts__info-link link"
          >
            {artefacts.artefacts__info.link.text}
            <SVGImage svg_src={arrow} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artefacts;
