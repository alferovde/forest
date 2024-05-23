import React from "react";
import "./footer.scss";
import SVGImage from "./../MyComponents/SVGImage/SVGImage";
import { social } from "../../Images/sprites";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <ul>
          <li>
            <a href="">
              <SVGImage svg_src={social.youtube} />
            </a>
          </li>
          <li>
            <a href="">
              <SVGImage svg_src={social.insta} />
            </a>
          </li>
          <li>
            <a href="">
              <SVGImage svg_src={social.face} />
            </a>
          </li>
          <li>
            <a href="">
              <SVGImage svg_src={social.twitter} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>f&b ® 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
