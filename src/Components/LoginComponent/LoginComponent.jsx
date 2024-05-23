import React, { useState } from "react";
import "./login.scss";
import Input from "../MyComponents/Input/Input";
import Button from "../MyComponents/Button/Button";
import { close } from "../../Images/sprites";
import SVGImage from "./../MyComponents/SVGImage/SVGImage";
import { users } from "../../DB/store";
const LoginComponent = ({ setModalLogin, modalLogin }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [style, setStyle] = useState("");

  const handlerCurrentUser = (type, value) => {
    if (type === "email") {
      setCurrentUser({ ...currentUser, email: value });
      setStyle("");
    } else if (type === "password") {
      setCurrentUser({ ...currentUser, password: value });
      setStyle("");
    }
  };

  const handlerLogin = () => {
    users.map((user) => {
      if (
        user.email === currentUser.email &&
        user.password === currentUser.password
      ) {
        setStyle("animate__animated animate__flash");
        setTimeout(() => {
          setModalLogin(!modalLogin);
        }, 1200);
      } else if (
        user.email !== currentUser.email &&
        user.password !== currentUser.password
      ) {
        setStyle("animate__animated animate__shakeX");
      }
    });
  };

  return (
    <div className="modal_login_container ">
      <div className="modal_login container animate__animated animate__bounceIn">
        <div className="modal_login__wrapper">
          <h2>авторизация</h2>
          <div className="login_close">
            <SVGImage
              svg_src={close}
              onClick={() => setModalLogin(!modalLogin)}
            />
          </div>

          <div className="login__wrapper">
            <Input
              placeholder={"email"}
              onChange={(e) => handlerCurrentUser("email", e)}
            />
            <Input
              placeholder={"password"}
              onChange={(e) => handlerCurrentUser("password", e)}
            />

            <Button
              onClick={() => handlerLogin()}
              className={style !== "" ? style : style}
              disable={!currentUser?.email || !currentUser?.password}
            >
              Вход
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
