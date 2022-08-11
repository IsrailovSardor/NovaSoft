import React from "react";
import "./Technology.scss";
import { ReactComponent as C } from "../../images/steck/c.svg";
import { ReactComponent as Css } from "../../images/steck/css.svg";
import { ReactComponent as Dj } from "../../images/steck/dj.svg";
import { ReactComponent as Html } from "../../images/steck/html.svg";
import { ReactComponent as Js } from "../../images/steck/js.svg";
import nest from "../../images/steck/nest.png";
import post from "../../images/steck/Postgre.png";
import { ReactComponent as Pt } from "../../images/steck/python.svg";
import { ReactComponent as Reac } from "../../images/steck/react.svg";

const Technology = () => {
  return (
    <div className="technology">
      <div className="container">
        <h1>Технологии</h1>
        <div className="technology__hide">
          <Reac className="icon"/>
          <Js className="icon"/>
          <Css className="icon"/>
          <Html className="icon"/>
          <C className="icon"/>
        </div>
        <div className="technology__show">
          <Dj className="icon"/>
          <img src={nest} alt="icon" className="icon"/>
          <img src={post} alt="icon" className="icon-img"/>
          <Pt className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Technology;
