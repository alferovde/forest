import React, { useState, useEffect } from "react";
import "./search.scss";
import Input from "../MyComponents/Input/Input";
import Button from "../MyComponents/Button/Button";
import { sliderItems } from "../../DB/store";
import { close } from "../../Images/sprites";
import SVGImage from "./../MyComponents/SVGImage/SVGImage";
const SearchModule = ({ setModalSearch, modalSearch }) => {
  const [search, setSearch] = useState(undefined);

  let resultSearch = sliderItems.map((item) => {
    for (let i = 0; i < Object.keys(item).length; i++) {
      if (item.text.toLowerCase().includes(search)) {
        return item;
      }
    }
  });

  let result = resultSearch.map((item, index) => {
    if (item) {
      return (
        <li className="search__item">
          <a href={item.id} className="search__link">
            ...{search}
          </a>

          {item.text.slice(0, 70)}
        </li>
      );
    }
  });

  return (
    <div className="modal_search_container ">
      <div className="modal_search container animate__animated animate__zoomIn">
        <div className="modal_search__wrapper">
          <div
            className="close_search"
            onClick={() => setModalSearch(!modalSearch)}
          >
            <SVGImage svg_src={close} />
          </div>
          <h2>поиск по сайту</h2>
          <div className="search__input">
            <Input onChange={setSearch} />
          </div>

          <div className="result__search">
            {search != "" ? result : undefined}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModule;
