import React from "react";
import "./helpproject.scss";
import Button from "../MyComponents/Button/Button";
import Input from "../MyComponents/Input/Input";
import { help_project } from "../../DB/store";
const HelpProject = () => {
  return (
    <section className="help-project" id="contact">
      <div className="help-project-wrapper container">
        <h2>{help_project.title}</h2>
        <p>{help_project.text}</p>
        <form action="#">
          <Input placeholder={"Имя"} />
          <Input placeholder={"Email"} />

          <Button>Отправить</Button>
        </form>
      </div>
    </section>
  );
};

export default HelpProject;
