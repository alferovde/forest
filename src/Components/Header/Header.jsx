import React, { useState } from "react";
import "./header.scss";
import SVGImage from "../MyComponents/SVGImage/SVGImage";
import { logo, login, search } from "../../Images/sprites";
import DesctopMenu from "../DesctopMenu/DesctopMenu";
import SearchModule from "../SearchComponent/SearchModule";
import LoginComponent from "../LoginComponent/LoginComponent";

const Header = () => {
  const [modalSearch, setModalSearch] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <SVGImage svg_src={logo} className={"logo"} />
        <DesctopMenu className={"header__menu"} />
        <SVGImage
          svg_src={search}
          onClick={() => {
            setModalSearch(!modalSearch);
          }}
          setModalSearch={setModalSearch}
          modalSearch={modalSearch}
          className={"header__search"}
        />
        <SVGImage
          svg_src={login}
          className={"header__login"}
          onClick={() => {
            setModalLogin(!modalLogin);
          }}
        />
      </div>

      {modalSearch ? (
        <SearchModule
          setModalSearch={setModalSearch}
          modalSearch={modalSearch}
        />
      ) : undefined}
      {modalLogin ? (
        <LoginComponent setModalLogin={setModalLogin} modalLogin={modalLogin} />
      ) : undefined}
    </header>
  );
};

export default Header;
